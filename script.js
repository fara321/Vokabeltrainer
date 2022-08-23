let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};



function addCocabulary() {
    dictionary[germanText.value] = englishText.value;

    germanText.value = '';
    englishText.value = '';

    localStorage.setItem('dictonary'), JSON.stringify(dictionary));

function render() {
    for (let key in dictionary)
        vocabularyList.innerHTML += '<li>/key</li';

}


}