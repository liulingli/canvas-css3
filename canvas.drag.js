(function(){

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
        this.width = width;
    }
    Rectangle.prototype = {
        constructor: Rectangle,
    }
})();