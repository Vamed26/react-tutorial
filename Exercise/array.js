var randomBodyParts=["ухо","нос","глаз","рот"];
var randomAdjectives=["вонючий", "гадкий", "беременный","несуразный"];
var randomAnimalBodyParts=["хобот", "хвост", "желчь", "живот","сосок"];
var randomAnimals =["выдры","мартышки","тюленя","носорога","тушканчика"];
 var randomBodyPart =randomBodyParts[Math.floor(Math.random()*randomBodyParts.length)];
 var randomAdjective =randomAdjectives[Math.floor(Math.random()*randomAdjectives.length)];
var randomAnimalBodyPart =randomAnimalBodyParts[Math.floor(Math.random()*randomAnimalBodyParts.length)];
var randomAnimal =randomAnimals[Math.floor(Math.random()*randomAnimals.length)];

var I = "У тебя " +randomBodyPart+ " еще более " +randomAdjective+ ", чем " +randomAnimalBodyPart+ " у "+randomAnimal;
 var I = randomInsult;
console.log(randomInsult);
// var I = ["У тебя",randomBodyPart,"еще более,",randomAdjective,"чем", randomAnimalBodyPart,"у",randomAnimal].join(" ");
// var number = [3,2,1].join(">");
// console.log (number);