import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { VarDirective } from './var.directive';

@Component({
  selector: 'test-component',
  template: `<div var></div>`
})
class TestComponent {}

describe('Var Directive', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  })));
});
