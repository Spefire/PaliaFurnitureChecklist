import { AfterViewInit, Directive, ElementRef, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: 'section[appObserveSection]',
})
export class ObserveSectionDirective implements AfterViewInit, OnDestroy {
  private _el = inject(ElementRef<HTMLElement>).nativeElement;
  private _router = inject(Router);
  private _observer?: IntersectionObserver;

  public ngAfterViewInit() {
    this._observer = new IntersectionObserver(
      entries => {
        const e = entries[0];
        if (e.isIntersecting && this._el.id) {
          this._router.navigate([], {
            fragment: this._el.id,
            replaceUrl: true,
            queryParamsHandling: 'merge',
          });
        }
      },
      { threshold: 0.5 }
    );

    this._observer.observe(this._el);
  }

  public ngOnDestroy() {
    this._observer?.disconnect();
  }
}
