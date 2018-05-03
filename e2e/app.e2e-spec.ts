import { SMARTWebArduinoPage } from './app.po';

describe('smart-web-arduino App', () => {
  let page: SMARTWebArduinoPage;

  beforeEach(() => {
    page = new SMARTWebArduinoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
