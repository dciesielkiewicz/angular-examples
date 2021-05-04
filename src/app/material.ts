import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
