Feature('parallelMain');
Scenario('Case 1', ({ I}) => {
    I.amOnPage('http://www.google.com');
    I.wait(2);
});

