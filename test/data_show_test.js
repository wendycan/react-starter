casper.test.begin('Test data show page', 2, function suite(test) {
  casper.start("http://localhost:8000/data-show.html", function() {
    casper.page.injectJs('./../vendor/jquery.js');

    this.wait(1000, function () {
      this.capture('p.png');
      test.assertExists('p', "p is found");
      var date0 = this.evaluate(function () {
        var date0 = new Date($($('p span')[1]).text());
        return date0.valueOf();
      });

      this.wait(1000, function () {
        var date1 = this.evaluate(function () {
          var date1 = new Date($($('p span')[1]).text());
          return date1.valueOf();
        });
        console.log(typeof date0)
        console.log(date1 - date0)

        var interval = date1 - date0 - 1000;
        test.assertEquals(0, interval, 'datetime should change'); //need to be improved
      });
    });
  });
  casper.run(function() {
    test.done();
  });
});
