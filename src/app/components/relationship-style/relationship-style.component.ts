import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-relationship-style',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './relationship-style.component.html',
  styleUrls: ['./relationship-style.component.scss'],
})
export class RelationshipStyleComponent {
  relationshipTraits = [
    {
      icon: '💕',
      title: 'Affectueux',
      description: "J'aime les câlins, les bisous et les moments de tendresse. La proximité physique est importante pour moi.",
      color: '#ff6b6b',
    },
    {
      icon: '💬',
      title: 'Communicatif',
      description: "Je crois en l'importance de parler de nos ressentis, nos besoins et nos attentes. Pas de place pour les non-dits.",
      color: '#4ecdc4',
    },
    {
      icon: '🗺️',
      title: 'Aventurier',
      description: "J'aime découvrir de nouveaux endroits, essayer de nouvelles activités ensemble. La routine me tue un peu.",
      color: '#45b7d1',
    },
    {
      icon: '🤝',
      title: 'Supportif',
      description: 'Je veux être là pour soutenir tes projets, tes rêves et tes difficultés. On grandit ensemble.',
      color: '#96ceb4',
    },
    {
      icon: '📅',
      title: 'Organisé',
      description: "J'aime planifier nos sorties, nos voyages. Mais je sais aussi être spontané quand l'occasion se présente.",
      color: '#feca57',
    },
    {
      icon: '😄',
      title: 'Humoristique',
      description: "La vie est trop courte pour se prendre au sérieux. J'aime rire et faire rire, même dans les moments difficiles.",
      color: '#ff9ff3',
    },
  ];

  dealBreakers = [
    'Le manque de communication',
    "L'infidélité",
    'Le manque de respect',
    "L'absence d'ambition personnelle",
    "L'incompatibilité sur les valeurs fondamentales",
  ];

  whatIBring = [
    'Une écoute attentive et empathique',
    'Un soutien inconditionnel dans tes projets',
    'Une curiosité pour découvrir tes passions',
    'Une volonté de grandir ensemble',
    "Beaucoup d'amour à donner",
  ];
}
