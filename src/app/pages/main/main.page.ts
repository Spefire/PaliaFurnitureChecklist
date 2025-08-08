import { Component } from '@angular/core';

import { MainGalleryComponent } from '@src/pages/main/main-gallery/main-gallery.component';
import { MainHeaderComponent } from '@src/pages/main/main-header/main-header.component';
import { MainHobbiesComponent } from '@src/pages/main/main-hobbies/main-hobbies.component';
import { MainProjectComponent } from '@src/pages/main/main-project/main-project.component';
import { SharedModule } from '@src/shared.module';

import { HotSectionComponent } from '../../components/hot-section/hot-section.component';
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
    MainHobbiesComponent,
    MainProjectComponent,
    RelationshipStyleComponent,
    QualitiesFlawsComponent,
    WhatILookForComponent,
    HotSectionComponent,
  ],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {}
