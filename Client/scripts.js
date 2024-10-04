document.getElementById('generate').addEventListener('click', fetchKey);

async function fetchKey() {
    try {
        // Make a GET request to your API
        const response = await fetch('http://localhost:8000/generate-key');
        const data = await response.json();
        console.log("Sucessfully fetched the key", data.key);
        
        for (let i = 1; i < 6; i++) {
            document.getElementById('n' + i).innerHTML = data.key.numbers[i - 1];
        }
        for (let i = 1; i < 3; i++) {
            document.getElementById('s' + i).innerHTML = data.key.stars[i - 1];
        }
        document.getElementById('previous-keys').innerHTML += `<h5>${data.key.numbers} &nbsp ${data.key.stars}</h5>`;
    } catch (error) {
        console.error("Error generating key: ", error);
    }
}
