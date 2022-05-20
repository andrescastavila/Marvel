import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SeriesComponent } from './components/series/series.component';
import { ComicsComponent } from './components/comics/comics.component';
import { MaterialModule } from './material.module';
import { CharactersService } from './shared/services/characters.service';
import { GlobalConstants } from './shared/models/common/global-constants';
import { SeriesService } from './shared/services/series.service';
import { ComicsService } from './shared/services/comics.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { CardComicComponent } from './components/card-comic/card-comic.component';
import { CardSeriesComponent } from './components/card-series/card-series.component';





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
