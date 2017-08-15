import { ViacomPage } from './app.po';

describe('viacom App', () => {
  let page: ViacomPage;

  beforeEach(() => {
    page = new ViacomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
