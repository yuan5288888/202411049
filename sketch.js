function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(250); //文字尺寸
  textAlign(CENTER,CENTER); //文字固定在中間
}

function draw() {

  background("#64b5f6");
  noFill()
  stroke("#e1e5f2")
  strokeWeight(2)


  var rect_width = 50
  var bc_w = 50
  var sc_w =25
  //ellipse(25+bc_w*0,25,bc_w)
  //rect(rect_width*0,0,rect_width)
  //strokeWeight(2)
  //ellipse(rect_width*1,50,sc_w)
  //ellipse(25+bc_w*1,25,bc_w)
  //rect(rect_width*1,0,rect_width)
  //ellipse(rect_width*2,50,sc_w)
  //ellipse(25+bc_w*2,25,bc_w)
  //rect(rect_width*2,0,50)
  //ellipse(rect_width*3,50,sc_w)
  //ellipse(25+bc_w*3,25,bc_w)
  //rect(rect_width*3,0,50)
  //ellipse(rect_width*4,50,sc_w)
  //ellipse(25+bc_w*4,25,bc_w)
  //rect(rect_width*4,0,50)
  //ellipse(rect_width*5,50,sc_w)
 

  for(let j = 0;j<25;j=j+1){
    for(let x=0;x<width;x=x+rect_width){
      ellipse(x,25+50*j,bc_w)
      rect(x,25+50*j,rect_width)
      ellipse(25+x+rect_width,50+50*j,sc_w)
     }
 
}
translate(width/2,height/2);
fill("#1d3557") //字體顏色
rotate(frameCount/50); //隨時肩旋轉
text("YUAN",0,50) //文字
pop();
}