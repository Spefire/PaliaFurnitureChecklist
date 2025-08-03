import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-qualities-flaws',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './qualities-flaws.component.html',
  styleUrls: ['./qualities-flaws.component.scss'],
})
export class QualitiesFlawsComponent {
  qualities = [
    {
      icon: '💭',
      title: 'Empathique',
      description: "Je ressens facilement les émotions des autres et j'essaie de les comprendre.",
      color: '#4CAF50',
    },
    {
      icon: '💡',
      title: 'Créatif',
      description: "J'aime penser différemment et trouver des solutions originales aux problèmes.",
      color: '#FF9800',
    },
    {
      icon: '📅',
      title: 'Organisé',
      description: "J'aime quand les choses sont bien structurées et planifiées.",
      color: '#2196F3',
    },
    {
      icon: '😊',
      title: 'Optimiste',
      description: 'Je vois généralement le bon côté des choses, même dans les moments difficiles.',
      color: '#E91E63',
    },
    {
      icon: '🔍',
      title: 'Curieux',
      description: "J'aime apprendre de nouvelles choses et découvrir le monde.",
      color: '#9C27B0',
    },
    {
      icon: '🤝',
      title: 'Loyal',
      description: "Une fois que je m'engage, je suis là pour de bon.",
      color: '#F44336',
    },
  ];

  flaws = [
    {
      icon: '📋',
      title: 'Parfois trop organisé',
      description: 'Je peux être un peu rigide sur mes habitudes et mes routines.',
      color: '#FF5722',
    },
    {
      icon: '💔',
      title: 'Sensible',
      description: 'Je peux prendre les choses trop à cœur et être affecté par les critiques.',
      color: '#795548',
    },
    {
      icon: '🎯',
      title: 'Perfectionniste',
      description: 'Je peux passer trop de temps à essayer de faire les choses parfaitement.',
      color: '#607D8B',
    },
    {
      icon: '⏰',
      title: 'Impatient',
      description: "J'ai du mal à attendre et je peux être frustré quand les choses prennent du temps.",
      color: '#FFC107',
    },
    {
      icon: '💬',
      title: 'Parfois trop direct',
      description: "Je peux être un peu brutal dans ma franchise, même si c'est bien intentionné.",
      color: '#00BCD4',
    },
    {
      icon: '🌤️',
      title: 'Humeur changeante',
      description: 'Mon humeur peut varier selon les jours, même si je fais des efforts pour rester positif.',
      color: '#8BC34A',
    },
  ];
}
