import { Alumno } from "./alumno";

export class Fct {

    constructor(
        private _apto: boolean,
        private _fecha_inicio: Date,
        private _fecha_fin: Date,
        private _alumnos: Alumno[]
    ){}

    get apto(): boolean {return this._apto;}
    get fecha_inicio(): Date {return this._fecha_inicio;}
    get fecha_fin(): Date {return this._fecha_fin;}
    get alumnos(): Alumno[] {return this._alumnos;}

    set apto(apto: boolean) {this._apto = apto;}
    set fecha_inicio(fecha: Date) {this._fecha_inicio = fecha;}
    set fecha_fin(fecha: Date) {this._fecha_fin = fecha;}
    set alumnos(alumno: Alumno[]) {this._alumnos = alumno;}

    // other methods
    public menores_edad(): Alumno[]{
        return this._alumnos.filter(a =>!a.es_mayor_edad());
    }
    

}
