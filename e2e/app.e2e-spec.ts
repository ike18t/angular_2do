import { BahPage } from './app.po';

describe('bah App', () => {
  let page: BahPage;

  beforeEach(() => {
    page = new BahPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
