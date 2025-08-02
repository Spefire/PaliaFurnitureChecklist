import { Component } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'welcome-contact',
  imports: [SharedModule, CardComponent],
  templateUrl: './welcome-contact.component.html',
  styleUrl: '../welcome.page.scss',
})
export class WelcomeContactComponent {}
