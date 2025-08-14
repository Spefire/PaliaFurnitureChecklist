export interface AnswersGalerie {
  value: number;
}

export interface AnswersPassions {
  musics: number;
  music01: boolean | null;
  music02: boolean | null;
  music03: boolean | null;
  music04: boolean | null;
  music05: boolean | null;
  music06: boolean | null;
  games: number;
  game01: boolean | null;
  game02: boolean | null;
  game03: boolean | null;
  game04: boolean | null;
  game05: boolean | null;
  game06: boolean | null;
  movies: number;
  movie01: boolean | null;
  movie02: boolean | null;
  movie03: boolean | null;
  movie04: boolean | null;
  movie05: boolean | null;
  movie06: boolean | null;
  others: number;
}

export interface AnswersProjets {
  isDev: boolean;
  isRP: boolean;
  wantRP: boolean;
  isArt: boolean;
}

export interface AnswersPersonnalite {
  astro: boolean | null;
  quality01: boolean | null;
  quality02: boolean | null;
  quality03: boolean | null;
  quality04: boolean | null;
  quality05: boolean | null;
  quality06: boolean | null;
  flaw01: boolean | null;
  flaw02: boolean | null;
  flaw03: boolean | null;
  flaw04: boolean | null;
  flaw05: boolean | null;
  flaw06: boolean | null;
}

export interface TestAnswers {
  galerie?: AnswersGalerie;
  passions?: AnswersPassions;
  projets?: AnswersProjets;
  personnalite?: AnswersPersonnalite;
  couple?: unknown;
  recherche?: unknown;
  sexe?: unknown;
}

export interface TestState {
  isTest: boolean;
  currentStep: number;
  answers: TestAnswers;
}
