import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { WelcomeNewsComponent } from '@src/pages/welcome/welcome-news/welcome-news.component';

import { HotSectionComponent } from '../../components/hot-section/hot-section.component';
import { MusicGamesMoviesComponent } from '../../components/music-games-movies/music-games-movies.component';
import { PhotoGalleryComponent } from '../../components/photo-gallery/photo-gallery.component';
import { QualitiesFlawsComponent } from '../../components/qualities-flaws/qualities-flaws.component';
import { RelationshipStyleComponent } from '../../components/relationship-style/relationship-style.component';
import { WhatILookForComponent } from '../../components/what-i-look-for/what-i-look-for.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MusicGamesMoviesComponent,
    PhotoGalleryComponent,
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
