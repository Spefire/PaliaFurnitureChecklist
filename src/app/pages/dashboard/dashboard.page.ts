import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '@lucca-front/ng/button';
import { ContainerComponent } from '@lucca-front/ng/container';
import { LuOptionDirective } from '@lucca-front/ng/core-select';
import { DividerComponent } from '@lucca-front/ng/divider';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { FilterBarComponent, FilterPillAddonAfterDirective, FilterPillAddonBeforeDirective, FilterPillComponent } from '@lucca-front/ng/filter-pills';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { CheckboxInputComponent, TextInputComponent } from '@lucca-front/ng/forms';
import { GridColumnComponent, GridComponent } from '@lucca-front/ng/grid';
import { HighlightDataComponent } from '@lucca-front/ng/highlight-data';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { LuMultiDisplayerDirective, LuMultiSelectContentDisplayerComponent, LuMultiSelectInputComponent } from '@lucca-front/ng/multi-select';
import { NumericBadgeComponent } from '@lucca-front/ng/numeric-badge';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { SegmentedControlComponent, SegmentedControlFilterComponent } from '@lucca-front/ng/segmented-control';
import { TagComponent } from '@lucca-front/ng/tag';

import { collectionsVersion, iListCollections, Tag } from '@src/data/furniture.data';
import { Collection, TypeCollection } from '@src/models/collection.model';
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
    LuMultiDisplayerDirective,
    LuMultiSelectContentDisplayerComponent,
    LuOptionDirective,
    SegmentedControlComponent,
    SegmentedControlFilterComponent,
    HighlightDataComponent,
    CheckboxInputComponent,
    NumericBadgeComponent,
    TextInputComponent,
    DividerComponent,
    TagComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage implements OnInit {
  public pages = PageTitles;
  public typesCollection = TypeCollection;
  public collectionsVersion = collectionsVersion;

  public showTags = signal(false);

  // Lists
  public listOpennedCollections = signal<string[]>([]);
  public listSelectedItems = signal<string[]>([]);
  public listCollections = signal<Collection[]>([]);
  public listTags = signal<Tag[]>([]);

  // Filters
  public typeFilter = signal<TypeCollection | null>(null);
  public missingFilter = signal<boolean>(false);
  public collectionsFilter = signal<Collection[]>([]);
  public tagsFilter = signal<Tag[]>([]);
  public searchFilter = signal<string>('');

  public sortedCollections = computed<Collection[]>(() => {
    if (!this.listCollections()) return [];
    const result = this.listCollections().slice();
    result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  });

  public sortedTags = computed<Tag[]>(() => {
    if (!this.listTags()) return [];
    const result = this.listTags().slice();
    result.sort((a, b) => a.localeCompare(b));
    return result;
  });

  public filteredCollections = computed<Collection[]>(() => {
    if (!this.listCollections()) return [];

    const type = this.typeFilter();
    const missing = this.missingFilter();
    const codes = this.collectionsFilter().map(collection => collection.code);
    const tags = this.tagsFilter();
    const search = this.searchFilter()?.trim().toLowerCase();

    const collections: Collection[] = [];
    this.listCollections().forEach(collection => {
      const checkCode = !codes.length || (codes.length && codes.includes(collection.code));
      const checkType = type === null || (type !== null && type === collection.type);
      const needCheckFurniture = tags.length || missing || (search && !collection.name.toLowerCase().includes(search));
      if (!checkCode || !checkType) return;
      else if (!needCheckFurniture) collections.push(collection);
      else {
        const newCollection = new Collection({ name: collection.name, type: collection.type, palette: collection.palette, color: collection.color, items: [] });
        collection.items.forEach(furniture => {
          const checkMissing = !missing || (missing && !this.listSelectedItems().includes(furniture.code));
          const checkTags = !tags.length || (tags.length && furniture.tags && furniture.tags.some(tag => tags.includes(tag)));
          const checkSearch = !search || (search && furniture.name.toLowerCase().includes(search));
          if (checkMissing && checkTags && checkSearch) {
            newCollection.items.push(furniture);
          }
        });
        if (newCollection.items.length > 0) collections.push(newCollection);
      }
    });
    return collections;
  });

  public eventCount = computed<number>(() => {
    if (!this.listCollections()) return 0;
    let result = 0;
    this.listCollections().forEach(collection => {
      if (collection.type === TypeCollection.EVENT) result++;
    });
    return result;
  });

  public setCount = computed<number>(() => {
    if (!this.listCollections()) return 0;
    let result = 0;
    this.listCollections().forEach(collection => {
      if (collection.type === TypeCollection.SET) result++;
    });
    return result;
  });

  public miscCount = computed<number>(() => {
    if (!this.listCollections()) return 0;
    let result = 0;
    this.listCollections().forEach(collection => {
      if (collection.type === TypeCollection.MISC) result++;
    });
    return result;
  });

  public finishedCount = computed<number>(() => {
    if (!this.listCollections()) return 0;
    let result = 0;
    this.listCollections().forEach(collection => {
      let hasMissing = false;
      collection.items.forEach(furniture => {
        if (!this.listSelectedItems().includes(furniture.code)) {
          hasMissing = true;
        }
      });
      if (!hasMissing) result++;
    });
    return result;
  });

  public missedCount = computed<number>(() => {
    if (!this.listCollections()) return 0;
    let result = 0;
    this.listCollections().forEach(collection => {
      collection.items.forEach(furniture => {
        if (!this.listSelectedItems().includes(furniture.code)) {
          result++;
        }
      });
    });
    return result;
  });

  constructor(private _appService: AppService) {}

  public ngOnInit() {
    this.listCollections.set(iListCollections.map(i => new Collection(i)));
    this.listTags.set(Object.values(Tag));
    this.listSelectedItems.set(this._appService.loadSelectedItems());
    this.listOpennedCollections.set(this.listCollections().map(i => i.code));
  }

  public collapseAll() {
    this.listOpennedCollections.set([]);
  }

  public expandAll() {
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
