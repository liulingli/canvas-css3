(function(){
    var content = document.getElementById('content');
    var rectangle = new Rectangle(content,100,200,300,200);
    console.log(rectangle)
    rectangle.init();
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
        this.$content = $content;
        this.x = x;
        this.y = y;
        this.width = width || 200;
        this.height = height|| 300;
        this.border = border || 1;
        this.fillColor = fillColor || "#000";

    }
    Rectangle.prototype = {
        constructor: Rectangle,
        createHtml: function(){
            this.randomId = Date.parse(new Date());
            this.css = {left:this.x, top:this.y, width:this.width, height:this.height};
            //创建容器
            var container = "<div id='"+this.randomId+"' class='shape_box' data-edit='false' style='left:"+this.css.left+"px;top:"+this.css.top+"px'>" +
                "<canvas class='shape_canvas' width='"+this.css.width+"' height='"+this.css.height+"'></canvas>" +
                "<textarea class='shape_textarea'></textarea>" +
                "</div>";
            this.$content.innerHTML = container;
            this.$canvasDiv = document.getElementById(this.randomId);
            this.canvas = this.$canvasDiv.querySelector('.shape_canvas');
            this.context = this.canvas.getContext("2d");
        },
        drawCanvas: function(){
            this.context.clearRect(0,0,this.css.width,this.css.height);
            this.context.beginPath();
            this.context.rect(0,0,this.css.width,this.css.height)
            this.context.lineWidth = 1;
            this.context.strokeStyle = this.color;
            this.context.stroke();
        },
        init: function(){
            this.createHtml();
            this.drawCanvas();
        }
    }
})();