import { Component, input, OnInit, output } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { AnswersCouple } from '@src/models/test.model';
import { TestService } from '@src/services/test.service';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-relationship',
  imports: [SharedModule, CardComponent, NoteComponent, ObserveSectionDirective],
  templateUrl: './main-relationship.component.html',
  styleUrl: './main-relationship.component.scss',
})
export class MainRelationshipComponent implements OnInit {
  public readonly isTest = input.required<boolean>();
  public readonly outPrevious = output();
  public readonly outNext = output();

  public item: AnswersCouple;

  public relationshipLanguages = [
    {
      icon: '❤️​❤️​❤️​❤️​❤️​',
      title: 'Le toucher physique',
      description: `Je suis peu tactile en dehors du couple (horreur qu'on me touche sans ma permission) et je reste pudique à l'extérieur... MAIS j'adore les câlins, les bisous : la proximité physique est importante pour moi.`,
      value: 5,
    },
    {
      icon: '⭐​⭐​⭐​',
      title: 'Les services rendus',
      description: `Quand j'aime, je veux aider le plus possible avec mes compétences. Faire ton site web, te dessiner, cuisiner un bon repas (à tes risques et périls), masser...`,
      value: 3,
    },
    {
      icon: '⭐⭐​​',
      title: 'Les paroles valorisantes',
      description: `J'ai du mal à complimenter les gens mais si je le fais c'est que je le pense vraiment ! Par contre, la flatterie ne marche pas du tout sur moi.`,
      value: 2,
    },
    {
      icon: '⭐​',
      title: 'Les moments de qualité',
      description: `J'avoue que j'ai un peu de mal à accorder des moments de qualité si on n'a pas les mêmes activités / centres d'intérêt. J'ai besoin de temps pour moi, mais je peux trouver du temps pour nous.`,
      value: 1,
    },
    {
      icon: '✖️​',
      title: 'Les cadeaux',
      description: `Pas mon point fort... je n'aime pas qu'on m'en fasse (je me sens redevable) et je ne sais pas souvent pas quoi offrir quand c'est matériel. Mais si tu aimes des univers et les goodies, je peux avoir quelques d'idées !`,
      value: -1,
    },
  ];

  public relationshipNumber = [
    {
      label: 'Plusieurs relations longues (> 1 an)',
      value: 5,
    },
    {
      label: 'Au moins 1 relation longue (> 1 an)',
      value: 3,
    },
    {
      label: 'Au moins 1 relation courte (< 1 an)',
      value: 1,
    },
    {
      label: 'Aucune relation sérieuse',
      value: -1,
    },
  ];

  constructor(private _testService: TestService) {}

  public ngOnInit() {
    this.item = this._testService.getAnswer('couple');
  }

  public previous() {
    this.outPrevious.emit();
  }

  public next() {
    this._testService.setAnswer('couple', this.item);
    this.outNext.emit();
  }
}
