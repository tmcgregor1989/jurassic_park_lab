const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Diplodoccus', 'herbivore', 25);
    park = new Park('Jurassic Park', 150, [dino1, dino2]);

  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 150);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.equal(actual, 2);
  });

  it('should be able to add a dinosaur to its collection', function (){
    dino3 = new Dinosaur ('Stegasaurus', 'herbivore', 30);
    park.addDinosaur(dino3);
    const actual = park.countDinosaurs();
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.removeDinosaur(dino2);
    const actual = park.countDinosaurs();
    assert.strictEqual(actual, 1);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function (){
    const actual = park.mostAttractive();
    const expected = dino1;
    assert.deepEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function (){
    const actual = park.findSpecies('t-rex');
    const expected = [dino1];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function (){
    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 75);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.visitorsPerYear();
    const expected = 75*365;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.yearlyRevenue();
    const expected = 75*365*150;
    assert.strictEqual(actual, expected);
  });

  it('should remove all dinosaurs of a particular species',function (){
    const actual = park.removeDiet('carnivore');
    const expected = [dino2];
    assert.deepEqual(actual, expected);

  });

  it('should provide an object containing the number of dinosaurs with each diet')

});
