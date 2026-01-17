import { Component } from '@angular/core';

import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';

import { PageTitles } from '@src/models/pages.model';

@Component({
  selector: 'legacy-page',
  imports: [MainLayoutBlockComponent, MainLayoutComponent],
  templateUrl: './legacy.page.html',
})
export class LegacyPage {
  public pages = PageTitles;
}
