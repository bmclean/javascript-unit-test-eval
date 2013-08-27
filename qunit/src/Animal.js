function Animal() {
}

Animal.prototype.numLegs = function () {
    switch (this.kind) {
        case "insect": return 6;
        case "spider": return 8;
    }
};