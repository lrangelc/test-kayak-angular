import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { AirlineGridTileComponent } from './shared/components/airline-grid-tile/airline-grid-tile.component';
import { DomainPipe } from './shared/pipes/domain.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AirlineGridTileComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MaterialModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
