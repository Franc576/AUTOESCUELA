import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Registro } from '../registro/registro';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Registro],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

