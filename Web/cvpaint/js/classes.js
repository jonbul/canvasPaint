//OBJECTS DECLARATION

class masterJasonFile{
    constructor(cnvW,cnvH,bgc,gridH,gridV,layers){
        this.canvas = function(cnvW,cnvH){
            this.width = cnvW;
            this.height = cnvH;
        };
        this.canvas.width = cnvW;
        this.canvas.height = cnvH;
        
        this.bgc = bgc;
        
        this.grid = function(gridH,gridV){
            this.h = gridH;
            this.v = gridV;
        };
        this.grid.h = gridH;
        this.grid.v = gridV;
        this.layers = layers;
    }
    
}
//FORMS
class Rect{
    constructor(x,y,w,h,cbg,cbr,brw,grad){
        this.desc = RECT;
        this.pos = 0;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.cbg = cbg;
        this.cbr = cbr;
        this.brw = brw;
        this.grad = grad;
    }
    
    /*set x(x){
        this.x = x;
    }
    get x(){
        return this.x;
    }
    set y(y){
        this.y = y;
    }
    get y(){
        return this.y;
    }
    set w(w){
        this.w = w;
    }
    get w(){
        return this.w;
    }
    set h(h){
        this.h = h;
    }
    get h(){
        return this.h;
    }
    
    set cbg(cbg){
        this.cbg = cbg;
    }
    get cbg(){
        return this.cbg;
    }
    set cbr(cbr){
        this.cbr = cbr;
    }
    get cbr(){
        return this.cbr;
    }
    set brw(brw){
        this.brw = brw;
    }
    get brw(){
        return this.brw;
    }
    set grad(grad){
        this.grad = grad;
    }
    get grad(){
        return this.grad;
    }*/
    draw(context){
        if(grad>0)
        context.rotate(this.grad*Math.PI/180);
        
        context.fillStyle=this.cbg;//BACKGROUND
        context.fillRect(this.x,this.y,this.w,this.h);
        if(this.brw>0){
            context.strokeRect(this.x,this.y,this.w,this.h);
            context.strokeStyle = this.cbr;
            context.lineWidth=this.brw;
            context.stroke();
        }
        context.fill;
        if(grad>0)
        context.rotate((360-this.grad)*Math.PI/180);
    }
}
class Arc{
    constructor(x,y,r,g1,g2,cbg,cbr,brw){
        this.desc = ARC;
        this.pos = 0;
        this.x = x;
        this.y = y;
        this.r = r;
        this.g1 = g1;
        this.g2 = g2;
        this.cbg = cbg;
        this.cbr = cbr;
        this.brw = brw;
    }
    draw(context){
        if(this.r<0)this.r*=-1;
        context.beginPath();
        context.fillStyle = this.cbg;//BACKGROUND
        context.arc(this.x,this.y,this.r, this.g1, this.g2);
        if(this.brw>0){
            context.strokeStyle = cbr;//BORDER
            context.strokeStyle = this.cbr;
            context.lineWidth=this.brw;
            context.stroke();
        }
        
        context.fill();
    }
}
class Ellipse{
    constructor(x,y,rx,ry,gr,g1,g2,cbg,cbr,brw){
        this.desc = ELLIPSE;
        this.pos = 0;
        this.x = x;
        this.y = y;
        this.rx = rx;
        this.ry = ry;
        this.gr = gr;
        this.g1 = g1;
        this.g2 = g2;
        this.cbg = cbg;
        this.cbr = cbr;
        this.brw = brw;
    }
    draw(context){
        if(this.r<0)this.r*=-1;
        context.beginPath();
        context.fillStyle = this.cbg;//BACKGROUND
        context.ellipse(this.x,this.y,this.rx,this.ry,this.gr, this.g1, this.g2);
        if(this.brw>0){
            context.strokeStyle = cbr;//BORDER
            //context.strokeArc(this.x,this.y,this.w,this.h);
            context.strokeStyle = this.cbr;
            context.lineWidth=this.brw;
            context.stroke();
        }
        
        context.fill();
    }
}
class Line{
    constructor(x1,y1,x2,y2,cbr,brw){
        this.desc = LINE;
        this.pos = 0;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.cbr = cbr;
        this.brw = brw;
    }
    draw(context){
        context.beginPath();
        context.strokeStyle = this.cbr;//BORDER
        context.moveTo(this.x1,this.y1);
        context.lineTo(this.x2,this.y2);
        context.lineWidth = this.brw; 
        context.stroke();
        context.fill();
    }
}
class Poligon{
    constructor(points,cbg,cbr,brw){
        this.desc = POLIGON;
        this.pos = 0;
        if(points === undefined){
            this.points = [];
        }else{
            this.points = points;
        }
        this.cbg = cbg;
        this.cbr = cbr;
        this.brw = brw;
    }
    draw(context){
        if(this.points.length>0){
            context.fillStyle= this.cbg;
            context.strokeStyle = this.cbr;
            context.beginPath();
            context.moveTo(this.points[0].x, this.points[0].y);
            for(var i = 1; i < this.points.length; i++){
                context.lineTo(this.points[i].x,this.points[i].y);
            }
            context.lineWidth = this.brw;
            context.closePath();
            context.fill();
            context.stroke();
        }
    }
}
class Pencil{
    constructor(points,cbr,cbrw){
        this.desc = PENCIL;
        this.pos = 0;
        if(points !== undefined){
            this.points = points;
        }else{
            this.points = [];
        }
        this.cbr = cbr;
        this.cbrw = cbrw;
    }
    draw(context){
        context.strokeStyle = this.cbr;
        context.beginPath();
        context.moveTo(this.points[0].x, this.points[0].y);
        for(var i = 1; i < this.points.length; i++){
            context.lineTo(this.points[i].x,this.points[i].y);
        }
        context.lineWidth = this.brw;
        context.stroke();
    }
}
class ClosedPencil{
    constructor(points,cbg,cbr,cbrw){
        this.desc = CLOSEDPENCIL;
        this.pos = 0;
        if(points !== undefined){
            this.points = points;
        }else{
            this.points = [];
        }
        this.cbr = cbr;
        this.cbrw = cbrw;
    }
    draw(context){
        context.fillStyle= this.cbg;
        context.strokeStyle = this.cbr;
        context.beginPath();
        context.moveTo(this.points[0].x, this.points[0].y);
        for(var i = 1; i < this.points.length; i++){
            context.lineTo(this.points[i].x,this.points[i].y);
        }
        context.lineTo(this.points[0].x, this.points[0].y);
        context.lineWidth = this.brw;
        context.closePath();
        context.fill();
        if(context.lineWidth>0){
            context.stroke();
        }
    }
}
class Rubber{
    constructor(points,cbrw){
        this.desc = RUBBER;
        this.pos = 0;
        if(points !== undefined){
            this.points = points;
        }else{
            this.points = [];
        }
        this.cbrw = cbrw;
    }
    draw(context){
        for(var i = 0; i < this.points.length-1; i++){
            context.clearRect(this.points[i].x-this.brw/2,this.points[i].y-this.brw/2,this.brw/2,this.brw/2);
        }
        context.stroke();
    }
}
class Picture{
    constructor(img,src,sx,sy,sw,sh,x,y,w,h,grad){
        this.desc = PICTURE;
        this.pos = 0;
        this.img = img;
        this.src = src;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        
        this.grad = grad;
        
        var elem = this;
    }
    draw(context){
        context.rotate(this.grad*Math.PI/180);
        context.drawImage(this.img,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.w,this.h);
        context.rotate((360-this.grad)*Math.PI/180);
    }
    getImageFromSrc(src){
        var image = new Image();
        var b = false;
        image.onload = function(){
            elem = addImgToElem(elem, this);
            
            elem.img = image;//ctx.drawImage(this.src,0,0); // Or at whatever offset you like
        };
        image.src = src;
        //while(!b);
    }
    addImgToElem(elem, img){
        elem.img = img;
        return elem;
    }
}
class ClickXY{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
class Layer{
    constructor(elements){
        this.pos = 0;
        
        if(elements === undefined){
            this.elements = [];
        }else{
            this.elements = elements;
        }
        this.name = "name";
        this.desc = "desc";
        this.visible = true;
    }
}