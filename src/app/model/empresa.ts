import { Alumno } from "./alumno";
import { Fct } from "./fct";

export class Empresa {

    constructor(
        private _nombre: string,
        private _direccion: string,
        private _cif: string,
        private _fcts: Fct[]
    ) { }

    get nombre(): string { return this._nombre; }
    get direccion(): string { return this._direccion; }
    get cif(): string { return this._cif; }
    get fcts(): Fct[] { return this._fcts; }

    set nombre(nombre: string) { this._nombre = nombre; }
    set direccion(direccion: string) { this._direccion = direccion; }
    set cif(cif: string) { this._cif = cif; }
    set fcts(fcts: Fct[]) { this._fcts = fcts; }

    //other methods
    public alumnos_actuales(): Alumno[] {
        let alumnos_repetidos: Alumno[] = this._fcts.flatMap(fct => fct.alumnos);
        let alumnos_set: Set<Alumno> = new Set(alumnos_repetidos);
        let alumnos_sin_repetir: Alumno[] = [...alumnos_set];
        return alumnos_sin_repetir;
        
        return [...(new Set(this._fcts.flatMap(fct => fct.alumnos)))];
    }

    
}
