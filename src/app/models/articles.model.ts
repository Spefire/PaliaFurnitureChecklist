export enum ArticleCategory {
  SPORT = 'Sport',
  HYGIENE = 'Hygiène',
  CUISINE = 'Cuisine',
  MEDITATION = 'Méditation',
  CREATIVITE = 'Créativité',
  SOCIAL = 'Social',
  AUTRE = 'Autre',
}

export interface Article {
  id: string;
  name: string;
  description: string;
  category: ArticleCategory;
  daysOfWeek: number[]; // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
  xpRewards: {
    force?: number;
    habilete?: number;
    tenacite?: number;
    charisme?: number;
    intelligence?: number;
  };
}

export interface ArticlesFilters {
  category: string;
  onlySelected: boolean;
  search: string;
}

export const listArticles: Article[] = [
  {
    id: 'quest-001',
    name: 'Musculation',
    description: 'Faire une séance de musculation',
    category: ArticleCategory.SPORT,
    daysOfWeek: [1, 3, 5], // Lundi, Mercredi, Vendredi
    xpRewards: {
      force: 10,
      tenacite: 5,
    },
  },
  {
    id: 'quest-002',
    name: 'Yoga',
    description: 'Pratiquer le yoga',
    category: ArticleCategory.SPORT,
    daysOfWeek: [2, 4, 6], // Mardi, Jeudi, Samedi
    xpRewards: {
      habilete: 10,
      intelligence: 5,
    },
  },
  {
    id: 'quest-003',
    name: 'Course à pied',
    description: 'Faire une course',
    category: ArticleCategory.SPORT,
    daysOfWeek: [1, 3, 5], // Lundi, Mercredi, Vendredi
    xpRewards: {
      tenacite: 10,
      force: 5,
    },
  },
  {
    id: 'quest-004',
    name: 'Hygiène personnelle',
    description: 'Prendre soin de son hygiène',
    category: ArticleCategory.HYGIENE,
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // Tous les jours
    xpRewards: {
      charisme: 10,
      tenacite: 5,
    },
  },
  {
    id: 'quest-005',
    name: 'Méditation',
    description: 'Pratiquer la méditation',
    category: ArticleCategory.MEDITATION,
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // Tous les jours
    xpRewards: {
      intelligence: 10,
      habilete: 5,
    },
  },
];
