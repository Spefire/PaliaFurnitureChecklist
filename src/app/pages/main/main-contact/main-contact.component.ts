import { Component } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-contact',
  imports: [SharedModule, CardComponent, ObserveSectionDirective],
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.scss',
})
export class MainContactComponent {}
