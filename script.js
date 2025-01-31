const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const input = document.getElementById("user-input");





const checkUserInput = () => {
    if(!input.value) {
        resultsDiv.innerText = "Please provide a phone number";
        return;
    }
    const regexSymbolsOrLetters = /[A-Za-z`!@#$%^&*_+=\[\]{};':"\\|,.<>\/?~]/g;
    if(regexSymbolsOrLetters.test(input.value)) {
        resultsDiv.innerText = `Invalid US number: ${input.value}`;
        return;
    }

    const onlyNumbers = input.value.replace((/\s+|\(|\)|\-/g), "");
    
    if(onlyNumbers.length === 11 && !(/^1/).test(onlyNumbers)) {
        resultsDiv.innerText = `Invalid US number: ${input.value}`;
        return;
    } 
   
    
    

    
}

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", () => {
    resultsDiv.innerText="";
    input.value = ""});
