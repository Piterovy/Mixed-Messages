const personList = ['your mom', 'your dad',
                    'your brother', 'your sister',
                    'your grandmother', 'your grandfather',
                    'your girlfriend', 'your cousin',
                    'your boyfriend', 'your sugar daddy'];

const famousPersonList = ['the Holy Roman Emperor', 'the Pope',
                        'Genghis Khan', 'the Last Samurai',
                        'the Last Jedi', 'Marco Polo',
                        'Chopin', 'president of the USA',
                        'Boris Johnson\'s great-grandmother',
                        'Ezio Auditore da Firenze', 'Charlemagne'];

const activityList = ['sleeping', 'hiking', 'playing poker',
                    'playing League of Legends', 'assembling gaming PCs',
                    'drawing genitalia', 'doing drugs', 'partying',
                    'dancing', 'playing cards'];

const placeList = ['Paris', 'Mordor', 'London', 'Berlin', 'Birmingham',
                'your room', 'Venice', 'Japan', 'Chechenya', 'Los Angeles', 'New York'];


function createMixedMessage() {
    function getRandNum(array) {
        return Math.floor(Math.random() * array.length);
    }

    let person = personList[getRandNum(personList)];
    let famousPerson = famousPersonList[getRandNum(famousPersonList)];
    let firstActivity = activityList[getRandNum(activityList)];
    let firstPlace = placeList[getRandNum(placeList)];

    let secondActivity = activityList[getRandNum(activityList)];
    do {
        let secondActivity = activityList[getRandNum(activityList)];
    } while (secondActivity == firstActivity);

    let secondPlace = placeList[getRandNum(placeList)];
    do {
        let secondPlace = activityList[getRandNum(placeList)];
    } while (secondPlace == firstPlace);

    console.log(`Did you know that ${person} has been ${firstActivity} in ${firstPlace} with
                ${famousPerson} when you've been ${secondActivity} in ${secondPlace}`);
}

createMixedMessage();