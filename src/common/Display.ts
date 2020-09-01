class Display {
    /**设计分辨改变时消息回调 */
    desginEvent: Function = null;
    /**canvas 尺寸改变时回调 */
    canvasEvent: Function = null;
    designSize: Laya.Size = new Laya.Size(720, 1280);
    frameSize: Laya.Size = new Laya.Size(640, 1134);
    visibleSize: Laya.Size = new Laya.Size(720, 1280);

    init(params?: any) {
        this.designSize = new Laya.Size(Laya.stage.designWidth, Laya.stage.designHeight);
        this.frameSize = new Laya.Size(Laya.Browser.clientWidth, Laya.Browser.clientHeight);
        this.visibleSize = new Laya.Size(Laya.stage.width, Laya.stage.height);
        // console.log(`dw = ${this.designSize.width},dh = ${this.designSize.height}`);
        // console.log(`fw = ${this.frameSize.width},fh = ${this.frameSize.height}`);
        // console.log(`vw = ${this.visibleSize.width},vh = ${this.visibleSize.height}`);
    }

    /**获取适配比例 */
    getFixScale(): { x: number, y: number } {
        return {
            x: this.frameSize.width / this.visibleSize.width,
            y: this.frameSize.height / this.visibleSize.height,
        }
    }

    /**屏幕位置转换成游戏位置 */
    screenToDesign(x: number, y: number) {
        //先将屏幕坐标转到远点坐标点（屏幕原点坐标 左上角,游戏原点坐标 屏幕中心）
        let scale = this.getFixScale();
        // console.log(scale);
        return {
            x: x / scale.x,
            y: y / scale.y
        }
    }

    /**游戏坐标转屏幕坐标 */
    designToScreen(x: number, y: number) {
        let scale = this.getFixScale();
        return {
            x: x * scale.x,
            y: y * scale.y
        }
    }

    /** 屏幕宽高转游戏宽高 */
    sizeToDesign(width: number, height: number) {
        let scale = this.getFixScale();
        return {
            width: width / scale.x,
            height: height / scale.y
        }
    }

    /**游戏中宽高值转到屏幕中的宽高值 */
    sizeToScreen(width: number, height: number) {
        let scale = this.getFixScale();
        return {
            width: width * scale.x,
            height: height * scale.y
        }
    }

    /**
     * 
     * @param width 通过宽度 和屏幕宽高比获取高度
     */
    getHeight(width: number) {
        return width * this.frameSize.height / this.frameSize.width;
    }

    /**
     * @param height 通过高度 和屏幕宽高比获取宽度
     */
    getWidth(height: number) {
        return height * this.frameSize.width / this.frameSize.height;
    }

    /**
     * 判断刘海屏 统一处理
     */
    public largeScreen(): boolean {
        return (Laya.Browser.clientWidth / Laya.Browser.clientHeight) <= (414 / 896) ? true : false;
    }

    /**
     * 大屏幕 广告错位
     */
    public bigScreen(): boolean {
        return (Laya.Browser.clientWidth / Laya.Browser.clientHeight) < (375 / 667) ? true : false;
    }

}


const display = new Display();
export default display;