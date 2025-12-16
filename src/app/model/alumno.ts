export class Alumno {

    private MayorEdad: number = 18;

    constructor(
        private _dni: string,
        private _nombre: string,
        private _fechaNacimiento: Date,
        private _telefonos: Map<string, string>,
    ){}
    
    get dni(): string {return this._dni;}
    set dni(dni: string) {this._dni = dni;}

    get nombre(): string {return this._nombre;}
    set nombre(nombre: string) {this._nombre = nombre;}

    get fechaNacimiento(): Date {return this._fechaNacimiento;}
    set fechaNacimiento(fecha: Date) {this._fechaNacimiento = fecha;}

    get telefonos(): Map<String, String> {return this._telefonos;}
    set telefonos(telefono: Map<string, string>) {this._telefonos = telefono;}

    //other methods
    public add_phone(desc: string, phone: string){
        this._telefonos.set(desc, phone);
    }

    public delete_phone(desc: string){
        this._telefonos.delete(desc);
    }

    public print_phones(){
        this._telefonos.forEach((v,k) => console.log(k + ": " + v + "\n"));
    }

    public es_mayor_edad(): boolean{
        return new Date().getFullYear() - this._fechaNacimiento.getFullYear() >= this.MayorEdad;
    }
}
