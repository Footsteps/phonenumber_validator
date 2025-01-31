const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const input = document.getElementById("user-input");





const checkUserInput = () => {
    if(!input.value) {
        alert("Please provide a phone number");
        return;
    }
    const regexSymbolsOrLetters = /[A-Za-z`!@#$%^&*_+=\[\]{};':"\\|,.<>\/?~]/g;
    if(regexSymbolsOrLetters.test(input.value)) {
        resultsDiv.innerText = `Invalid US number: ${input.value}`;
        return;
    }

    let onlyNumbers = input.value.replace((/\s+|\(|\)|\-/g), "");

    if(onlyNumbers.length === 11 && !(/^1/).test(onlyNumbers)) {
        resultsDiv.innerText = `Invalid US number: ${input.value}`;
        return;
    } else if (onlyNumbers.length === 11 && (/^1/).test(onlyNumbers)) {
        onlyNumbers = onlyNumbers.replace((/^1/), "");
    }
   
    const onlyNumbersAndBrackets = input.value.replace((/^1?|\s+|\-/g), "");
    if((/\(|\)/g).test(onlyNumbersAndBrackets) && !(/^\(...\)/g).test(onlyNumbersAndBrackets)) {
        resultsDiv.innerText = `Invalid US number: ${input.value}`;
        return;
    } 

    const onlyNumbersAndDashes = input.value.replace((/^(1|\()?|\s+|\(|\)/g), "");
    if((/\-/g).test(onlyNumbersAndDashes) && !(/\-[0-9]{4}$/gm).test(onlyNumbersAndDashes)) {
        resultsDiv.innerText = `Invalid US number: ${input.value}`;
        return;
    } 
    
    
    if(onlyNumbers.length !== 10) {
        resultsDiv.innerText = `Invalid US number: ${input.value}`;
        return;
    } else {
        resultsDiv.innerText = `Valid US number:  ${input.value}`;
        return;
    }
        
    

    
}

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", () => {
    resultsDiv.innerText="";
    input.value = ""});
