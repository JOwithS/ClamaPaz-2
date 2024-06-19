import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombre: string = "";

  constructor(private router: Router) { }

  ngOnInit() { }

  irASaludo() {
    this.router.navigate(['/analisis', { nombre: this.nombre }]);
  }

  submitForm() {
    console.log("Formulario enviado");
    this.router.navigate(['/analisis', { nombre: this.nombre }]);
  }
}