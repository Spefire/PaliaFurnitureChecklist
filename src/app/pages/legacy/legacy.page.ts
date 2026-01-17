
import { Component } from '@angular/core';

import { PageTitles } from '@src/models/pages.model';

@Component({
  selector: 'legacy-page',
  imports: [],
  templateUrl: './legacy.page.html',
})
export class LegacyPage {
  public pages = PageTitles;
}
