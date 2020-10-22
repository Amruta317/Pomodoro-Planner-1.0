class focus{
    constructor(){
        this.focus = createButton('Focus');
    }
display(){
    this.focus.position(displayWidth/2 + 90, displayHeight/4);
    this.focus.mousePressed(()=>{
console.log("focus");
    }) 
}
}