import { Component } from '@angular/core';

import { MainGalleryComponent } from '@src/pages/main/main-gallery/main-gallery.component';
import { MainHeaderComponent } from '@src/pages/main/main-header/main-header.component';
import { WelcomeNewsComponent } from '@src/pages/welcome/welcome-news/welcome-news.component';
import { SharedModule } from '@src/shared.module';

import { HotSectionComponent } from '../../components/hot-section/hot-section.component';
import { MusicGamesMoviesComponent } from '../../components/music-games-movies/music-games-movies.component';
import { QualitiesFlawsComponent } from '../../components/qualities-flaws/qualities-flaws.component';
import { RelationshipStyleComponent } from '../../components/relationship-style/relationship-style.component';
import { WhatILookForComponent } from '../../components/what-i-look-for/what-i-look-for.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SharedModule,
    MainHeaderComponent,
    MainGalleryComponent,
    MusicGamesMoviesComponent,
    RelationshipStyleComponent,
    QualitiesFlawsComponent,
    WhatILookForComponent,
    HotSectionComponent,
    WelcomeNewsComponent,
  ],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {}
