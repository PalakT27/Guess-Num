let CorrectNum = 20;
let input = document.querySelector("input");
let CheckBtn = document.querySelector("#CheckBtn");
let msg = document.querySelector("#msg");

CheckBtn.onclick = () => {
    let UserNum = Number(input.value);
    if (UserNum > 50) {
        msg.innerText = "❌ Please enter a number between 1 and 50";
        msg.style.color = "purple";
    }
    else if (UserNum === CorrectNum){
        msg.innerText = "Congratulation 🎉... You entered the correct Number";
        msg.style.color = "orange";
    }
    else if (UserNum > CorrectNum){
        msg.innerText = "Too high 📈... Guess Again.";
        msg.style.color = "red";
    }
    else
    {
        msg.innerText = "Too low 📉... Guess Again.";
        msg.style.color = "green";
    }
};
