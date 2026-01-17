import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoxComponent } from '@lucca-front/ng/box';
import { ContainerComponent } from '@lucca-front/ng/container';
import { FilterBarComponent, FilterPillAddonBeforeDirective, FilterPillComponent } from '@lucca-front/ng/filter-pills';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { CheckboxInputComponent, TextInputComponent } from '@lucca-front/ng/forms';
import { GridColumnComponent, GridComponent } from '@lucca-front/ng/grid';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { LuMultiSelectInputComponent } from '@lucca-front/ng/multi-select';
import { NumericBadgeComponent } from '@lucca-front/ng/numeric-badge';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { SegmentedControlComponent, SegmentedControlFilterComponent } from '@lucca-front/ng/segmented-control';

import { iListCollections } from '@src/data/furniture.data';
import { Collection } from '@src/models/collection.model';
import { PageTitles } from '@src/models/pages.model';

@Component({
  selector: 'dashboard-page',
  imports: [
    FormsModule,
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    ContainerComponent,
    GridColumnComponent,
    GridComponent,
    FilterBarComponent,
    FilterPillAddonBeforeDirective,
    FilterPillComponent,
    FormFieldComponent,
    LuMultiSelectInputComponent,
    SegmentedControlComponent,
    SegmentedControlFilterComponent,
    CheckboxInputComponent,
    NumericBadgeComponent,
    TextInputComponent,
    BoxComponent,
  ],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {
  public pages = PageTitles;

  public listCollections: Collection[];

  public ngOnInit() {
    this.listCollections = [];
    iListCollections.forEach(iCollection => {
      this.listCollections.push(new Collection(iCollection));
    });
  }
}
