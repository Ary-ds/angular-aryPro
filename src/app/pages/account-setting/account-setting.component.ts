import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {

  // optimizacion de codigo ->
  // LinkTheme = document.querySelector('#theme');

  // public links: NodeListOf<Element>;
  // se las traslada al servidor 

  // inyeccion de servidor 
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    // this.links = document.querySelectorAll('.selector');
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string){
  
    // se le translado al servidor para que despues se la puede inyectar 
  //  const url = `./assets/css/colors/${theme}.css`;
  //  this.LinkTheme.setAttribute('href', url);
  //  localStorage.setItem('theme', url);
  this.settingsService.changeTheme(theme);

  //  this.checkCurrentTheme();

  }

// se la paso al servidor 
  // checkCurrentTheme(){
  //   // const links = document.querySelectorAll('.selector');

  //   this.links.forEach(elem => {
  //     // si existe la class working borrala 
  //     elem.classList.remove('working');
  //     // se pasa el atritute data-theme a la constante btntheme
  //     const btnTheme = elem.getAttribute('data-theme');

  //     const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
  //     const currentTheme = this.LinkTheme.getAttribute('href');

  //     // comparo si son iguales y la paso la class working
  //     if (btnThemeUrl === currentTheme) {
  //       elem.classList.add('working');
  //     }
  //   });
    
  // }

  

}
