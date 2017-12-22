(function(){
    var Utils = {
        isOwnOrParentHasClassName:function(e,className){
            var path = e.path;
            for(var i=0;i<path.length;i++){
                if((path[i].className || "").indexOf(className)>-1){
                    return true;
                }
            }
            return false;
        },
        isOwnOrParentHasId:function(e,id){
            var path = e.path;
            for(var i=0;i<path.length;i++){
                if((path[i].id || "").indexOf(id)>-1){
                    return true;
                }
            }
            return false;
        }
    };
    /**
     * @method 可拖动的修改大小的类
     * @constructor
     */
    function DragClass(){
        this.editable = false;
        this.newCss = {};
        this.edit = function($content){
            this.editable = true;
            var control = document.getElementById("shape_controls");
            control.style.display = "block";
            control.style.width = $content.style.width;
            control.style.height = $content.style.height;
            control.style.left = $content.style.left;
            control.style.top = $content.style.top;
        };
        this.unEdit = function($content){
            this.editable = false;
            var control = document.getElementById("shape_controls");
            control.style.display = "none";
        };
        this.move = function(){
            var control = document.getElementById("shape_controls");
            var controls_bounding = document.getElementById("controls_bounding");
            var that = this;
            controls_bounding.onmousedown = function(e) {
                var type = e.target.getAttribute("resizedir");
                var oldX = e.clientX;
                var oldY = e.clientY;
                var disX = 0;
                var disY = 0;
                document.onmousemove = function (e) {
                    disX = e.clientX - oldX;
                    disY = e.clientY - oldY;
                    oldX = e.clientX;
                    oldY = e.clientY;
                    that.newCss = {
                        left: that.css.left+ disX,
                        top: that.css.top + disY,
                        width: that.css.width ,
                        height: that.css.height
                    };
                    control.style.left =  that.newCss.left + "px";
                    control.style.top =  that.newCss.top + "px";
                    that.changeMove();
                };
                document.onmouseup = function(e){
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        },
        this.addEvent = function($content){
            var control = document.getElementById("shape_controls");
            var that = this;
            $content.addEventListener("click",function(){
                that.edit($content);
            });
            //点击其他地方
            document.body.addEventListener("click",function(e){
                var className = e.target.className;
                if(e.target.id !== "shape_controls" && !Utils.isOwnOrParentHasClassName(e,'shape_box') && !Utils.isOwnOrParentHasId(e,"shape_controls")){
                    that.unEdit($content)
                }
            });
            var controlTypes = control.getElementsByClassName("shape_controller");
            for(var i=0;i<controlTypes.length;i++){
                var controlEle = controlTypes[i];
                controlEle.onmousedown = function(e){
                    var type = e.target.getAttribute("resizedir");
                    var oldX = e.clientX;
                    var oldY = e.clientY;
                    var disX = 0;
                    var disY = 0;
                    document.onmousemove = function(e){
                        disX = e.clientX - oldX;
                        disY = e.clientY - oldY;
                        oldX = e.clientX;
                        oldY = e.clientY;
                        switch (type){
                            case "br" :
                                that.newCss = {
                                    left: that.css.left,
                                    top: that.css.top,
                                    width: that.css.width + disX,
                                    height: that.css.height + disY
                                };
                                break;
                            case "tr" :
                                that.newCss = {
                                    left: that.css.left,
                                    top: that.css.top + disY,
                                    width: that.css.width + disX,
                                    height: that.css.height - disY
                                };
                                break;
                            case "bl" :
                                that.newCss = {
                                    left: that.css.left + disX,
                                    top: that.css.top,
                                    width: that.css.width - disX,
                                    height: that.css.height + disY
                                };
                                break;
                            case "tl" :
                                that.newCss = {
                                    left: that.css.left + disX,
                                    top: that.css.top + disY ,
                                    width: that.css.width - disX,
                                    height: that.css.height - disY
                                };
                                break;
                            default:
                                that.newCss = that.css;
                                break;
                        }
                        control.style.width =  that.newCss.width + "px";
                        control.style.height =  that.newCss.height + "px";
                        control.style.left =  that.newCss.left + "px";
                        control.style.top =  that.newCss.top + "px";

                        that.changeMove();
                    };
                    document.onmouseup = function(e){
                        //controlEle.onmousedown = null;
                        document.onmousemove = null;
                        document.onmouseup = null;
                    }
                }
            }
        }
    }
    /**
     * @constructor  创建矩形 构造函数
     * @param $content 容器
     * @param x 矩形所处画布的原点x
     * @param y 矩形所处画布的原点y
     * @param width 矩形宽度
     * @param height 矩形高度
     * @param border 矩形线宽
     * @param fillColor 填充颜色
     * @param strokeColor 线条颜色
     */
    function Rectangle($content,x,y,width,height,border,fillColor,strokeColor){
        DragClass.call(this);
        this.$content = $content;
        this.x = x;
        this.y = y;
        this.width = width || 200;
        this.height = height|| 300;
        this.border = border || 1;
        this.fillColor = fillColor || "#000";
        this.strokeColor = strokeColor || "#000";
    }
    Rectangle.prototype = {
        constructor: Rectangle,
        createHtml: function(){
            this.randomId = Date.parse(new Date());
            this.css = {left:this.x, top:this.y, width:this.width, height:this.height};
            //创建容器
            var container = "<div id='"+this.randomId+"' class='shape_box' data-edit='false' style='width:"+this.css.width+"px;height:"+this.css.height+"px;left:"+this.css.left+"px;top:"+this.css.top+"px'>" +
                "<canvas class='shape_canvas' width='"+this.css.width+"' height='"+this.css.height+"'></canvas>" +
                "<textarea class='shape_textarea'></textarea>" +
                "</div>";
            var oldHtml = this.$content.innerHTML;
            this.$content.innerHTML = oldHtml + container;
            this.$canvasDiv = document.getElementById(this.randomId);
            this.canvas = this.$canvasDiv.querySelector('.shape_canvas');
            this.context = this.canvas.getContext("2d");
        },
        changeHtml: function(){
            this.$canvasDiv.style.left =  this.css.left + "px";
            this.$canvasDiv.style.top =  this.css.top + "px";
            this.$canvasDiv.style.width =  this.css.width + "px";
            this.$canvasDiv.style.height = this.css.height + "px";
            this.canvas.width = this.css.width;
            this.canvas.height = this.css.height;
        },
        drawCanvas: function(){
            this.context.clearRect(0,0,this.css.width,this.css.height);
            this.context.beginPath();
            this.context.rect(0,0,this.css.width,this.css.height);
            this.context.lineWidth = 3;
            this.context.strokeStyle = this.strokeColor;
            this.context.stroke();
           /* this.context.fillStyle = this.fillColor;
            this.context.fill();*/
        },
        changeMove: function(){
            this.css = this.newCss;
            this.changeHtml();
            this.drawCanvas();
        },
        init: function(){
            this.createHtml();
            this.drawCanvas();
            this.addEvent(this.$canvasDiv);
            this.move(this.$canvasDiv);
        }
    }

    var content = document.getElementById('content');
    var rectangle = new Rectangle(content,100,200,300,200);
    console.log(rectangle)
    rectangle.init();

    /**
     * @method 创建圆构造函数
     * @param $content
     * @param x
     * @param y
     * @param r
     * @param border
     * @param strokeColor
     * @param fillColor
     * @constructor
     */
    function Circle($content,x,y,r,border,strokeColor,fillColor){

    }
})();

