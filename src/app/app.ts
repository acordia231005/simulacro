import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Empresa } from './model/empresa';
import { Alumno } from './model/alumno';
import { Fct } from './model/fct';

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  protected readonly title = signal('Empresa');
  public empresa: Empresa | null = null;

  ngOnInit(): void {
    this.iniciar_app();
  }

  public iniciar_app(): void{
    
    let telefonos: Map<String, String > = new Map<String,String>();
    telefonos.set("Casa", "988777222");
    telefonos.set("Trabajo","778899110");

    let alumno1: Alumno = new Alumno("1111111L","Pepito perez", new Date(), telefonos);
    let alumno2: Alumno = new Alumno("2222222P","Juanita Sancho", new Date(), telefonos);
    let fct1: Fct = new Fct(false, new Date("2026/01/12"), new Date("2026/04/15"), [alumno1, alumno2]);
    let fct2: Fct = new Fct(true, new Date("2026/04/04"), new Date("2026/04/29"), [alumno1, alumno2]);

    this.empresa = new Empresa("B0000123", "C/ Benajete 12", "LaLola", [fct1, fct2]);

  }
}