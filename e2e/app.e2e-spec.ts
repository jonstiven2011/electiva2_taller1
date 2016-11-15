import { Electiva2Taller1Page } from './app.po';

describe('electiva2-taller1 App', function() {
  let page: Electiva2Taller1Page;

  beforeEach(() => {
    page = new Electiva2Taller1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
