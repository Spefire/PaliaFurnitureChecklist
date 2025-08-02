import { Component } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { PageTitles } from '@src/models/pages.model';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'contact-page',
  imports: [SharedModule, CardComponent],
  templateUrl: './contact.page.html',
  styles: [':host { display: contents; }'],
})
export class ContactPage {
  public pages = PageTitles;
}
