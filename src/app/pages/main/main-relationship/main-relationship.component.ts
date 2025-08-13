import { Component } from '@angular/core';

import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-relationship',
  imports: [SharedModule, NoteComponent, ObserveSectionDirective],
  templateUrl: './main-relationship.component.html',
  styleUrl: './main-relationship.component.scss',
})
export class MainRelationshipComponent {
  public relationshipLanguages = [
    {
      icon: '❤️​❤️​❤️​❤️​❤️​',
      title: 'Le toucher physique',
      description: `Je suis peu tactile en dehors du couple (horreur qu'on me touche sans ma permission) et je reste pudique à l'extérieur... MAIS j'adore les câlins, les bisous : la proximité physique est importante pour moi.`,
    },
    {
      icon: '⭐​⭐​⭐​',
      title: 'Les services rendus',
      description: `Quand j'aime, je veux aider le plus possible avec mes compétences. Faire ton site web, te dessiner, cuisiner un bon repas (à tes risques et périls), masser...`,
    },
    {
      icon: '⭐⭐​​',
      title: 'Les paroles valorisantes',
      description: `J'ai du mal à complimenter les gens mais si je le fais c'est que je le pense vraiment ! Par contre, la flatterie ne marche pas du tout sur moi.`,
    },
    {
      icon: '⭐​',
      title: 'Les moments de qualité',
      description: `J'avoue que j'ai un peu de mal à accorder des moments de qualité si on n'a pas les mêmes activités / centres d'intérêt. J'ai besoin de temps pour moi, mais je peux trouver du temps pour nous.`,
    },
    {
      icon: '✖️​',
      title: 'Les cadeaux',
      description: `Pas mon point fort... je n'aime pas qu'on m'en fasse (je me sens redevable) et je ne sais pas souvent pas quoi offrir quand c'est matériel. Mais si tu aimes des univers et les goodies, je peux avoir quelques d'idées !`,
    },
  ];
}
