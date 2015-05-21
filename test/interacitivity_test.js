casper.test.begin('Test interactivity page', 3, function suite(test) {
  casper.start("http://localhost:8000/interactivity-and-dynamic-uis.html", function() {
    test.assertExists('p', "p is found");
    test.assertSelectorHasText('p', "You haven't liked this. Click to toggle.");
    this.click('p');
    test.assertSelectorHasText('p', "You like this. Click to toggle.");
  });
  casper.run(function() {
    test.done();
  });
});
