import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-what-i-look-for',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './what-i-look-for.component.html',
  styleUrls: ['./what-i-look-for.component.scss'],
})
export class WhatILookForComponent {
  importantTraits = [
    {
      icon: '💬',
      title: 'Communication ouverte',
      description: "Quelqu'un qui sait exprimer ses sentiments et écouter les miens.",
      priority: 'Essentiel',
    },
    {
      icon: '😊',
      title: 'Humeur positive',
      description: 'Une personne qui voit le bon côté des choses et qui me fait rire.',
      priority: 'Très important',
    },
    {
      icon: '🎯',
      title: 'Ambition personnelle',
      description: "Quelqu'un qui a des projets, des rêves et qui travaille pour les réaliser.",
      priority: 'Important',
    },
    {
      icon: '💕',
      title: 'Affection naturelle',
      description: 'Une personne qui aime les câlins, les bisous et les moments de tendresse.',
      priority: 'Essentiel',
    },
    {
      icon: '🗺️',
      title: "Goût pour l'aventure",
      description: "Quelqu'un qui aime découvrir de nouvelles choses et sortir de sa zone de confort.",
      priority: 'Important',
    },
    {
      icon: '📚',
      title: 'Curiosité intellectuelle',
      description: 'Une personne qui aime apprendre, discuter et partager ses découvertes.',
      priority: 'Très important',
    },
  ];

  dealBreakers = [
    'Le manque de respect envers les autres',
    "L'infidélité ou le flirt avec d'autres",
    'Le refus de communiquer sur les problèmes',
    "L'absence totale d'ambition ou de projets",
    "L'incompatibilité sur les valeurs fondamentales (famille, travail, etc.)",
    "Le manque d'hygiène personnelle",
    "L'addiction à des substances (drogues, alcool excessif)",
    'Le refus de faire des compromis',
  ];

  niceToHave = [
    'Une passion commune (musique, cinéma, sport, etc.)',
    "Un bon sens de l'humour",
    "L'amour des animaux",
    'Un goût pour la cuisine',
    "L'envie de voyager",
    'Une certaine indépendance financière',
    'De bonnes relations avec sa famille',
    'Un style vestimentaire qui me plaît',
  ];

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'Essentiel':
        return 'priority-essential';
      case 'Très important':
        return 'priority-very-important';
      case 'Important':
        return 'priority-important';
      default:
        return 'priority-important';
    }
  }
}
