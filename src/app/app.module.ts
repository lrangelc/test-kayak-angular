import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { MaterialModule } from './material/material.module';

// Pipes
import { DomainPipe } from './shared/pipes/domain.pipe';
import { AirlineComponent } from './components/airline/airline.component';
import { AirlinesComponent } from './components/airlines/airlines.component';

@NgModule({
  declarations: [
    AppComponent,
    DomainPipe,
    AirlineComponent,
    AirlinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
