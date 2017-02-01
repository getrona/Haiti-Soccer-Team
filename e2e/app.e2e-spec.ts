import { HaitiSoccerPage } from './app.po';

describe('haiti-soccer App', function() {
  let page: HaitiSoccerPage;

  beforeEach(() => {
    page = new HaitiSoccerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
