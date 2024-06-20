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
   /* this.loadLastSavedDate();*/

  }

  /*
  async loadLastSavedDate() {
    const lastSavedDate = await this.dbservicio.getLastSavedDate();
    if (lastSavedDate) {
      this.dateForm.patchValue({ selectedDate: new Date(lastSavedDate) });
    }
  }*/

  
 /* async saveDate() {
    const selectedDate = this.dateForm.value.selectedDate;
    console.log('Selección de fecha:', selectedDate);
      //borrar la fecha
  const borrarfecha = new Date(selectedDate).toLocaleDateString('eo-HH');
  //guardar la fecha
  await this.dbservicio.saveSelectedDate(borrarfecha);
}*/
    
  

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


