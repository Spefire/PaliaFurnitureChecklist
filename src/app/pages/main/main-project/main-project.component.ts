import { Component, input, OnInit, output } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { AnswersProjets } from '@src/models/test.model';
import { TestService } from '@src/services/test.service';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-project',
  imports: [SharedModule, CardComponent, ObserveSectionDirective],
  templateUrl: './main-project.component.html',
  styleUrl: './main-project.component.scss',
})
export class MainProjectComponent implements OnInit {
  public readonly isTest = input.required<boolean>();
  public readonly outPrevious = output();
  public readonly outNext = output();

  public item: AnswersProjets;

  constructor(private _testService: TestService) {}

  public ngOnInit() {
    this.item = this._testService.getAnswer('projets');
  }

  public previous() {
    this.outPrevious.emit();
  }

  public next() {
    this._testService.setAnswer('projets', this.item);
    this.outNext.emit();
  }
}
