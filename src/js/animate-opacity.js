function animate( ele , attr_options , callback ){
    for(var attr in attr_options){
        attr_options[attr] = {
            //  目标点 : 传入的数据;
            target : attr === "opacity" ? attr_options[attr] * 100 : attr_options[attr],
            //  元素当前的属性值 ;
            iNow   : attr === "opacity" ? parseInt( getComputedStyle(ele)[attr] * 100 ) : parseInt( getComputedStyle(ele)[attr])
        }
    }
    // 关闭开启定时器;
    clearInterval( ele.timer );
    ele.timer = setInterval( function(){
        // 1. 获取速度; width :  height : 
        for(var attr in attr_options){
            // attr : width | height;
            var item = attr_options[attr];
            // console.log(item , attr);
            var target = item.target;
            var iNow   = item.iNow;
            // 运动所必须的值我们都有了;
            // 计算速度;
            var speed = (target - iNow) / 10;
            // 速度取整;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 终止条件 : 
            if( Math.abs( target - iNow) <= Math.abs(speed) ){
                // 终止定时器 ; 
                // 送他一把;
                // clearInterval( ele.timer );
                // ele.style[attr] = target + "px";
                // 终止条件不可靠,因为目标的不一致会让运动次数执行不同，有可能提前关闭定时器;
                ele.style[attr] = attr === "opacity" ? target / 100 :  target + "px";
                // 一条运动完成删除对象里面的数据;
                delete attr_options[attr];

                // 如果对象里面没有属性了，那么我们关闭定时器就可以了;
                for(var num in attr_options){
                    // 如果attr_options里面有属性,那么此时我就不应该终止定时器;
                    return false;
                }
                clearInterval(ele.timer);
                typeof callback === "function" ? callback() : "";
            }else{
                // 元素运动;
                // 因为 iNow 是一个临时变量,所以不能再去操作iNow , 要去操作iNow 的数据源;
                // 多花点经历理解这段代码;
                attr_options[attr].iNow += speed;
                ele.style[attr] = attr === "opacity" ? attr_options[attr].iNow / 100 : attr_options[attr].iNow + "px";
            }
        }
    } , 30)
}