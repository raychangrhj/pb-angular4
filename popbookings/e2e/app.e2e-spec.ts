import { PopbookingsPage } from './app.po';

describe('popbookings App', () => {
  let page: PopbookingsPage;

  beforeEach(() => {
    page = new PopbookingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
