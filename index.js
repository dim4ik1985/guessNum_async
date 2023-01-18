const readline = require('readline/promises');
// const {stdin: input, stdout: output} = require('process');
const hiddenNumber = Math.floor(Math.random() * 100) + 1;
let counter = 0;
console.log(hiddenNumber);

function compare (numUser, numHidden) {
    if (numUser > numHidden) {
        return 'меньше';
    } else if (numUser < numHidden) {
        return 'больше';
    }
}

(async () => {
    const rl = readline.createInterface(process.stdin, process.stdout);
        const answer = await rl.question('Input number: ');
        counter++;
        if (+answer === hiddenNumber) {
            console.log('Поздравляем!!! Вы угадали с первой попытки!');
            rl.close();
        } else {
            counter++;
            rl.setPrompt(`Неверно, загаданное число ${compare(answer, hiddenNumber)}. Попытка номер: ${counter}\n`);
            rl.prompt();
            rl.on('line', (answer) => {
                if (+answer === hiddenNumber) {
                    console.log(`Вы угадали! Попытки: ${counter}.`);
                    rl.close();
                } else {
                    counter++;
                    rl.setPrompt(`Неверно, загаданное число ${compare(answer, hiddenNumber)}. Попытка номер: ${counter}\n`);
                    rl.prompt();
                }
            })
        }
})()
