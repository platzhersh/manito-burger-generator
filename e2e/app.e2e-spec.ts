import { ManitoBurgerGeneratorPage } from './app.po';

describe('manito-burger-generator App', () => {
  let page: ManitoBurgerGeneratorPage;

  beforeEach(() => {
    page = new ManitoBurgerGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
