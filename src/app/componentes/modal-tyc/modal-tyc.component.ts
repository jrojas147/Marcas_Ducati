import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';
import { RespuestaCalculadoraService } from 'src/app/servicios/respuestaCalculadora.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-modal-tyc',
  templateUrl: './modal-tyc.component.html',
  styleUrls: ['./modal-tyc.component.scss'],
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
export class ModalTycComponent implements OnInit {

  const = Constantes;

  constructor(public respuestaCalculadora: RespuestaCalculadoraService) { }

  ngOnInit() {
  }

}
