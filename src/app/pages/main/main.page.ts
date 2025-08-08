import { Component } from '@angular/core';

import { MainGalleryComponent } from '@src/pages/main/main-gallery/main-gallery.component';
import { MainHeaderComponent } from '@src/pages/main/main-header/main-header.component';
import { MainHobbiesComponent } from '@src/pages/main/main-hobbies/main-hobbies.component';
import { MainProjectComponent } from '@src/pages/main/main-project/main-project.component';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SharedModule, MainHeaderComponent, MainGalleryComponent, MainHobbiesComponent, MainProjectComponent],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {}
