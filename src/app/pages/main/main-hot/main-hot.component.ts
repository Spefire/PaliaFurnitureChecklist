import { Component } from '@angular/core';

import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-hot',
  standalone: true,
  imports: [SharedModule, NoteComponent, ObserveSectionDirective],
  templateUrl: './main-hot.component.html',
  styleUrls: ['./main-hot.component.scss'],
})
export class MainHotComponent {
  public isRevealed = false;

  public hotTopics = [
    {
      icon: '💕',
      title: 'Intimité physique',
      description: `J'aime l'intimité et la proximité physique. Les câlins, les bisous, et plus si affinités... 😏`,
      category: 'Physique',
    },
    {
      icon: '💭',
      title: 'Fantaisies',
      description: `J'ai quelques fantasmes que je partagerai volontiers avec quelqu'un de confiance.`,
      category: 'Mental',
    },
    {
      icon: '💬',
      title: 'Communication intime',
      description: 'Parler de nos désirs, nos limites et nos envies est essentiel pour moi.',
      category: 'Communication',
    },
    {
      icon: '⏰',
      title: 'Fréquence',
      description: `J'aime la régularité dans l'intimité, mais je sais aussi être spontané.`,
      category: 'Rythme',
    },
  ];

  public boundaries = [
    'Le respect mutuel est non-négociable',
    'Pas de pression, tout doit être consenti',
    'La communication est la clé',
    'Chacun ses limites et ses envies',
  ];

  public revealContent() {
    this.isRevealed = true;
  }

  public hideContent() {
    this.isRevealed = false;
  }
}
