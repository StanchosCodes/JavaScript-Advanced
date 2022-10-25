function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function() {
       // I am a <species>. <toString()>

       return `I am a ${this.species}. ${this.toString()}`;
    }
}