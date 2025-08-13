import { Location } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, OnDestroy } from '@angular/core';

@Directive({
  selector: 'section[appObserveSection]',
})
export class ObserveSectionDirective implements AfterViewInit, OnDestroy {
  private _el = inject(ElementRef<HTMLElement>).nativeElement;
  private _location = inject(Location);
  private _observer?: IntersectionObserver;

  public ngAfterViewInit() {
    this._observer = new IntersectionObserver(
      entries => {
        const e = entries[0];
        if (!e.isIntersecting || !this._el.id) return;
        const path = this._location.path().split('#')[0];
        this._location.replaceState(path + '#' + this._el.id);
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.01,
      }
    );

    this._observer.observe(this._el);
  }

  public ngOnDestroy() {
    this._observer?.disconnect();
  }
}
