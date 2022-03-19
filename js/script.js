var creatArray = document.querySelector('.creat-array');
var showArray = document.querySelector('.show-array');
var arrayHandle = document.querySelector('.array-handle');
var sortUp = document.querySelector('#sort-up');
var sortDown = document.querySelector('#sort-down');
var inputIndex = document.querySelector('#index').value;
var inputValue = document.querySelector('#value').value;
var submitBtn = document.querySelector('#submit-btn');



// Creaet random array 
function creatRandomIndex() {
    return Math.floor(Math.random() * (20-10) +10 ) ;
} 

function creatRandomValue() {
    return Math.floor(Math.random() * (100-10) +10 ) ;
}

function creatrandomArray(randomIndex, randomValue) {
    let lastArray = [];
    for ( let i =0 ; i<randomIndex(); i++ ) {
        lastArray.push(randomValue());
    }
    return lastArray;
}

var randomArray = creatrandomArray(creatRandomIndex, creatRandomValue);

function showRandomArray() {
    showArray.textContent = randomArray.toString();
}

//Sort array
function sortUpArray(array) {
    return array.sort();
}
function showSortUpArray() {
    arrayHandle.textContent = sortUpArray(randomArray).toString();
}

function sortDownArray(array) {
    return array.reverse(array.sort());
}
function showSortDownArray() {
    arrayHandle.textContent = sortDownArray(randomArray).toString();
}

// Add element into array
function addItem(array, index, value) {
    array.insert(index, value);
}

function showAfterAdd() {
    arrayHandle.textContent = addItem(randomArray, inputIndex, inputValue).toString();
}


//Execute functions
creatArray.addEventListener("click", showRandomArray);
sortUp.addEventListener("click",showSortUpArray);
sortDown.addEventListener("click",showSortDownArray);
submitBtn.addEventListener("click",showAfterAdd);