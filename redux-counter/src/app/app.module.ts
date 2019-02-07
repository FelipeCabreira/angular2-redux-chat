import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appStoreProviders } from './app.store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ appStoreProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
