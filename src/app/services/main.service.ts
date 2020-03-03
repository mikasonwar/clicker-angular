import { Injectable } from '@angular/core';
import { FactoryComponent } from '../factory/factory.component';
import { ClickupgradeComponent } from '../clickupgrade/clickupgrade.component';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  currency:number = 1000;
  addOnClick:number = 1;
  interval:any; // NodeJS.Timeout
  ips:number = 0;

  factories:Array<FactoryComponent> = [];
  clickUpgrade:ClickupgradeComponent

  constructor() { 
    this.startIPS()
  }

  
  click() {
    this.currency+= this.clickUpgrade.addOnClick;
  }

  registerClickUpgrade(clickUpgrade:ClickupgradeComponent) {
    this.clickUpgrade = clickUpgrade;
  }

  registerFactory(factory:FactoryComponent) {
    if(!this.factories.includes(factory))
      this.factories.push(factory);
  }

  calculateIPS() {
    this.currency += this.ips
  }

  startIPS() {
    this.interval = setInterval((() => {
      this.calculateIPS();
    }).bind(this),1000);
  }
  
  refreshIPS() {
    let total = 0;
    for(let factory of this.factories) {
      total += factory.getCPS();
    }
    this.ips = Math.floor(total);
  }

  stopIPS() {
    if(this.ips) {
      clearInterval(this.ips);
      this.ips=undefined;
    }
  }
}
