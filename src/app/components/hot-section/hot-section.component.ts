import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hot-section',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './hot-section.component.html',
  styleUrls: ['./hot-section.component.scss'],
})
export class HotSectionComponent {
  isRevealed = false;

  hotTopics = [
    {
      icon: '💕',
      title: 'Intimité physique',
      description: "J'aime l'intimité et la proximité physique. Les câlins, les bisous, et plus si affinités... 😏",
      category: 'Physique',
    },
    {
      icon: '💭',
      title: 'Fantaisies',
      description: "J'ai quelques fantasmes que je partagerai volontiers avec quelqu'un de confiance.",
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
      description: "J'aime la régularité dans l'intimité, mais je sais aussi être spontané.",
      category: 'Rythme',
    },
  ];

  boundaries = [
    'Le respect mutuel est non-négociable',
    'Pas de pression, tout doit être consenti',
    'La communication est la clé',
    'Chacun ses limites et ses envies',
  ];

  revealContent() {
    this.isRevealed = true;
  }

  hideContent() {
    this.isRevealed = false;
  }
}
