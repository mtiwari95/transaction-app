import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTxnComponent } from './create-txn/create-txn.component';
import { MatTableModule } from '@angular/material/table';
import { TxnComponent } from './txn/txn.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CreateTxnComponent,
    TxnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
