const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infotTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a Palindrome!`;
    }
    infotTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a Palindrome!`;
})

txtInput.addEventListener("keyup", () => {
    let filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
       return checkBtn.classList.add("active");
    }
        infoTxt.style.display = "none";
       checkBtn.classList.remove("active");
 });