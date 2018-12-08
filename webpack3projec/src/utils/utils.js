
function linkWordStr(...word) {
    return word.join(" ");
}

//方块类
class Rect {
    constructor(x = 0, y = 0, w = 40, h = 40, color = "#57af09") {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw(_ctx) {
        if (!_ctx) return false;
        _ctx.fillStyle = this.color;
        _ctx.strokeStyle = "black";
        _ctx.strokeRect(this.x, this.y, this.w, this.h);
        _ctx.fillRect(this.x, this.y, this.w, this.h);
        return this;
    }
}

//蛇类
class Snake {
    constructor(rectNum, ctx, cavWidth, cavHeight) {
        this.rectData = [];
        this.ctx = ctx;
        this.state = "r";
        this.boundary = { w: cavWidth, h: cavHeight };
        let x = 400, y = 400, w = 40, h = 40;
        for (let i = 0; i < rectNum; i++) {
            var rect = new Rect(x - w * i, y);
            if (i == 0) this.head = rect;
            this.rectData.push(rect);
        }
    }

    draw() {
        this.rectData.forEach((val, index) => val.draw(this.ctx));
        return this;
    }

    move(belonger) {
        var that = this;
        var rd = that.rectData;
        var headRect = that.head;
        var _ctx = that.ctx;
        let x, y, newheadRect;
        //判断方向
        switch (that.state) {
            case "r":
                x = headRect.x + headRect.w;
                y = headRect.y;
                break;
            case "l":
                x = headRect.x - headRect.w;
                y = headRect.y;
                break;
            case "u":
                x = headRect.x;
                y = headRect.y - headRect.h;
                break;
            case "d":
                x = headRect.x;
                y = headRect.y + headRect.h;
                break;
        }
        //console.log(x, y);
        //判断吃
        if (belonger) {
            newheadRect = new Rect(x, y, headRect.w, headRect.h)
        } else {
            newheadRect = rd.pop();
            newheadRect.x = x;
            newheadRect.y = y;
        }
        that.head = newheadRect;
        rd.splice(0, 0, newheadRect);
        return that;
    }

    isKnockWall() {
        var headR = this.head;
        var boundary = this.boundary;
        console.log(headR.x, headR.y);
        if (headR.x < 0 || headR.x >= boundary.w || headR.y < 0 || headR.y >= boundary.h) {
            console.log(1);
            return true;
        }
        return false;

    }

    isKnockSelf(){
        //撞到自己
    }

    isEating(food) {
        var head = this.head;
        return food.x == head.x && food.y == head.y ? true : false;
    }
}

export { Rect, Snake, linkWordStr };

