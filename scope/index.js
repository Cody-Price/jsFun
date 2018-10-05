const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB 'Ben' 1
        
        if (personB.includes('B')) {
          personB = person; // personB = 'CardiB'
          personC = personB; // personC = 'CardiB'
          // Log B: personC 'CardiB' 2
        }
      }

      personC = personA; //personC = 'Paul'

      // Log C: personB = 'CardiB' 3
    }

    changePerson();

    // Log D: personC = 'Paul'

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ];

    return result;

    // Annotation:
    // first we declare global variable personA and assign it to the value of 'Paul', then we
    // declare a global variable personB and assign it to the value of 'Ben', then we declare
    // a global variable personC and assign it to the value of 'Tom'. then we declare the
    // function changePerson. then we invoke the function changePerson. inside of the function
    // changePerson, we reach an conditional if statement that states if the variable personA
    // strictly equals the string of 'Paul', reassign the variable person to a value of 'CardiB'
    // however this variable does not exist in the current block, therefore since it has not 
    // been assigned with let or const, it will leak out of the current if block (lines 8-11)
    // and into the changePerson functional scope and look for the variable person to reassign
    // however inside of the changePerson functional scope the variable person does not exist,
    // therefore it will go up the scope chain  to the global scope and look for the variable 
    // person to reassign, however since there is no person variable in the global scope either
    // it will declare the variable person in the global scope without any declaration keyword.
    // then we go back down to line 10 and invoke the function beautifyPerson which will hoist
    // the function beautifyPerson to the current executing line of code which will then log
    // the variable personB which currently is set to the value of 'Ben', then we will move to 
    // line 16 and run another conditional if statement that will check whether personB includes
    // the string 'B' which since the current value of personB at this point in the code 
    // execution is assigned to the value of 'Ben' therefore the statement will return true and 
    // following statement will execute brining us to line 17 where we are reassigning personB
    // to the value of the variable person which is globally scoped and currently assigned to the
    // value of 'CardiB', then the variable personC is reassigned to the value of personB which
    // was just reassigned to the value of 'CardiB'. therefore on the next line of code we will
    // then log personC which is currently assigned to the value of 'CardiB',  that finishes
    // the if statement under the function beautifyPerson which finishes the if statement on 
    // lines 8-11, which will move us down to line 23 where we are reassigning the variable 
    // personC to the value of personA which is currently assigned to the value of 'Paul' then
    // we move to line 25 and log personB which at this point in time is assigned
    // to the value of 'CardiB'
    // which completes the function changePerson and brings us to line 30 where we
    // log personC which at this point in time is assigned to the value of 'Paul'
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number // 28

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 }
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
      { 'A', 'Yo' },
      { 'B', 'Hey' },
      { 'C', 'Hey' },
      { 'D', 'Hello' }
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      }

      newGreeting();

      // Log C: greeting
    }

    greetingGenerator();

    // Log D: greeting

    const result = [
      { 'A', 'hi' },
      { 'B', 'welcome' },
      { 'C', 'welcome' },
      { 'D', 'howdy' }
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = [
      { 'C', 'Brittany' },
      { 'A', 'Nathaniel' },
      { 'B', 'Nathaniel' },
      { 'D', 'Brittany' }
    ];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [
      { 'A', 'Spot' },
      { 'B', 'Spot' },
      { 'C', 'Biscuit' },
      { 'D', 'Biscuit' },
      { 'E', 'Biscuit' }
    ]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit()

    // Log D: fruit

    const result = [
      { 'A', 'undefined' },
      { 'B', 'mango' },
      { 'C', 'mango' },
      { 'D', 'apple' }
    ]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    }

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    }

    fn1();

    const result = [
      { }
    ]
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    };

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
      { 'B': 'flipflop' },
      { 'A': 'undefined' },
      { 'C': 'flipflop' }
    ];
    return result;

    // Annotation:
    // on line 469 we declare a global variable named shoe and assign it equal to flipflop
    // then we declare a global function named putOnShoe, but we skip down to line 469 because
    // it hasnt been invoked yet. on line 469 we log the value of shoe which is 'flipflop' at
    // this point  in time. then we go ahead and invoke our putOnShoe function, and then we try
    // to log shoe within our function, we get undefined because our shoe declaration on line 473
    // is hoisted to the top of that function scope. once weve finished executing putOnShoe, we
    // go back down to line 478 and log shoe again which will give us flipflop.
  }
}

module.exports = scope;