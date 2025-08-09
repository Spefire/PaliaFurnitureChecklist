import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'main-stats',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './main-stats.component.html',
  styleUrls: ['./main-stats.component.scss'],
})
export class MainStatsComponent {
  public qualities = [
    {
      icon: '🔍',
      title: 'Empathique',
      description: `Je ressens facilement les émotions des autres, une vraie éponge.`,
      color: '#4CAF50',
    },
    {
      icon: '💡',
      title: 'Créatif',
      description: `J'ai des idées plein la tête, des tas de projets à faire, que ce soit dans mon travail ou dans mes loisirs.`,
      color: '#FF9800',
    },
    {
      icon: '📅',
      title: 'Organisé',
      description: `J'aime quand les choses sont bien structurées et planifiées, sinon je stresse.`,
      color: '#2196F3',
    },
    {
      icon: '🌤️',
      title: 'Loyal',
      description: `Quand j’aime ou que j’apprécie quelqu’un, je suis profondément impliqué dans la relation, à chercher des solutions dans les coups durs.`,
      color: '#8BC34A',
    },
    {
      icon: '💭',
      title: 'Communicatif',
      description: `Si j'aime une personne, je communique beaucoup, à l'oral, à l'écrit, en envoyant des vidéos Tiktok ou Insta...`,
      color: '#9C27B0',
    },
    {
      icon: '💭',
      title: 'Transparence',
      description: `Je suis dit ce que je ressens, et j'ai globalement aucun sujet tabou.`,
      color: '#9C27B0',
    },
  ];

  public flaws = [
    {
      icon: '💔',
      title: 'Anxieux',
      description: `Je me stresse parfois pour un rien, j'ai pas souvent confiance en moi et plus rarement aux autres.`,
      color: '#795548',
    },
    {
      icon: '💔',
      title: 'Introversion',
      description: `Je suis sociable mais j'ai besoin de mon besoin de temps seul pour me ressourcer.`,
      color: '#795548',
    },
    {
      icon: '💔',
      title: 'Sensible',
      description: `Je peux vite prendre les choses personnellement et être affecté par les critiques.`,
      color: '#795548',
    },
    {
      icon: '🎯',
      title: 'Besoin fort d’attention',
      description: `J’ai tendance à vouloir être au centre de l’attention des gens que j’aime, à rayonner.`,
      color: '#607D8B',
    },
    {
      icon: '📋',
      title: 'Routine sécurisante',
      description: `J’ai du mal à me lancer dans des activités nouvelles ou hors de ma zone de confort.`,
      color: '#FF5722',
    },
    {
      icon: '📋',
      title: 'Mordu de travail',
      description: `J’adore travailler (très souvent sur mon PC...) et j'ai du mal à décrocher d'une activité : j'ai peur de l'ennui.`,
      color: '#FF5722',
    },
  ];
}
