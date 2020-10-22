class memo{
    constructor(){
        this.memo = createButton('Memo');
        this.input = createInput('create a memo');
        this.save = createButton('save');
    }
    hide(){
        this.input.hide();
        this.memo.hide();
        this.save.hide();
    }
display(){
    this.memo.position(displayWidth/2 - 90, displayHeight/4);
    this.memo.mousePressed(()=>{
console.log("memo");
this.input.position(displayWidth/2 - 70, displayHeight/2 - 40,);
this.save.position(displayWidth/2, displayHeight/2+50);
todolist.hide();
    })
}
}
