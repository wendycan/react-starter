casper.test.begin('Test interactivity page', 3, function suite(test) {
  casper.start("http://localhost:8000/multiple-components.html", function() {
    test.assertExists('#content img', "image is found");
    test.assertSelectorHasText('#content a', "24");
    this.click('#content a');
  });

  casper.then(function () {
    test.assertTitle("阅台", "yuetai title is the one expected");
  });

  casper.run(function() {
    test.done();
  });
});
