let squaresContainer = document.getElementById("my-squaresContainer");
let squareSide;
let selectEl = document.getElementsByTagName("select")[0];

function generateGrid(){
    squaresContainer.innerHTML = "";

    let totalSquare = parseInt(selectEl.options[selectEl.selectedIndex].text);
    let nSideSquare = parseInt(selectEl.value);

    if(squaresContainer.offsetHeight < squaresContainer.offsetWidth){
        squareSide = squaresContainer.offsetHeight / nSideSquare;
    }else{
        squareSide = squaresContainer.offsetWidth / nSideSquare;
    }
    
    squaresContainer.style.width = `${squareSide * nSideSquare}px`;
    squaresContainer.style.height = `${squareSide * nSideSquare}px`;
    
    for (let i = 1; i <= totalSquare; i++) {
        squaresContainer.innerHTML += `<div class="my-square" onclick="setActive(this)">${i}</div>`;
    
        let lastSquare = Array.from(
            document.querySelectorAll('.my-square')
        ).pop();
    
        lastSquare.style.width = `${squareSide}px`;
        lastSquare.style.height = `${squareSide}px`;
        lastSquare.style.lineHeight = `${squareSide}px`;
    }
}

function setActive(element){
    console.log(`Casella cliccata n: ${element.innerText}`);

    element.classList.add("active");
}

