import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from 'src/constantes/constantes';
import { ConsultaCentralesService } from 'src/app/servicios/consultaCentrales.service';
import { RespuestaCalculadoraService } from 'src/app/servicios/respuestaCalculadora.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pasodos',
  templateUrl: './pasodos.component.html',
  styleUrls: ['./pasodos.component.scss'],
  animations: [
    trigger('animationFadeOut', [
      transition(':enter', [
        style({ opacity: '1' }),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({ opacity: '0' }))
      ]),
      state('*', style({ opacity: '1' })),
    ])
  ]
})
export class PasodosComponent {

  segundo: FormGroup;
  const = Constantes;

  constructor(public formBuilder: FormBuilder, 
    public consultaCentrales: ConsultaCentralesService,
    public respuestaCalculadora: RespuestaCalculadoraService,
    ) {
    this.crearFormulario();
    this.statusCambia();
    this.aceptarTyc();
   }

   crearFormulario() {
    this.segundo = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      tipoDocumento: [1, Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.minLength(5)]],
      celular: ['', [Validators.required, Validators.pattern(this.const.patternCel), Validators.maxLength(10), Validators.minLength(10)]],
      correoPersonal: ['', [Validators.required, Validators.pattern(this.const.patternMail), Validators.minLength(10)]],
      actividadEconomica: [null, Validators.required],
      ingresoMensual: [0, [Validators.required, Validators.min(this.const.valorMinIngreso)]],
      autorizaConsultaCentrales: [false, Validators.required]
    });

    this.segundo.controls['nombre'].valueChanges.subscribe(value => this.consultaCentrales.contactoCentrales.DatosBasicos.Nombre = value);
    this.segundo.controls['tipoDocumento'].valueChanges.subscribe(value => this.consultaCentrales.contactoCentrales.DatosBasicos.TipoDocumento = value);
    this.segundo.controls['numeroDocumento'].valueChanges.subscribe(value => this.consultaCentrales.contactoCentrales.DatosBasicos.NumeroDocumento = value);
    this.segundo.controls['celular'].valueChanges.subscribe(value => this.consultaCentrales.contactoCentrales.DatosBasicos.Celular = value);
    this.segundo.controls['correoPersonal'].valueChanges.subscribe(value => this.consultaCentrales.contactoCentrales.DatosBasicos.CorreoPersonal = value);
    this.segundo.controls['actividadEconomica'].valueChanges.subscribe(value => this.consultaCentrales.contactoCentrales.DatosFinancieros.ActividadEconomica = value);
    this.segundo.controls['ingresoMensual'].valueChanges.subscribe(value => this.consultaCentrales.contactoCentrales.DatosFinancieros.IngresoMensual = value);
    this.segundo.controls['autorizaConsultaCentrales'].valueChanges.subscribe(value => this.consultaCentrales.contactoCentrales.OtrosDatos.AutorizaConsultaCentrales = value);
   }

   get nombreNovalido() {
    return this.segundo.get('nombre').invalid && this.segundo.get('nombre').touched;
  }
  get tipoIdNoValido() {
    return this.segundo.get('tipoDocumento').invalid && this.segundo.get('tipoDocumento').touched;
  }
  get idNoValido() {
    return this.segundo.get('numeroDocumento').invalid && this.segundo.get('numeroDocumento').touched;
  }

  get documentoExtranjeria() {
    return this.segundo.controls['tipoDocumento'].value == 1 && this.segundo.controls['numeroDocumento'].value.length == 6 && this.segundo.get('numeroDocumento').touched;
  }
  
  get celularNoValido() {
    return this.segundo.get('celular').invalid && this.segundo.get('celular').touched;
  }
  get correoNoValido() {
    return this.segundo.get('correoPersonal').invalid && this.segundo.get('correoPersonal').touched;
  }
  get actividadEconomicaNoValido() {
    return this.segundo.get('actividadEconomica').invalid && this.segundo.get('actividadEconomica').touched;
  }
  get ingresoMensualNoValido() {
    return this.segundo.get('ingresoMensual').invalid && this.segundo.get('ingresoMensual').touched;
  }
  get minimoingresoMensualNoValido() {
    return this.segundo.controls['tipoDocumento'].value < this.const.valorMinIngreso;
  }

  patternCoincide(event, value) {
    const pattern =  new RegExp(value);
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  aceptarTyc(){
    this.respuestaCalculadora.observableAceptarTyc.subscribe(value => {
      this.segundo.controls['autorizaConsultaCentrales'].setValue(value);
    })
  }

  statusCambia() {
    this.segundo.statusChanges.subscribe(val => {
      val === 'VALID' ? this.consultaCentrales.segundoCompleto = true : this.consultaCentrales.segundoCompleto = false;
    });
  }

}
