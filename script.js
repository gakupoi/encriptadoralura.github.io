const buttons = document.querySelector(".buttons-container");
const elements = document.querySelector(".no-entry");
const entryElement = document.querySelector(".entry");
const entryText = document.querySelector(".entry-text");
const copyBtn = document.querySelector(".copy-text");

buttons.addEventListener("click", (e)=> {
    const word = document.getElementById("entry-text").value

    if(e.target.classList.contains("encrypt-text") && word !=""){
        const newWord = word
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        elements.style.display = "none"; 
        entryElement.style.display = "flex";
        entryText.innerHTML = newWord;
    }
    else if (e.target.classList.contains("decrypt-text") && word !=""){
        const newWord = word
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        elements.style.display = "none";
        entryElement.style.display = "flex"
        entryText.innerHTML = newWord;
    }

})

copyBtn.addEventListener("click", () => {
    var text = document.getElementById("txtOutput").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    // document.execCommand("copy");
    elem.setSelectionRange(0, 99999);
    let aws = navigator.clipboard.writeText(elem.value);
    document.body.removeChild(elem);
    return aws    
    
})


