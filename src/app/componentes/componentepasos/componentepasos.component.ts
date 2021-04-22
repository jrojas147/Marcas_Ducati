import { Component, OnInit } from '@angular/core';
import { ConsultaCentralesService } from 'src/app/servicios/consultaCentrales.service';
import { Constantes } from 'src/constantes/constantes';

@Component({
  selector: 'app-componentepasos',
  templateUrl: './componentepasos.component.html',
  styleUrls: ['./componentepasos.component.scss']
})
export class ComponentepasosComponent implements OnInit {

  const = Constantes;

  constructor(public consultaCentrales: ConsultaCentralesService) { }

  ngOnInit() {
  }

}
