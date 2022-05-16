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
import { SeriesService } from './shared/services/series.service';
import { ComicsService } from './shared/services/comics.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { SearchComponent } from './search/search.component';


   

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    SeriesComponent,
    ComicsComponent,
    HeaderComponent,
    FooterComponent,
    CharacterListComponent,
    CharacterCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
    
  ],
  providers: [
    CharactersService,
    SeriesService,
    GlobalConstants,
    ComicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
