import { TemplateBuilderPage } from './app.po';

describe('template-builder App', function() {
  let page: TemplateBuilderPage;

  beforeEach(() => {
    page = new TemplateBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('template-builder works!');
  });
});
