const color =['blue','green','yellow','orange','pink','brown'];

function colorChange(){
let colorsRandomChanges = backgroundRandom();

    document.body.style.background= color[colorsRandomChanges]
    document.querySelector(".inputrgb").textContent= color[colorsRandomChanges];
}


// to add common output on background color and text color notification.
function backgroundRandom(){
    return Math.floor(Math.random()*color.length);
};













// rgb color coding

const rgb = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function changeToRbg(){
    let hexcode ="#";

    for(let i=0; i<6; i++){
        hexcode+= rgb[getRandom()];
    }
    document.querySelector(".inputrgb").textContent= hexcode;
    document.body.style.background= hexcode;  
    
}

function getRandom(){
    return Math.floor(Math.random()*rgb.length);
}