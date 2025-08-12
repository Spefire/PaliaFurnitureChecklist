import { Component } from '@angular/core';

import { MainContactComponent } from '@src/pages/main/main-contact/main-contact.component';
import { MainGalleryComponent } from '@src/pages/main/main-gallery/main-gallery.component';
import { MainHeaderComponent } from '@src/pages/main/main-header/main-header.component';
import { MainHobbiesComponent } from '@src/pages/main/main-hobbies/main-hobbies.component';
import { MainProjectComponent } from '@src/pages/main/main-project/main-project.component';
import { MainRelationshipComponent } from '@src/pages/main/main-relationship/main-relationship.component';
import { MainSearchComponent } from '@src/pages/main/main-search/main-search.component';
import { MainStatsComponent } from '@src/pages/main/main-stats/main-stats.component';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    SharedModule,
    MainHeaderComponent,
    MainGalleryComponent,
    MainHobbiesComponent,
    MainProjectComponent,
    MainStatsComponent,
    MainRelationshipComponent,
    MainSearchComponent,
    MainContactComponent,
  ],
  templateUrl: './main.page.html',
})
export class MainPage {}
