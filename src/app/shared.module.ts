import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialsModule } from '@src/materials.modules';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialsModule, RouterModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialsModule, RouterModule],
})
export class SharedModule {}
