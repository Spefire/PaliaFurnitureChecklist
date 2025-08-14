import { Injectable } from '@angular/core';

import { TestAnswers, TestState } from '@src/models/test.model';

import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'currentTest';

@Injectable({ providedIn: 'root' })
export class TestService {
  private _totalSteps = 8;
  private _state$ = new BehaviorSubject<TestState>(this._load());

  public get state(): TestState {
    return this._state$.getValue();
  }

  public setIsTest(isTest: boolean) {
    const next: TestState = {
      ...this.state,
      isTest,
    };
    this._commit(next);
  }

  /** Navigation */
  public nextStep() {
    const { currentStep } = this.state;
    const nextStep = Math.min(currentStep + 1, this._totalSteps);
    this._commit({ ...this.state, currentStep: nextStep });
    window.scrollTo(0, 0);
  }

  public prevStep() {
    const { currentStep } = this.state;
    const prevStep = Math.max(currentStep - 1, 1);
    this._commit({ ...this.state, currentStep: prevStep });
    window.scrollTo(0, 0);
  }

  public goToStep(step: number) {
    const s = Math.min(Math.max(step, 1), this._totalSteps);
    this._commit({ ...this.state, currentStep: s });
    window.scrollTo(0, 0);
  }

  /** Réponses */
  public setAnswer<K extends keyof TestAnswers>(section: K, value: NonNullable<TestAnswers[K]>) {
    const answers: TestAnswers = { ...this.state.answers, [section]: value };
    this._commit({ ...this.state, answers });
  }

  public getAnswer<K extends keyof TestAnswers>(section: K): TestAnswers[K] {
    return this.state.answers[section];
  }

  public resetAnswers() {
    this._commit({ ...this.state, answers: {} });
    window.scrollTo(0, 0);
  }

  public hardReset() {
    const fresh = this._freshState();
    this._commit(fresh);
    window.scrollTo(0, 0);
  }

  // ----------------- internes -----------------
  private _commit(next: TestState) {
    this._state$.next(next);
    this._save(next);
  }

  private _freshState(): TestState {
    return {
      isTest: false,
      currentStep: 0,
      answers: {},
    };
  }

  private _load(): TestState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this._freshState();
      const parsed = JSON.parse(raw) as TestState;
      return parsed;
    } catch {
      return this._freshState();
    }
  }

  private _save(state: TestState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}
