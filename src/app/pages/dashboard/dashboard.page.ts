import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '@lucca-front/ng/button';
import { ContainerComponent } from '@lucca-front/ng/container';
import { DividerComponent } from '@lucca-front/ng/divider';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { FilterBarComponent, FilterPillAddonAfterDirective, FilterPillAddonBeforeDirective, FilterPillComponent } from '@lucca-front/ng/filter-pills';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { CheckboxInputComponent, TextInputComponent } from '@lucca-front/ng/forms';
import { GridColumnComponent, GridComponent } from '@lucca-front/ng/grid';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { LuMultiSelectInputComponent } from '@lucca-front/ng/multi-select';
import { NumericBadgeComponent } from '@lucca-front/ng/numeric-badge';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { SegmentedControlComponent, SegmentedControlFilterComponent } from '@lucca-front/ng/segmented-control';

import { iListCollections } from '@src/data/furniture.data';
import { Collection } from '@src/models/collection.model';
import { Furniture } from '@src/models/furniture.model';
import { PageTitles } from '@src/models/pages.model';
import { AppService } from '@src/services/app.service';

@Component({
  selector: 'dashboard-page',
  imports: [
    FormsModule,
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    EmptyStateSectionComponent,
    ContainerComponent,
    GridColumnComponent,
    GridComponent,
    FilterBarComponent,
    FilterPillAddonAfterDirective,
    FilterPillAddonBeforeDirective,
    FilterPillComponent,
    FormFieldComponent,
    LuMultiSelectInputComponent,
    SegmentedControlComponent,
    SegmentedControlFilterComponent,
    CheckboxInputComponent,
    NumericBadgeComponent,
    TextInputComponent,
    DividerComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage implements OnInit {
  public pages = PageTitles;

  public listOpennedCollections = signal<string[]>([]);
  public listSelectedItems = signal<string[]>([]);
  public listCollections = signal<Collection[]>([]);
  public missingFilter = signal<boolean>(false);
  public collectionsFilter = signal<string[]>([]);
  public searchFilter = signal<string>('');

  public filteredCollections = computed<Collection[]>(() => {
    if (!this.listCollections()) return [];
    const search = this.searchFilter().trim().toLowerCase();
    const collections: Collection[] = [];
    this.listCollections().forEach(collection => {
      if (collection.name.toLowerCase().includes(search)) collections.push(collection);
      else {
        const newCollection = new Collection({ name: collection.name, palette: collection.palette, color: collection.color, items: [] });
        collection.items.forEach(furniture => {
          if (furniture.name.toLowerCase().includes(search)) newCollection.items.push(furniture);
        });
        if (newCollection.items.length > 0) collections.push(newCollection);
      }
    });
    return collections;
  });

  constructor(private _appService: AppService) {}

  public ngOnInit() {
    this.listCollections.set(iListCollections.map(i => new Collection(i)));
    this.listSelectedItems.set(this._appService.loadSelectedItems());
    this.listOpennedCollections.set(this.listCollections().map(i => i.code));
  }

  public toggleCollection(collection: Collection) {
    if (this.listOpennedCollections().includes(collection.code)) {
      this.listOpennedCollections.update(collections => collections.filter(code => code !== collection.code));
    } else {
      this.listOpennedCollections.update(collections => [...collections, collection.code]);
    }
  }

  public toggleSelection(furniture: Furniture) {
    if (this.listSelectedItems().includes(furniture.code)) {
      this.listSelectedItems.update(items => items.filter(code => code !== furniture.code));
    } else {
      this.listSelectedItems.update(items => [...items, furniture.code]);
    }
    this._appService.saveSelectedItems(this.listSelectedItems());
  }
}
