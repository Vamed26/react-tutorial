// var scores = {
//    "Vasya": {name: "Vasya",
//    points: 0
//    },
//    "Kolya":{name: "Kolya",
//    points: 0
//    },
//    "Vlad":{name: "Vlad",
//    points: 0
//    },
//    "Sergey":{name: "Sergey",
//    points: 0
//    }
// }
//один из вариантов
// var scores = {};
// scores ["Vasya"] = 0;
// scores ["Kolya"] = 0;
// scores ["Vlad"] = 0;
// scores ["Sergey"] = 0;

var myCrazyObject = {
    "name": "Нелепый обьект",
    "some array" : [7,9, {purpose: "путаница", number: 123}, 3.3],
    "random animal": "Банановая акула"
}
//Ответ:
/*myCrazyObject["some array"][2].number
123*/