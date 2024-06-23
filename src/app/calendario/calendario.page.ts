import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioDBService } from '../services/servicio-db.service';


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

  constructor(private fb: FormBuilder, private dbservicio: ServicioDBService) {
    this.dateForm = this.fb.group({
      selectedDate: ['']
    });
  }

  ngOnInit() {
   this.loadLastSavedDate();

  }
//guardar l fecha señeccionada
async loadLastSavedDate() {
  const lastSavedDate = await this.dbservicio.getSelectedDate();
  if (lastSavedDate) {
    const dateObj = new Date(lastSavedDate);
    this.dateForm.patchValue({ selectedDate: dateObj });
  }
}

  //guardar esaaaa fecha
  async saveDate() {
    const selectedDate = this.dateForm.value.selectedDate;
    if (selectedDate) {
      await this.dbservicio.saveSelectedDate(new Date(selectedDate));
    }
  }
//borrar esa fechaa
  async deleteDate() {
    await this.dbservicio.deleteSelectedDate();
    this.dateForm.patchValue({ selectedDate: '' });
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


