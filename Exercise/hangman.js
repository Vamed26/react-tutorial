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
var word = words[Math.floor(Math.random() * words.length)];
//Создаем итоговый массив
var answerArry = [];
for (var i = 0; i < word.length; i++) {
    answerArry[i] = "_";
}
var remainingLetters = word.length;
var newRemainingLetters = remainingLetters;
// remainingLetters - оставшиеся буквы
//Игровой цикл
var lives = 3;
while ((remainingLetters > 0) && (lives !== 0)) {
    //Состояние игры
    alert("Жизни: " + lives+"  "+ answerArry.join(" ")+"  "+"Осталось отгадать букв: "+ remainingLetters );
    // Запрашиваем вариант ответа
    var guess = prompt('Угадайте букву, или нажмите Отмена для выхода из игры!');
    guess=guess.toLowerCase();
    // guess - предположение
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert("Пожалуйста введите одну букву!");
    }
    else {
        //обновляем состояние игры
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArry[j] = guess;
                remainingLetters--;

            }
        }
    }
    if (remainingLetters === newRemainingLetters) {
        lives--;
    }
    newRemainingLetters = remainingLetters;
    if (lives === 0) {
        alert("Не повезло, жизни закончились :(");
    }
}
alert(answerArry.join(" "));
alert("Было загадано слово: " + word);