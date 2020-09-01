export default class TipManager {
    private static _ins: TipManager;

    constructor() {

    }

    public showMsgTip(_value: string, _parnet = null, _x: number = null, _y: number = null, fontdata = null, movedistance = 100) {
        let tparent = _parnet ? _parnet : Laya.stage;
        let tx: number = _x == null ? tparent.width / 2 : _x;
        let ty: number = _y == null ? tparent.height / 2 : _y;
        let tipTxt = Laya.Pool.getItemByCreateFun("tiptxt", this.createTxt);
        tipTxt.x = tx;
        tipTxt.y = ty;
        this.initFont(tipTxt, fontdata);
        tipTxt.text = _value;
        tparent.addChild(tipTxt);
        Laya.Tween.clearTween(tipTxt);
        Laya.Tween.to(tipTxt, { y: ty - movedistance }, 1000, null, Laya.Handler.create(this, this.oncomplete, [tipTxt]));
    }

    private oncomplete(tipTxt) {
        tipTxt.removeSelf();
        Laya.Pool.recover("tiptxt", tipTxt);
    }

    private initFont(_txt, _data) {
        _txt.fontSize = 30;
        _txt.color = "#ffffff";
        _txt.strokeColor = "#ff0000"
        if (_data) {
            if (_data.color) _txt.color = _data.color;
            if (_data.fontSize) _txt.fontSize = _data.fontSize;
            if (_data.strokeColor) _txt.strokeColor = _data.strokeColor;
            if (_data.font) _txt.font = _data.font;
            if (_data.width) _txt.width = _data.width;
            if (_data.stroke != null) _txt.stroke = _data.stroke;
        }
    }

    private createTxt() {
        let tipTxt = new Laya.Label();
        tipTxt.anchorX = tipTxt.anchorY = 0.5;
        tipTxt.bold = true;
        tipTxt.width = 300;
        tipTxt.height = 100;
        tipTxt.wordWrap = true;
        tipTxt.align = "center";
        tipTxt.stroke = 3;
        return tipTxt;
    }

    public static get Ins() {
        if (!this._ins) this._ins = new TipManager();
        return this._ins;
    }
}