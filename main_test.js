Feature('main');

Scenario('test something', ({ I }) => {
I.amOnPage('http://www.google.com');
I.wait(2);
});
