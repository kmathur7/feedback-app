import { FeedbackNg2Page } from './app.po';

describe('feedback-ng2 App', function() {
  let page: FeedbackNg2Page;

  beforeEach(() => {
    page = new FeedbackNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
