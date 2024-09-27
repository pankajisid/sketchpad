const container = document.querySelector(".container");
const button = document.createElement("button");
button.textContent = 'Click Me!';

container.prepend(button);

button.addEventListener('click', ()=>{
    const userInput = parseInt(prompt("Enter how many square you want in one row :"));
    const div_grid = document.querySelector(".grid");
    div_grid.innerHTML = '';

    for(let i=1; i <=userInput**2; i++){
        const div = document.createElement("div");
        const ChildDiv = document.createElement("div");
        ChildDiv.classList.add("square");
        ChildDiv.addEventListener('mouseenter', () =>{
            ChildDiv.style.backgroundColor= getRandomColor();
        });
        ChildDiv.addEventListener('mouseleave', () =>{
            ChildDiv.style.backgroundColor= '#FFFFFF';
        });
        div.appendChild(ChildDiv);
        div_grid.appendChild(div);
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i =0; i<6; i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
