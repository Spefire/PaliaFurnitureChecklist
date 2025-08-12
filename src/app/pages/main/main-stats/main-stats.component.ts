import { Component } from '@angular/core';

import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-stats',
  standalone: true,
  imports: [SharedModule, NoteComponent, ObserveSectionDirective],
  templateUrl: './main-stats.component.html',
  styleUrls: ['./main-stats.component.scss'],
})
export class MainStatsComponent {
  public qualities = [
    {
      icon: '😶',
      title: 'Empathique',
      description: `Je ressens facilement les émotions des autres, et j'ai une très bonne intuition quand quelque chose cloche. Mais je peux aussi être une vraie éponge.`,
      color: '#fded00',
    },
    {
      icon: '💡',
      title: 'Créatif',
      description: `J'ai des idées plein la tête, des tas de projets à faire, que ce soit dans mon travail ou dans mes loisirs.`,
      color: '#fded00',
    },
    {
      icon: '📅',
      title: 'Organisé',
      description: `J'aime quand les choses sont bien structurées, planifiées (et t'as vu toutes ses listes ?)... sinon je stresse.`,
      color: '#fded00',
    },
    {
      icon: '🤏',
      title: 'Minimaliste',
      description: `J'achète peu, et si j'achète quelque chose, ça doit me servir. Ça peut se retranscrire sur mes vêtements...`,
      color: '#fded00',
    },
    {
      icon: '👄',
      title: 'Communicatif',
      description: `Si j'aime une personne, je communique beaucoup, à l'oral, à l'écrit, en envoyant des vidéos Tiktok ou Insta...`,
      color: '#fded00',
    },
    {
      icon: '💭',
      title: 'Transparence',
      description: `Je dis généralement ce que je ressens, je suis très expressif et je n'ai globalement aucun sujet tabou.`,
      color: '#fded00',
    },
  ];

  public flaws = [
    {
      icon: '😖',
      title: 'Anxieux',
      description: `Je me stresse parfois pour un rien, j'ai pas souvent confiance en moi et plus rarement aux autres.`,
      color: '#cf4e3f',
    },
    {
      icon: '🔋',
      title: 'Introversion',
      description: `Je suis sociable mais j'ai besoin de mon besoin de temps seul pour me ressourcer.`,
      color: '#cf4e3f',
    },
    {
      icon: '💔',
      title: 'Sensible',
      description: `Je peux vite prendre les choses personnellement et être affecté par les critiques.`,
      color: '#cf4e3f',
    },
    {
      icon: '🎯',
      title: 'Besoin fort d’attention',
      description: `J’ai tendance à vouloir être au centre de l’attention des gens que j’aime (seulement) : j'adore rayonner.`,
      color: '#cf4e3f',
    },
    {
      icon: '🔒',
      title: 'Routine sécurisante',
      description: `J’ai du mal à me lancer dans des activités nouvelles ou hors de ma zone de confort. Je voyage peu du coup.`,
      color: '#cf4e3f',
    },
    {
      icon: '📋',
      title: 'Mordu de travail',
      description: `J’adore travailler (très souvent sur mon PC...) et j'ai du mal à décrocher d'une activité : j'ai peur de l'ennui.`,
      color: '#cf4e3f',
    },
  ];
}
