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
import { HeaderComponent } from './header/header.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersCardComponent } from './characters-card/characters-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

   

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    SeriesComponent,
    ComicsComponent,
    HeaderComponent,
    CharactersListComponent,
    CharactersCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatGridListModule,
    FlexLayoutModule
    
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
