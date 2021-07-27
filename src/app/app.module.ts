import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import reducers from './state/reducers'

import { AppComponent } from './app.component';
import components from './components';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const storeDevtoolsOptions = {
  maxAge: 25, 
  logOnly: environment.production, 
  autoPause: true,
}

const declarations = [AppComponent, ...components]

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(storeDevtoolsOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
