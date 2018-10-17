function myScript(key) {
    if (key.keyCode == "187") //if the + key is pressed. The directions say the code is 107
    {
        text = document.getElementById("b");
        style = window.getComputedStyle(text, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        text.style.fontSize = (currentSize + 15) + 'px';
        if(text.style.fontSize >= "60px" || text.style.fontSize <= "0px")
         {
            document.getElementById("b").innerHTML = "💥";
            window.removeEventListener("keyup", myScript);
    }
    }
    else if (key.keyCode == "189")
    {
        text = document.getElementById("b");
        style = window.getComputedStyle(text, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        text.style.fontSize = (currentSize - 15) + 'px';
    }
    
}