const container = document.querySelector('#container');


for(let i=1; i<=16; i++){
    const new_column = document.createElement('div');
    new_column.setAttribute("id", "new-column");
    new_column.classList.add('new_column');

    for(let i=1; i<=16; i++){
        const new_div = document.createElement('div');
        new_div.classList.add('new_div');
        //new_div.style.cssText = "width: {$square_width/(i*j)}; height: {$square_width/(i*j)};";
        //new_div.textContent = "Div";

        new_column.appendChild(new_div);
    
    }
    container.appendChild(new_column);
}

    
    



