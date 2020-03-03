import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clickupgrade',
  templateUrl: './clickupgrade.component.html',
  styleUrls: ['./clickupgrade.component.css']
})
export class ClickupgradeComponent implements OnInit {

  upgrade_level:number = 1;
  upgrade_price:number = 50;
  upgrade_buy_rate:number = 1.2;
  addOnClick:number=1;

  service:MainService;
  toastr:ToastrService;

  constructor(service:MainService, toastr:ToastrService) {
    this.service = service;
    this.toastr = toastr;
   }

  ngOnInit() {
    this.service.registerClickUpgrade(this);
  }

  upgrade() {
    if(this.service.currency < this.upgrade_price) {
      this.toastr.error("You dont have enough currency to buy that!");
      return;
    }
    this.addOnClick++;
    this.upgrade_level++;
    this.service.currency -=  this.upgrade_price;
    this.upgrade_price = Math.floor( this.upgrade_price * this.upgrade_buy_rate );
  }

}
