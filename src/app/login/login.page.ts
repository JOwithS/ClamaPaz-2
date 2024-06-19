import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hide = true;

usuario: string = "";
contrasena: string = "";

  

  constructor() { }

  ngOnInit() {
  }
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  submitForm() {
    console.log("Formulario enviado");
  }
}
