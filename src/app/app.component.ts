import { Component, OnInit } from '@angular/core';
import { FactoryConfiguration } from './classes/configuration/factoryConfiguration';
import { factoryConfigurations } from './classes/data/factories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  factories: Array<FactoryConfiguration> = [];
  
  constructor() {
    this.factories = factoryConfigurations;
  }

  ngOnInit() {

  }
  
}
