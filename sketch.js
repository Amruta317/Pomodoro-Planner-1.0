var Image1, memo1, focus1, todolist;
var database;

function preload(){
  Image1=loadImage("images/Image1.jpg");
  }
function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database()
  memo1 = new memo();
  todolist = new to_do_list()
  focus1 = new focus();
  write()
  read()
}

function draw(){
  background(Image1);
  text("xxx", displayWidth/2-50, displayHeight/2-30);  
 memo1.display();
 focus1.display();
 todolist.display();
  drawSprites();


}

function read(){
var dbref = database.ref()
dbref.on("value",function (data){
  console.log(data.val())
})
}

function write(){
  var dbref = database.ref('Memo');
  dbref.update({
    "Input": "abc"
  })
}