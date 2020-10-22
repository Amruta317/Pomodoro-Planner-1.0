class to_do_list{
    constructor(){
        this.to_do_list = createButton('To Do');
        this.input = createInput('add a todo');
        this.save = createButton('save');
    }
    hide(){
        this.input.hide();
        this.to_do_list.hide();
        this.save.hide();
    }
display(){
    this.to_do_list.position(displayWidth/2, displayHeight/4);
    this.to_do_list.mousePressed(()=>{
console.log("to do list");
this.input.position(displayWidth/2 - 70, displayHeight/2 - 40);
this.button.position(200,250);
memo1.hide();
    })
}
}