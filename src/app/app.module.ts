import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {CroatiaData} from './croatia-data';
import {CommonModule} from '@angular/common';
import { FilterPipeCounty } from './FilterPipeCounty';
import {FilterPipeTown} from './FilterPipeTown';
import {FilterPipeCommunity} from './FilterPipeCommunity';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterPipeCounty,
    FilterPipeTown,
    FilterPipeCommunity
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(CroatiaData),
    HttpClientModule
  ],
  exports: [
    FilterPipeCounty,
    FilterPipeTown,
    FilterPipeCommunity
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
