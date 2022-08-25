let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
//let dictionary = {
//    "HAllo": "Hello",
//    "Baum": "tree",
//};
let randomGermanWord;

function addVocabulary() {
    dictionary[germanText.value] = englishText.value;

    germanText.value = '';
    englishText.value = '';

    localStorage.setItem('dictonary', JSON.stringify(dictionary));
    render();
}

function render() {
    vocabularyList.innerHTML = '';
    for (let key in dictionary) {
        vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
    }
}

function nextVocabulary() {
    let obj_keys = Object.keys(dictionary);
    randomGermanWord = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    word.innerHTML = `${dictionary[randomGermanWord]} `;

}

function compare() {
    if (germanText.value == randomGermanWord) {
        //richtig!
        text.innerHTML = 'Richtig!';

    } else {
        // falsch   
        text.innerHTML = 'falsch!';
    }
    germanText.value = '');
nextVocabulary();

}