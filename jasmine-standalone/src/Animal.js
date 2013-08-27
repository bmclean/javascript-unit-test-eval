function Animal() {
}

//Animal.prototype.numLegs = function () {
//    if (this.kind == "insect") {
//        return 6;
//    } else if (this.kind == "spider") {
//        return 8;
//    }
//};

Animal.prototype.numLegs = function () {
    switch (this.kind) {
        case "insect": return 6;
        case "spider": return 8;
    }
};