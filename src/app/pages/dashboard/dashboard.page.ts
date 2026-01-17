import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PageTitles } from '@src/models/pages.model';

@Component({
  selector: 'dashboard-page',
  imports: [CommonModule],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  public pages = PageTitles;
}
