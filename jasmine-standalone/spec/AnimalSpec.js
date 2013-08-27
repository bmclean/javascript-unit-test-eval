describe("Animal", function() {
    it("should have 6 legs if it is an insect", function() {
        var insect = new Animal();
        insect.kind = "insect";
        expect(insect.numLegs()).toBe(6);
    });

    it("should have 8 legs if it is a spider", function() {
        var spider = new Animal();
        spider.kind = "spider";
        expect(spider.numLegs()).toBe(8);
    });

    it("shouldn't know the number of legs of a millipede", function() {
        var millipede = new Animal();
        millipede.kind = "millipede";
        expect(millipede.numLegs()).toBeUndefined();
    });
});


