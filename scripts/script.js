let int_html_clickCount = 0;


function innerHTMLExample(){

    // Simply modifies the text and the style of it once 

    let element = document.getElementById("p_modifyMe");

    element.innerHTML = "This text has been modified";

    element.style.color = "lime";
    
}

function htmlCheatButtonOnClick(){

    // Gets the element and passes it to the changeColour function along with a static (effectively) Integer.

    let element = document.getElementById("htmlCheatButton");

    changeColour(int_html_clickCount, element);

    int_html_clickCount++;
}


function changeColour(int_count, element){
    let color = "";

    // Changes the colour based on the mod10 value of the integer, 
    // resets it if it hits 9 to prevent hitting the INT_MAX in some unlikely scenario

    switch(int_count % 10){
        case 0:
            color = "red"
            break;
        case 1:
            color = "blue"
            break;
        case 2:
            color = "lime"
            break;
        case 3:
            color = "yellow"
            break;
        case 4:
            color = "magenta"
            break;
        case 5:
            color = "brown"
            break;
        case 6:
            color = "aqua"
            break;
        case 7:
            color = "orange"
            break;
        case 8:
            color = "darkgray"
            break;
        case 9:
            color = "white"
            int_count = 0;
            break;
    }

    element.style.color = color;
    element.style.borderColor = color;

}