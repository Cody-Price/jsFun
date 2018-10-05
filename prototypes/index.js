const { instructors, cohorts } = require('./datasets/turing');
const { constellations, stars } = require('./datasets/astronomy');
const { cakes } = require('./datasets/cakes');
const { pie } = require('./datasets/pie');
const { clubs } = require('./datasets/clubs');
const { classrooms } = require('./datasets/classrooms');
const { mods } = require('./datasets/mods');
const { bosses, sidekicks } = require('./datasets/bosses');

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  function studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
    const result = instructors.map((instructor) => {
        let studentCountModule = cohorts.find((currVal) => {
          return currVal.module === instructor.module;
        });
      
        let newInstructor = { name: instructor.name,
                              studentCount: studentCountModule.studentCount }    
        return newInstructor;
    })

    return result;

    // Annotation:
    // Recieved two arrays of objects, I need to return an array of the same length
    // for the instructors array as I am going to need to return an array of instructors
    // therefore I reached for the map method.
    // It makes the most sense to iterate over the instructors method as that is the
    // same length array I will be returning.
    // both of the datasets have the module key in common so that is how I will get 
    // them to speak to eachother.
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {

//GTG
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map((element, index) => {
        let studentsPerMod = { mod: (index + 1), studentsPerInstructor: (element.students / element.instructors)}
        return studentsPerMod;
        })
        return result;

    // Annotation:
    // I am given an array of objects
    // I want an array of objects back of the same length
    // I am going to reach for map
    // I utilized map passing the element and index through the callback function
    // since conveniently the mods were in order and just had to add one to each
    // index, then on the second key I just had to call some simple math for the value
    // of dividing the students by the instructors then return each object as an 
    // element that map will create for me.
    }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {

//GTG
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter((room) => {
        if (room.program === 'FE') {
        return room;
        }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

//GTG
  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    let feTotal = 0;
    let beTotal = 0;    

    const result = classrooms.reduce((obj, room) => {
        if (room.program === 'FE') {
            obj.feTotal += room.capacity;
        } else {
            obj.beTotal += room.capacity;
        }

        obj = { feCapacity: feTotal , beCapacity: beTotal };
        return obj;
    }, {})
    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

//GTG
  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.map((room) => {
      return room.capacity;
    }).sort((a, b) => {
      return a - b;
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes

const cakePrompts = {

//GTG
  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((arr, currentValue) => {
        currentValue.toppings.forEach((value) => {
            if (arr.indexOf(value) === -1) {
            arr.push(value);
            }
        })
        return arr;
    }, []);

    return result;

    // Annotation:
    // I am given an array of objects containing cake properties
    // I am being asked to return an array of unique toppings with no duplicates needed
    // to back every single cake in the dataset, so bluntly an array of unique
    // toppings. therefore I am going to use reduce to return a single value of any
    // data type I choose. 
  },

//GTG
  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((obj, topping) => {
        topping.toppings.forEach((value) => {
            if (!obj[value]) {
                obj[value] = 10;
            } else {
                obj[value]++;
            }
        })
        return obj;
    }, {});
    return result;

    // Annotation:
    // Need to return an object
    // keys will all be toppings
    // values will be amount needed to buy
    // values will reflect the amount of times the topping is listed in the cakes array
    // I need to specify my data type, therefore I will reach for reduce
    // I need to iterate through each array of toppings and create key value pairs
    // inside of my object
    // therefore i need to add the value as a key and assign it to a default of 1
    // if it sees it again, therefore, incriment.

  },

//GTG
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'honey', inStock: 3 },
    //    { flavor: 'vanilla', inStock: 21 },
    //    ..etc
    // ]

    const result = cakes.map((value) => {
        flavorStockNum = {flavor: value.cakeFlavor, inStock: value.inStock};
        return flavorStockNum;
    })
    return result;

    // Annotation:
    // I am given an array of objects
    // need to return an array
    // array will be same length
    // each element is an object
    // im going to reach for map
    // im going to return an object into my new map array based on the two 
    // keys and values needed
  },

//GTG
  totalInventory() {
    // Return the total amout of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, currentVal) => {
        acc += currentVal.inStock;
        return acc;
    }, 0)
    return result;

    // Annotation:
    // I am given an array of objects
    // I want the total number of cakes (a number)
    // I can add them all up using reduce

  },

//GTG
  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]


    const result = cakes.filter((currentCake) => {
        return currentCake.inStock;
    });

    return result;

    // Write your annotation here as a comment
    // Im recieving an array of cakes and i want a subset of that array so 
    // Im going to reach for filter. My filter callback will return only the cakes
    // that have an inStock value
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------







// DATASET: pie from ./datasets/pie
const piePrompts = {

//GTG
  howManyIngredients() {
    // The bakery needs to make more rhubarb pies in order to meet the
    // desiredInventoryCount. Programmatically determine how many more pies
    // need to be made, and return an object of the total number of ingredients we need
    // we need to buy in order to make the remaining pies. e.g.:
    // {
    //   cinnamon: 50,
    //   sugar: 100
    // }



    const result = const piesNeeded = pie.desiredInventoryCount - pie.inventoryCount;

    const pieIngredientKeys = Object.keys(pie.ingredients);

    const groceryList = Object.assign({}, pie.ingredients);

    pieIngredientKeys.forEach((value) => {
        groceryList[value] = groceryList[value] * piesNeeded;
    });

    result = groceryList;

    return result;

    // Annotation:
    // I am given an Object called pie
    // I want an object of a different length back
    // I cannot iterate over an object with an array
    // prototype method
    // I can use an object prototype method
    // I do not want to modify the original object so I 
    // need to reach for Object.assign
    // 
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {

//GTG
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((namesArr, club) => {
      club.members.forEach((member) => {
        if (!namesArr.includes(member)) {
          namesArr.push(member);
        }
      })
      return namesArr;
    }, []).reduce((obj, name) => {
      let clubArr = [];
      clubs.forEach((club) => {
        if (club.members.includes(name)) {
          clubArr.push(club.club);
        }
      })
      obj[name] = clubArr;
      return obj
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {

//GTG
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    const bossKeys = Object.keys(bosses);
    const result = bossKeys.map((boss) => {
        let loyalty = sidekicks.reduce((loyaltyTotal, sidekick) => {
        if (sidekick.boss === bosses[boss].name) {
            loyaltyTotal += sidekick.loyaltyToBoss;
        }
        return loyaltyTotal;
        }, 0)

        return { bossName: bosses[boss].name, sideKickLoyalty: loyalty }
        }).reverse();

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {

//GTG
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties.filter((element) => {
              return element.color === 'orange';
            }).map((value) => {
              return value.name;
            });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

//GTG
  sortByAge() {
    // Sort the kitties by their age

    const const result = kitties.map((element) => {
      return element.age;
    }).sort((a, b) => {
      return a - b;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

//GTG
  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    const result = kitties.map((kitten) => {
      kitten.age += 2;
      return kitten
    });

    return result;
  };
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    const constellationKeys = Object.keys(constellations);
    const result = stars.filter((star) => {
      const namesArray = constellationKeys.reduce((arr, constellation) => {
      arr = arr.concat(constellations[constellation].stars)
      return arr;
      }, []);
      return namesArray.includes(star.name)
    });;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



module.exports = {
  turingPrompts,
  piePrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  astronomyPrompts
};