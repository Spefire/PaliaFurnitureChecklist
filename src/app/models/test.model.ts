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

export interface TestAnswers {
  galerie?: AnswersGalerie;
  passions?: AnswersPassions;
  projets?: AnswersProjets;
  personnalite?: unknown;
  couple?: unknown;
  recherche?: unknown;
  sexe?: unknown;
}

export interface TestState {
  isTest: boolean;
  currentStep: number;
  answers: TestAnswers;
}
