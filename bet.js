function generateRandomkey() {
    let numbers = [];
    let stars = [];
    while (numbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
            document.getElementById("n" + numbers.length).innerHTML = randomNumber;
        }
    }
    while (stars.length < 2) {
        let randomStar = Math.floor(Math.random() * 12) + 1;
        if (!stars.includes(randomStar)) {
            stars.push(randomStar);
            document.getElementById("s" + stars.length).innerHTML = randomStar;
        }
    }
}