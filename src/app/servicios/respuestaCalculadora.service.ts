import { Injectable } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCalculadoraService {

  mostrarModal = false;
  aceptartyc: any = false;

  observableAceptarTyc: any;

  constructor() { 
    this.observableAceptarTyc = new BehaviorSubject<number>(this.aceptartyc);
   }

  calcularCuota(periodo: number, monto: number) {
    const nmv = Constantes.tasa;
    const seguroTotal = this.calcularTotalSeguro(monto, periodo);
    const valorCuota = this.functionPago(nmv, periodo, monto);
    const seguroCuota = this.functionPago(nmv, periodo, seguroTotal);

    return valorCuota + seguroCuota;
  }

  functionPago(nmv: number, periodo: number, monto: number) {
    const parteUno = monto * nmv;
    const parteDos = 1 - Math.pow((1 + nmv), (- (periodo)));
    return Math.round(parteUno / parteDos);
  }

  calcularTotalSeguro( monto: number, periodo: number) {
    return Math.round(Constantes.constanteSeguro * monto * periodo);
  }

  toggleMostrarModal() {
    this.mostrarModal = !this.mostrarModal;
  }
  toggleAceptaTyc() {
    this.aceptartyc = !this.aceptartyc;
    this.observableAceptarTyc.next(this.aceptartyc);
    this.toggleMostrarModal();
  }
}
