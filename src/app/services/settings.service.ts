import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
   // optimizacion de codigo ->
  private LinkTheme = document.querySelector('#theme');

  constructor() { 

    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.LinkTheme.setAttribute('href', url);
    console.log(' servvidor inicializado  ');
  }


  // metodo para cambiar el tema 
  changeTheme(theme: string){

    const url = `./assets/css/colors/${theme}.css`;

   this.LinkTheme.setAttribute('href', url);
   localStorage.setItem('theme', url);

   this.checkCurrentTheme();
  }


  
  // metodo que marca el tema actula 
  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {
      // si existe la class working borrala 
      elem.classList.remove('working');
      // se pasa el atritute data-theme a la constante btntheme
      const btnTheme = elem.getAttribute('data-theme');

      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.LinkTheme.getAttribute('href');

      // comparo si son iguales y la paso la class working
      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
    
  }
}
