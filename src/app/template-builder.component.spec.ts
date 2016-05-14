import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TemplateBuilderAppComponent } from '../app/template-builder.component';

beforeEachProviders(() => [TemplateBuilderAppComponent]);

describe('App: TemplateBuilder', () => {
  it('should create the app',
      inject([TemplateBuilderAppComponent], (app: TemplateBuilderAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'template-builder works!\'',
      inject([TemplateBuilderAppComponent], (app: TemplateBuilderAppComponent) => {
    expect(app.title).toEqual('template-builder works!');
  }));
});
