import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { configure } from '@testing-library/angular';
import { MaterialModule } from './src/app/material';

@NgModule({
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
  ],
})
export class TestingModule {}


configure({
  defaultImports: [
    TestingModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
});

