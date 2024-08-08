
generateGrid(16);
hover();

function generateGrid(a) {
    for (i=1;i<(a**2)+1;i++) {
        const percentage = 1/a*100;
        const newDiv = document.createElement("div");
        newDiv.style.width= percentage+"%";
        newDiv.style.height= percentage+"%";
        newDiv.style.background= "red";
        newDiv.id = 'newDiv'+i;
        newDiv.onmouseover= "newDiv.style.background='blue'";
        const container = document.getElementById("container");
        container.appendChild(newDiv);
    }
}

function hover() {
document.querySelectorAll("#container div").forEach(function(div) {
    div.addEventListener("mouseenter", function() {
        div.style.background = "blue";
    });
    // div.addEventListener("mouseleave", function() {
    //     this.style.background = "red";
    // });  
});
}

const restartButton = document.querySelector('#restartButton');

restartButton.addEventListener('click', function() {
    document.querySelectorAll("#container div").forEach(function(div) {
            div.style.background = "red";
        });
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    let userGrid = prompt("How many columns and rows for your new grid?");
    while (userGrid>100) {
        alert("Sorry, there is an imposed limit of 100, please try again!")
        userGrid = prompt("How many columns and rows for your new grid?");
    };
    generateGrid(userGrid);
    hover();
  });