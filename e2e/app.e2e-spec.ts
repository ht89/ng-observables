import { NgObservablesPage } from './app.po';

describe('ng-observables App', () => {
  let page: NgObservablesPage;

  beforeEach(() => {
    page = new NgObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
