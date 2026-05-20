import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Habilitamos el análisis de cuerpos JSON en las peticiones
app.use(express.json());

/**
 * Endpoint de Registro de Alumnos que envía un email real con Nodemailer
 */
app.post('/api/registro', async (req, res) => {
  const { nombre_completo, correo_electronico, telefono, tipo_carnet } = req.body;

  // Validación de seguridad de campos obligatorios en el servidor
  if (!nombre_completo || !correo_electronico || !telefono || !tipo_carnet) {
    return res.status(400).json({ error: 'Faltan campos obligatorios en la solicitud.' });
  }

  try {
    const nodemailer = await import('nodemailer');

    // ⚠️ REEMPLAZA ESTAS CREDENCIALES POR LAS TUYAS DE GMAIL CUANDO LAS TENGAS:
    const GMAIL_USER = 'ffranj2009@gmail.com'; // Tu Gmail
    const GMAIL_APP_PASS = 'tdcrqirxzftjwhrk'; // Tu Contraseña de aplicación de Google de 16 caracteres

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: `"Autoescuela Matthew" <${GMAIL_USER}>`,
      to: correo_electronico,
      subject: '🚗 ¡Confirmación de Registro - Autoescuela Matthew!',
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
          <div style="text-align: center; border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">🚗 Autoescuela Matthew</h1>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Tu carnet a la primera</p>
          </div>
          
          <h2 style="color: #2563eb; margin-top: 0;">¡Hola ${nombre_completo}!</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            Te has registrado correctamente en nuestra base de datos para solicitar información sobre nuestros cursos de conducción.
          </p>
          
          <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b; font-size: 16px;">Resumen de tus datos:</h3>
            <ul style="list-style-type: none; padding: 0; margin: 0; line-height: 1.8; font-size: 15px;">
              <li><strong>Nombre completo:</strong> ${nombre_completo}</li>
              <li><strong>Teléfono:</strong> ${telefono}</li>
              <li><strong>Permiso de interés:</strong> ${
                tipo_carnet === 'B' ? 'Coche (Permiso B)' :
                tipo_carnet === 'A1' ? 'Moto Ligera (Permiso A1)' :
                tipo_carnet === 'A2' ? 'Moto Intermedia (Permiso A2)' :
                tipo_carnet === 'A' ? 'Moto sin límite (Permiso A)' :
                tipo_carnet === 'AM' ? 'Ciclomotor (Permiso AM)' :
                tipo_carnet === 'C' ? 'Camión Rígido (Permiso C)' :
                tipo_carnet === 'CE' ? 'Tráiler / Camión con Remolque (Permiso C+E)' :
                tipo_carnet === 'CAP' ? 'Certificado de Aptitud Profesional (CAP)' : tipo_carnet
              }</li>
            </ul>
          </div>
          
          <p style="font-size: 15px; line-height: 1.6; color: #334155;">
            Uno de nuestros asesores se pondrá en contacto contigo en las próximas 24 horas a través de tu teléfono (<strong>${telefono}</strong>) para resolver todas tus dudas sobre precios, horarios de clases prácticas y teóricas, y ofertas actuales.
          </p>
          
          <p style="font-size: 15px; line-height: 1.6; color: #334155; font-weight: bold;">
            ¡Gracias por confiar en nosotros para aprender a conducir!
          </p>
          
          <div style="text-align: center; margin: 30px 0 10px 0; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">© 2026 Autoescuela Matthew. Todos los derechos reservados.</p>
            <p style="margin: 5px 0 0 0;">Esta es una confirmación automática. Por favor no respondas a este correo.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`[Email SJO] Correo de confirmación enviado con éxito a ${correo_electronico}`);
    return res.status(200).json({ success: true, message: 'Registro guardado y email enviado.' });

  } catch (error: any) {
    console.error('[Email Error] Fallo al enviar con Nodemailer:', error);
    return res.status(500).json({ error: 'Error del servidor al procesar el envío de correo.' });
  }
});


/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
