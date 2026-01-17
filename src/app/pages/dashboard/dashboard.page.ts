
import { Component } from '@angular/core';

import { PageTitles } from '@src/models/pages.model';

@Component({
  selector: 'dashboard-page',
  imports: [],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  public pages = PageTitles;
}
