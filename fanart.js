
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const fetchedData = fetch('https://codo-a-codo-back.onrender.com/fanarts')
    .then(response => response.json())
    .then(result => {
        // Shuffle the result array
        result = shuffleArray(result);

        console.log(result);

        result.forEach(item => {
            const element = document.createElement('div');
            element.classList.add("card");
            element.innerHTML = `
                <img src="https://codo-a-codo-back.onrender.com/uploads/${item.imagen}" alt="${item.personaje}">
                <h2>${item.personaje}</h2>
                <h3>by: ${item.nombre}</h3>
            `;
            document.querySelector('#container').appendChild(element);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

