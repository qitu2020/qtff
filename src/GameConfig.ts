/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import MoreGameDialog from "./commonUI/MoreGameDialog"
import NativeAdDialog from "./commonUI/NativeAdDialog"
import GoldSp from "./commonUI/prefab/GoldSp"
import SettingDialog from "./commonUI/SettingDialog"
import ShopDialog from "./commonUI/ShopDialog"
import TryUseDialog from "./commonUI/TryUseDialog"
import UIAdwardBox from "./commonUI/UIAdwardBox"
import UISelectBox from "./commonUI/UISelectBox"
import UISign from "./commonUI/UISign"
import UnlockNewDialog from "./commonUI/UnlockNewDialog"
import HomeFloatAdView from "./commonUI/zs/HomeFloatAdView"
import FullScreeAdView from "./commonUI/zs/FullScreeAdView"
import GameMain from "./gameUI/GameMain"
import GameStartView from "./gameUI/GameStartView"
import ElectItem from "./commonUI/prefab/ElectItem"
import LoadSceneView from "./gameUI/LoadSceneView"
import ResultView from "./gameUI/ResultView"
import MoreGame1 from "./commonUI/prefab/MoreGame1"
import Breathe from "./commonUI/script/Breathe"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=720;
    static height:number=1280;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="gameUI/LoadSceneView.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("commonUI/MoreGameDialog.ts",MoreGameDialog);
        reg("commonUI/NativeAdDialog.ts",NativeAdDialog);
        reg("commonUI/prefab/GoldSp.ts",GoldSp);
        reg("commonUI/SettingDialog.ts",SettingDialog);
        reg("commonUI/ShopDialog.ts",ShopDialog);
        reg("commonUI/TryUseDialog.ts",TryUseDialog);
        reg("commonUI/UIAdwardBox.ts",UIAdwardBox);
        reg("commonUI/UISelectBox.ts",UISelectBox);
        reg("commonUI/UISign.ts",UISign);
        reg("commonUI/UnlockNewDialog.ts",UnlockNewDialog);
        reg("commonUI/zs/HomeFloatAdView.ts",HomeFloatAdView);
        reg("commonUI/zs/FullScreeAdView.ts",FullScreeAdView);
        reg("gameUI/GameMain.ts",GameMain);
        reg("gameUI/GameStartView.ts",GameStartView);
        reg("commonUI/prefab/ElectItem.ts",ElectItem);
        reg("gameUI/LoadSceneView.ts",LoadSceneView);
        reg("gameUI/ResultView.ts",ResultView);
        reg("commonUI/prefab/MoreGame1.ts",MoreGame1);
        reg("commonUI/script/Breathe.ts",Breathe);
    }
}
GameConfig.init();