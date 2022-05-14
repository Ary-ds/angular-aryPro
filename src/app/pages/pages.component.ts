import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../services/settings.service'

declare function customInitFuntions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  // // optimizacion de codigo ->
  // LinkTheme = document.querySelector('#theme');
  // se fueran transladados al servidor para su posible inyeccion 
  
  constructor(private settingService: SettingsService) { 
    
  }
  
  ngOnInit(): void {

    customInitFuntions();
    
    // const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    // this.LinkTheme.setAttribute('href', url);
    // se fueran transladados al servidor para su posible inyeccion 
    
  }
  

}
