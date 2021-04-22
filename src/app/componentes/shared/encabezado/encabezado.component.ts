import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  const = Constantes;

  constructor() { }

  ngOnInit() {
  }

}
