import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {
  service: MainService;

  constructor(private mainService: MainService) {
    this.service = mainService; 
  }

  ngOnInit() {
    
  }

  click() {
    this.service.click();
  }



}
