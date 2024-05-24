import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-modules';
import { HeaderComponent } from './shared/components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot( {} ),
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(), // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
