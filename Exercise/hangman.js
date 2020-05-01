//Массив со словами
var words = [
    "слива",
    "карусель",
    "бамбук",
    "преферанс",
    "антифриз",
    "кинолог" 
];
// Выбираем случайное слово
var word=words[Math.floor(Math.random()*words.length)];
//Создаем итоговый массив
var answerArry = [];
for (var i=0; i<word.length; i++) {
    answerArry[i] = "_";
}
var remainingLetters = word.length;
// remainingLetters - оставшиеся буквы
//Игровой цикл
while (remainingLetters>0) {
    //Состояние игры
    alert(answerArry.join(" "));
    // Запрашиваем вариант ответа
    var guess = prompt('Угадайте букву, или нажмите Отмена для выхода из игры!');
    // guess - предположение
    if (guess === null) {
        break;
    }
else if (guess.length !==1) {
    alert ("Пожалуйста введите одну букву!");
}
else {
    guess.toUpperCase=guess;
    //обновляем состояние игры
    for ( var j=0; j<word.length; j++) {
        if (word[j]===guess) {
            answerArry[j] = guess;
            remainingLetters--;

        }
    }
}
}
alert (answerArry.join(" "));
alert ("Отлично! Было загадано слово " + word);