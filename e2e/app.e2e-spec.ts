import { DhanaiAppPage } from './app.po';

describe('dhanai-app App', () => {
  let page: DhanaiAppPage;

  beforeEach(() => {
    page = new DhanaiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('yo works!');
  });
});
