export class DialogManager {
    private static _ins: DialogManager;

    private _currentURL: string;
    constructor() {

    }

    public sceneOpen(_url: string, _closeother: boolean = false, _param?: any, _complete?: Laya.Handler, _proess?: Laya.Handler) {
        if (this._currentURL != _url) {
            this._currentURL = _url;
            Laya.Scene.open(_url, _closeother, _param, _complete, _proess);
        }
    }

    public sceneClose(_url: string) {
        Laya.Scene.close(_url);
        if (this._currentURL == _url) {
            this._currentURL = "";
        }
    }

    public showDialogByClass(clss) {
        let tdialog = new clss();
        Laya.stage.addChild(tdialog);
        return tdialog;
    }

    public removeSp(_sp: any, _dispose: boolean = false) {
        if (_sp) {
            if (_sp.parent) _sp.parent.removeChild(_sp);
            if (_dispose) _sp = null;
        }
    }

    public static get Ins(): DialogManager {
        if (!this._ins) this._ins = new DialogManager();
        return this._ins;
    }
}