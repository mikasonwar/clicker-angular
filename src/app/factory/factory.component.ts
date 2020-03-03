import { Component, OnInit, Input } from '@angular/core';
import { FactoryConfiguration } from '../classes/configuration/factoryConfiguration';
import { MainService } from '../services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  @Input() configuration: FactoryConfiguration;
  price:number;
  ips:number;
  upgrade_price:number;
  description:string;
  image:string;
  owned:number=0;
  upgrade_level:number = 1;

  buy_rate:number = 1.2;
  upgrade_buy_rate:number = 1.5;
  upgrade_rate:number = 1.2;
  
  toastr:ToastrService;
  service:MainService;

  _cached_cps:number = 0;

  constructor(service:MainService, toastr:ToastrService) {
    this.toastr = toastr;
    this.service=service;
  }
  
  ngOnInit() {
    this.price = this.configuration.price;
    this.ips = this.configuration.ips;
    this.upgrade_price = this.configuration.upgrade_price;
    this.description = this.configuration.description;
    this.image = this.configuration.image;
    this.service.registerFactory(this);
  }

  getCPS() : number {
    return this._cached_cps;
  }

  refreshCPS() : void {
    let upgrade_cps = this.ips * ( (this.upgrade_level-1) / 2 );

    this._cached_cps = Math.floor( (this.ips + upgrade_cps) * this.owned );
    this.service.refreshIPS();
  }

  buy() {
    if(this.service.currency < this.price) {
      this.toastr.error("You dont have enough currency to buy that!");
      return;
    }
    this.owned++;
    this.service.currency -= this.price;
    this.price = Math.floor( this.price * this.buy_rate );
    this.refreshCPS();
  }

  upgrade() {
    if(this.service.currency < this.upgrade_price) {
      this.toastr.error("You dont have enough currency to buy that!");
      return;
    }

    this.upgrade_level++;
    this.service.currency -=  this.upgrade_price;
    this.upgrade_price = Math.floor( this.upgrade_price * this.upgrade_buy_rate );
    this.refreshCPS();
  }

}
