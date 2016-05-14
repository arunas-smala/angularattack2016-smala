export class TemplateBuilderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('template-builder-app h1')).getText();
  }
}
