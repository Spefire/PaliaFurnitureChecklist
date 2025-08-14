export interface TestAnswers {
  gallery?: unknown;
  hobbies?: unknown;
  project?: unknown;
  stats?: unknown;
  relationship?: unknown;
  search?: unknown;
  hot?: unknown;
  contact?: unknown;
}

export interface TestState {
  isTest: boolean;
  currentStep: number;
  answers: TestAnswers;
}
