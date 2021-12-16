const checkNumber = function (number) {
  if (number > 100) {
    return "true";
  } else {
    return "false";
  }
};

const result = checkNumber(120);
//console.log(result);
// this is a function that produces something: the awnser if the number is or is not higher then 100.

const Brenda = function (age, maxPeople, currentPeople) {
  if (age < 18) {
    return "this is a club for adults";
  } else if (maxPeople <= currentPeople) {
    return "its to busy now, come back later";
  } else {
    return "come in!";
  }
};

const brendaSays = Brenda(18, 100, 150);
console.log(brendaSays);

// ik krijg de zelfde werkende function als ik de ''return'' wissel met ''console.log'' en dan onder de function call.
//onderstaande heb ik geprobeerd maar werkt niet.

/*
const Brenda = function (age, maxPeople, currentPeople) {
  const badAge = age < 18;
  const badNumber = currentPeople >= maxPeople;
  if (badAge) {
    return "this is a club for adults";
  } else if (badNumber) {
    return "its to busy now, come back later";
  } else {
    return "come in";
  }
};

const brendaSays = Brenda([15, 150, 59]);
console.log(brendaSays);
*/

const array = function ([N1, N2, N3, N4, N5]) {
  const average = [N1 + N2 + N3 + N4 + N5] / 5;
  return average;
};

const sum = array([100, 100, 100, 100, 100]);
console.log(sum);

/* Ik heb geprobeerd het werkende te krijgen met array.length maar dan telde hij de input alleen op. 
aangezien we dit ook nog niet hebben geleerd heb ik voor de makkelijke /5 gekozen. */
