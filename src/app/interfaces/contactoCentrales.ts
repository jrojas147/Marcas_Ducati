import { DatosBasicos } from './datosBasicos';
import { DatosFinancieros } from './datosFinancieros';
import { DatosVehiculo } from './datosVehiculo';
import { OtrosDatos } from './otrosDatos';

export interface ContactoCentrales {
    DatosBasicos: DatosBasicos;
    DatosFinancieros: DatosFinancieros;
    OtrosDatos: OtrosDatos;
    DatosVehiculo: DatosVehiculo;
}