require('../spec.helper');

  describe('User can input a value and get FizzBuzz results', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });


  beforeEach(async () => {
    await browser.page.reload();
  });

  // Make sure the browser closes after the test is finished
  after(async () => {
    await browser.close();
  });

  // Example test
  //it('renders the correct page title', async () => {
    //expect(await browser.page.title()).to.eql('Puppeteer Mocha Scaffold');
  //});

  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with:  "3" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Fizz');
})
});