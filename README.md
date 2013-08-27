# Standalone JavaScript Unit Testing Framework Evaluation

This project contains the notes and source code created/captured while evaluating Jasmine and QUnit.

## Jasmine Evaluation Notes

I downloaded [jasmine-standalone-1.3.1.zip ] (https://github.com/pivotal/jasmine/downloads) and unzipped it. The lib folder contains
the actual Jasmine framework standalone files.

The tests go in the spec folder. I created the javascripts/fixtures and javascripts/helpers directories. I added
[jasmine-jquery.js] (https://github.com/velesin/jasmine-jquery), order_form.html ([see here] (https://github.com/velesin/jasmine-jquery#html-fixtures)),
AnimalSpec.js and credit_card_spec.js.

The actual JavaScript (the code we want to test) will be put in the src subdirectory. I added jquery-1.10.2.min, credit_card.js and Animal.js for evaluation.

The SpecRunner.html file is what runs the tests in a browser. I edited the file with the appropriate source and spec files.

Jasmine tests are primarily two parts, describe blocks and it blocks:

    describe('JavaScript addition operator', function () {
      it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
      });
    });

The call to *describe* defines a test suite. Here we name the subject that we want to test in this suite. All specs in
this test suite should refer to this subject. The call to *it* is called a spec. In the function we pass to it we can
write whatever code we want and some expectations. If one or more expectations fail, the spec fails. If all expectations
succeed, the spec succeeds.

To invoke the tests simply open SpecRunner.html in a browser.

### Credits

Railscasts [#261 Testing JavaScript with Jasmine] (http://railscasts.com/episodes/261-testing-javascript-with-jasmine)

Tuts+ [Testing Your JavaScript with Jasmine] (http://net.tutsplus.com/tutorials/javascript-ajax/testing-your-javascript-with-jasmine)

Codeship [JavaScript Testing with Jasmine] (http://blog.codeship.io/2013/07/30/testing-tuesday-16-javascript-testing-with-jasmine.html)

## QUnit Evaluation Notes

