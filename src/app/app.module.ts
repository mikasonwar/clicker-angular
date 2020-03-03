import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickerComponent } from './clicker/clicker.component';
import { FactoryComponent } from './factory/factory.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { ClickupgradeComponent } from './clickupgrade/clickupgrade.component';


@NgModule({
   declarations: [
      AppComponent,
      ClickerComponent,
      FactoryComponent,
      ClickupgradeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         positionClass: 'toast-bottom-left',
         preventDuplicates: true
      })
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
