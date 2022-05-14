import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // simulacion de un menu dinamico 
  menu: any []= [
    {
      titulo: 'Dashboard!!!',
      icono: 'mdi mdi-gauge',
      subMenu: [
        {subTitulo: 'Main', url: '/'},
        {subTitulo: 'Progresso', url: 'progress'},
        {subTitulo: 'Grafica', url: 'grafica1'},
      ]
    }
  ]

  constructor() { }
}
