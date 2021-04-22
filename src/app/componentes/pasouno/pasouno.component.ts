import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from '../../../constantes/constantes';
import { ConsultaCentralesService } from 'src/app/servicios/consultaCentrales.service';
import { RespuestaCalculadoraService } from 'src/app/servicios/respuestaCalculadora.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pasouno',
  templateUrl: './pasouno.component.html',
  styleUrls: ['./pasouno.component.scss'],
  animations: [
    trigger('animationFadeOut', [
      transition(':enter', [
        style({ opacity: '1' }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: '0' }))
      ]),
      state('*', style({ opacity: '1' })),
    ])
  ]
})
export class PasounoComponent {

  primero: FormGroup;
  const = Constantes;
  /* cuota: number = 0; */

  constructor( public formBuilder: FormBuilder, public consultaCentrales: ConsultaCentralesService, public respuestaCalculadora: RespuestaCalculadoraService ) {
    this.crearFormulario();
    this.statusCambia();
   }

  crearFormulario() {
    this.primero = this.formBuilder.group({
      monto: ['', [Validators.required, Validators.min(this.const.minimo)]],
      /* precio: ['', [Validators.required, Validators.min(this.const.precioMinimo)]], */
      periodo: ['', Validators.required],
      cuota: [0, Validators.required]
    });

    /* Subcripción de Resultados */
    this.primero.controls['monto'].valueChanges.subscribe( value => {
      this.consultaCentrales.contactoCentrales.OtrosDatos.ValorFinanciar = value;
      if (this.primero.get('periodo').value) {
        this.primero.controls['cuota'].setValue(this.respuestaCalculadora.calcularCuota(this.primero.get('periodo').value, this.primero.get('monto').value));
      }
    });

    /* this.primero.controls['precio'].valueChanges.subscribe( value => {
      this.consultaCentrales.contactoCentrales.DatosBasicos.ValorVehiculo = value;
    }); */

    this.primero.controls['periodo'].valueChanges.subscribe( () => {
        this.primero.controls['cuota'].setValue(this.respuestaCalculadora.calcularCuota(this.primero.get('periodo').value, this.primero.get('monto').value));
    });
  }

  statusCambia() {
    this.primero.statusChanges.subscribe(val => {
      val === 'VALID' ? this.consultaCentrales.primeroCompleto = true : this.consultaCentrales.primeroCompleto = false;
    });
  }

  get montoNoValido() {
    return this.primero.get('monto').invalid && this.primero.get('monto').touched;
  }
  /* get precioNoValido() {
    return this.primero.get('precio').invalid && this.primero.get('precio').touched;
  } */

}
