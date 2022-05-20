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
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ComicListComponent } from './comic-list/comic-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { CardComicComponent } from './card-comic/card-comic.component';
import { CardSeriesComponent } from './card-series/card-series.component';



   

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    SeriesComponent,
    ComicsComponent,
    HeaderComponent,
    FooterComponent,
    CharacterListComponent,
    CardComponent,
    SearchComponent,
    ComicListComponent,
    SeriesListComponent,
    CardComicComponent,
    CardSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
   
    
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
