import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { SeriesComponent } from './series/series.component';
import { ComicsComponent } from './comics/comics.component';
import { MaterialModule } from './material.module';
import { CharactersService } from './shared/services/characters.service';
import { GlobalConstants } from './shared/models/common/global-constants';

   

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    SeriesComponent,
    ComicsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
    
  ],
  providers: [
    CharactersService,
    GlobalConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
