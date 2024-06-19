import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit { 
  hide = true;
  panelOpenState = false;
  dateForm: FormGroup;
  mostrarMensajefecha: boolean = true;

  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      selectedDate: ['']
    });
  }

  ngOnInit() {
  }

  saveDate() {
    const selectedDate = this.dateForm.value.selectedDate;
    console.log('Selected Date:', selectedDate);
    // Aquí puedes agregar lógica para guardar la fecha, por ejemplo, enviar a un servidor o guardar en almacenamiento local.
  }

  mostrarMensaje(tipo: string) {
    this.ocultarMensajes();
    if (tipo === 'fecha') {
      this.mostrarMensajefecha = true;
    }  
  }
  ocultarMensajes() {
    this.mostrarMensajefecha = false;
  }
}
