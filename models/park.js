const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}
Park.prototype.countDinosaurs = function (){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurs.push(dinosaur);

}

Park.prototype.removeDinosaur = function (dinosaur){
    indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.mostAttractive = function (){
    let previousHigh = 0;
    let mostAttractiveDino;
    for (let dino of this.dinosaurs){
        if (dino.guestsAttractedPerDay > previousHigh){
            previousHigh = dino.guestsAttractedPerDay;
            mostAttractiveDino = dino;
        }
   }
   return mostAttractiveDino;
}

Park.prototype.findSpecies = function (species){
    let foundSpecies = [];
    for (let dino of this.dinosaurs){
        if (dino.species == species){
            foundSpecies.push(dino);
        }
   }
   return foundSpecies;
}

Park.prototype.removeDiet = function (diet){
    for (let dino of this.dinosaurs){
        if (dino.diet == diet){
            indexOfDinosaur = this.dinosaurs.indexOf(dino);
            this.dinosaurs.splice(indexOfDinosaur, 1);
        }
    }
    return this.dinosaurs;
}

Park.prototype.visitorsPerDay = function (){
    let visitors = 0;
    for (let dino of this.dinosaurs){
        visitors += dino.guestsAttractedPerDay;
    }
    return visitors;
}

Park.prototype.visitorsPerYear = function(){
    let visitors = 0;
    for (let dino of this.dinosaurs){
        visitors += dino.guestsAttractedPerDay;
    }
    let visitorsYear = visitors * 365;
    return visitorsYear
}

Park.prototype.yearlyRevenue = function(){
    let visitors = 0;
    for (let dino of this.dinosaurs){
        visitors += dino.guestsAttractedPerDay;
    }
    let visitorsYear = visitors * 365;
    let revenue = visitorsYear * this.ticketPrice;
    return revenue;
}

module.exports = Park;
