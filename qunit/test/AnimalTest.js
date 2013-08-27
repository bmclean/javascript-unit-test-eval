test('Animal', function() {
    var insect = new Animal();
    insect.kind = "insect";
    equal(insect.numLegs(), 6, "should have 6 legs if it is an insect");

    var spider = new Animal();
    spider.kind = "spider";
    equal(spider.numLegs(), 8, "should have 8 legs if it is a spider");

    var millipede = new Animal();
    millipede.kind = "millipede";
    equal(millipede.numLegs(), undefined, "shouldn't know the number of legs of a millipede");
});
