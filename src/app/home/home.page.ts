import { Component, OnInit } from '@angular/core';
import { ServicioDBService } from '../services/servicio-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombre: string = "";
  username?: string;
  constructor(private dbService: ServicioDBService, private router: Router) {}


  async ngOnInit() {
    const isActiveSession = await this.dbService.checkActiveSession();
    if (!isActiveSession) {
      this.router.navigate(['/login']);
    } else {
      const currentUser = await this.dbService.getCurrentUser();
      if (currentUser === null) {
        this.router.navigate(['/login']);
      } else {
        this.username = currentUser;
      }
    }
  }

  irASaludo() {
    this.router.navigate(['/analisis', { nombre: this.nombre }]);
  }

  submitForm() {
    console.log("Formulario enviado");
    this.router.navigate(['/analisis', { nombre: this.nombre }]);
  }
  async logout() {
    if (this.username) {
      await this.dbService.updateSessionState(this.username, false);
    }
    this.router.navigate(['/login'],  { replaceUrl: true }); 
  }
}