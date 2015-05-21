casper.test.begin('Test index page', 4, function suite(test) {
    casper.start("http://localhost:8000/", function() {
        test.assertTitle("React 入门", "homepage title is the one expected");
        test.assertExists('nav', "nav is found");
        test.assertExists('h4 ', "h4 is found");
        test.assertSelectorHasText('#content', "React features!");
    });
    casper.run(function() {
        test.done();
    });
});
