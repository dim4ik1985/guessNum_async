const rl = require('readline').createInterface(process.stdin, process.stdout),
    hiddenNumber = Math.floor(Math.random() * 100) + 1;

let counter = 0;

console.log(hiddenNumber);

function compare (numUser, numHidden) {
    if (numUser > numHidden) {
        return 'меньше';
    } else if (numUser < numHidden) {
        return 'больше';
    }
}

function question (quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (data) => {
            resolve(data);
        })
    })
}

(async () => {
        while (true) {
            const answer = await question('Input number: ');
            counter++;
            if (answer === 'q') {
                rl.close();
                break;
            }
            if (+answer === hiddenNumber) {
                console.log(`Поздравляем!!! Вы угадали! Попыток: ${counter}`);
                rl.close();
                break;
            } else {
                console.log(`Неверно! Загаданное число ${compare(answer, hiddenNumber)}. Попытка: ${counter + 1}`)
            }
        }
})()
