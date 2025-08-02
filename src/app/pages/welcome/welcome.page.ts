import { Component } from '@angular/core';

import { PageTitles } from '@src/models/pages.model';
import { WelcomeContactComponent } from '@src/pages/welcome/welcome-contact/welcome-contact.component';
import { WelcomeGuestsComponent } from '@src/pages/welcome/welcome-guests/welcome-guests.component';
import { WelcomeNewsComponent } from '@src/pages/welcome/welcome-news/welcome-news.component';
import { WelcomePeopleComponent } from '@src/pages/welcome/welcome-people/welcome-people.component';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'welcome-page',
  imports: [SharedModule, WelcomeNewsComponent, WelcomeGuestsComponent, WelcomeContactComponent, WelcomePeopleComponent],
  templateUrl: './welcome.page.html',
  styleUrl: './welcome.page.scss',
})
export class WelcomePage {
  public pages = PageTitles;
}
