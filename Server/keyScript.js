function generateRandomKey() {
    let numbers = [], stars = [];
    while (numbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    while (stars.length < 2) {
        let randomStar = Math.floor(Math.random() * 12) + 1;
        if (!stars.includes(randomStar)) {
            stars.push(randomStar);
        }
    }
    numbers.sort((a, b) => a - b);
    stars.sort((a, b) => a - b);

    return ({key: {numbers, stars}});
}

module.exports = {
    generateRandomKey
};