import { Component, input, output } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-project',
  imports: [SharedModule, CardComponent, ObserveSectionDirective],
  templateUrl: './main-project.component.html',
  styleUrl: './main-project.component.scss',
})
export class MainProjectComponent {
  public readonly isTest = input.required<boolean>();
  public readonly outPrevious = output();
  public readonly outNext = output();

  public previous() {
    this.outPrevious.emit();
  }

  public next() {
    this.outNext.emit();
  }
}
