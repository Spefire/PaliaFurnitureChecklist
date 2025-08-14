import { Component } from '@angular/core';

import { NavigationComponent } from '@src/components/navigation/navigation.component';
import { MainContactComponent } from '@src/pages/main/main-contact/main-contact.component';
import { MainGalleryComponent } from '@src/pages/main/main-gallery/main-gallery.component';
import { MainHeaderComponent } from '@src/pages/main/main-header/main-header.component';
import { MainHobbiesComponent } from '@src/pages/main/main-hobbies/main-hobbies.component';
import { MainHotComponent } from '@src/pages/main/main-hot/main-hot.component';
import { MainProjectComponent } from '@src/pages/main/main-project/main-project.component';
import { MainRelationshipComponent } from '@src/pages/main/main-relationship/main-relationship.component';
import { MainSearchComponent } from '@src/pages/main/main-search/main-search.component';
import { MainStatsComponent } from '@src/pages/main/main-stats/main-stats.component';
import { TestService } from '@src/services/test.service';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-page',
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
    MainHotComponent,
    NavigationComponent,
  ],
  templateUrl: './main.page.html',
})
export class MainPage {
  public get currentStep() {
    return this._testService.state.currentStep;
  }
  public get isTest() {
    return this._testService.state.isTest;
  }

  constructor(private _testService: TestService) {}

  public choice(isTest: boolean) {
    if (isTest) {
      this._testService.hardReset();
      this._testService.setIsTest(true);
      this._testService.goToStep(1);
    } else {
      this._testService.hardReset();
    }
  }

  public previous() {
    this._testService.prevStep();
  }

  public next() {
    this._testService.nextStep();
  }
}
