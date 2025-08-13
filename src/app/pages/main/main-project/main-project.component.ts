import { Component } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-project',
  imports: [SharedModule, CardComponent, ObserveSectionDirective],
  templateUrl: './main-project.component.html',
  styleUrl: './main-project.component.scss',
})
export class MainProjectComponent {}
