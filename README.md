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

The call to *describe* defines a test suite. Here we name the subject that we want to test in this suite. Jasmine supports
nested describes. All specs in this test suite should refer to this subject. The call to *it* is called a spec. In the
function we pass to it we can write whatever code we want and some expectations. If one or more expectations fail, the
spec fails. If all expectations succeed, the spec succeeds.

Expectations are built with the function *expect* which takes a value, called the actual. It is chained with a Matcher
function, which takes the expected value.

Available Jasmine matchers:

    expect(x).toEqual(y); compares objects or primitives x and y and passes if they are equivalent
    expect(x).toBe(y); compares objects or primitives x and y and passes if they are the same object
    expect(x).toMatch(pattern); compares x to string or regular expression pattern and passes if they match
    expect(x).toBeDefined(); passes if x is not undefined
    expect(x).toBeUndefined(); passes if x is undefined
    expect(x).toBeNull(); passes if x is null
    expect(x).toBeTruthy(); passes if x evaluates to true
    expect(x).toBeFalsy(); passes if x evaluates to false
    expect(x).toContain(y); passes if array or string x contains y
    expect(x).toBeLessThan(y); passes if x is less than y
    expect(x).toBeGreaterThan(y); passes if x is greater than y
    expect(function(){fn();}).toThrow(e); passes if function fn throws exception e when executed

Jasmine can also handle asynchronous specs with with *runs()*, *waits()* and *waitsFor()*.

To invoke the tests simply open SpecRunner.html in a browser.

Jasmine does have several useful plugins such as [Phantom-Jasmine] (https://github.com/jcarver989/phantom-jasmine) and
[jasmine-reporters] (https://github.com/larrymyers/jasmine-reporters) (which would be needed for running tests through
Continuous Integration).

### Credits

Railscasts [#261 Testing JavaScript with Jasmine] (http://railscasts.com/episodes/261-testing-javascript-with-jasmine)

Tuts+ [Testing Your JavaScript with Jasmine] (http://net.tutsplus.com/tutorials/javascript-ajax/testing-your-javascript-with-jasmine)

Codeship [JavaScript Testing with Jasmine] (http://blog.codeship.io/2013/07/30/testing-tuesday-16-javascript-testing-with-jasmine.html)


## QUnit Evaluation Notes

I downloaded Qunit.js and Qunit.css from [here] (https://github.com/jquery/qunit/tree/master/qunit) and placed them in a
directory called *core*.

I created a directory called *src* for the actual JavaScript we want to test. I added Animal.js for evaluation.

I created a directory called *test* and added AnimalTest.js.

I created the file TestRunner.html with the appropriate source and spec files.

A QUnit test looks like this:

    test( "JavaScript addition operator", function() {
        equal( (1 + 2), 3, "should add two numbers together" );
    });

Available QUnit assertions:

    ok(state)
    equal(actual, expected)
    notEqual(actual, expected)
    deepEqual(actual, expected)
    notDeepEqual(actual, expected)
    strictEqual(actual, expected)
    notStrictEqual(actual, expected)
    raises(block)

QUnit can handle synchronous callbacks by defining the number of assertions a test contains:

    test( "JavaScript addition operator", 1, function() {

It can also handle asynchronous callbacks:

    asyncTest( "JavaScript addition operator", 1, function() {

To invoke the tests simply open TestRunner.html in a browser.

QUnit does have several useful [plugins] (http://qunitjs.com/plugins/) available, such as the PhantomJS Runner and the
JUnit Logger (which would be needed for running tests through Continuous Integration).

### Credits

Swift Lizard [Development with jQuery & Qunit] (http://www.swift-lizard.com/2009/11/24/test-driven-development-with-jquery-qunit)

Tuts+ [How to Test your JavaScript Code with QUnit] (http://net.tutsplus.com/tutorials/javascript-ajax/how-to-test-your-javascript-code-with-qunit/)

## Karma (formerly known as Testacular)

Karma, known as the Spectacular Test Runner for JavaScript, could be used with either Jasmine or QUnit to integrate with
the CI environment and run the tests against multiple real or headless browsers.
