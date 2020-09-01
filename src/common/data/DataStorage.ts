export default class DataStorage {
    /**本地数据 */
    protected _data: any = {};
    /**游戏本地存储的键值名 */
    protected _localName: string = "game-storage";
    /**隔天登录游戏 */
    protected _isLoginSecondDay: boolean = false;

    constructor() {
    }

    static getJson(item_name: string) {
        let value = Laya.LocalStorage.getItem(item_name);
        if (!value || value.length == 0) {
            return {};
        }
        return JSON.parse(value);
    }

    static getItem(item_name) {
        let value = Laya.LocalStorage.getItem(item_name);
        if (!value || value.length == 0) {
            return null;
        }
        return value;
    }

    static getInt(item_name) {
        let value = Laya.LocalStorage.getItem(item_name);
        if (!value || value.length == 0) {
            return 0;
        }
        return parseInt(value);
    }

    static getFloat(item_name) {
        let value = Laya.LocalStorage.getItem(item_name);
        if (!value || value.length == 0) {
            return 0.0;
        }
        return parseFloat(value);
    }

    static setItem(item_name: string, value: string) {
        Laya.LocalStorage.setItem(item_name, value);
    }

    static setJson(item_name: string, value: any) {
        let str = JSON.stringify(value);
        Laya.LocalStorage.setItem(item_name, str);
    }

    init(params?: any) {
        params = params || {};
        params.name = params.name || this._localName;
        this._localName = params.name;
        this._data = DataStorage.getJson(this._localName)
    }

    save() {
        DataStorage.setJson(this._localName, this._data);
    }

    clear() {
        this._data = {};
    }

    /**
     * 
     * @param key 键值
     * @param value 默认值(当没有该值是返回默认值)
     */
    get(key: string, value: any = 0) {
        if (typeof this._data[key] == 'undefined') {
            this._data[key] = value;
            this.save();
        }
        return this._data[key];
    }

    /**
     * 设置值
     * @param key 
     * @param value 
     */
    set(key: string, value: any) {
        this._data[key] = value;
        this.save();
    }

    /**
     * 使用
     * @param key 
     * @param value 增加值 value > 0 ,减少时 value < 0
     */
    use(key: string, value: number) {
        let tempValue = this.get(key, 0);
        if (tempValue + value >= 0) {
            tempValue += value;
            this.set(key, tempValue);
            return tempValue;
        }
        return -1;
    }

    /**
     * 判断某个值的数量是否可用
     * @param key 
     * @param value 花费的数值
     */
    isUse(key: string, value: number): boolean {
        let temp = this.get(key, 0);
        if (temp >= value) {
            return true;
        }
        return false;
    }

    /**登录游戏 */
    login() {
        let login = this._data['login'] || {
            loginTime: 0,    //登录时间
            loginCount: 0,   //登录总次数
            loginTodayCount: 0, //当天登录次数
            loginDay: 0,          //登录的天数
            interval: 0          //登录间隔时间
        };
        let curTime = new Date().getTime();
        let day = this.dayDiff(new Date(login.loginTime), new Date(curTime));
        if (day > 0) {
            login.loginTodayCount = 0;
            login.loginDay++;
            this._isLoginSecondDay = true;
        }
        login.loginTodayCount++;
        login.loginCount++;
        login.interval = curTime - login.loginTime;
        login.loginTime = curTime;
        this._data['login'] = login;
    }

    /**
     * @method 计算两个日期时间相隔的天数 2019-09-10 23:59:00 - 2019-09-11 00:00:00 隔一天 
     * @param {Date} date1 
     * @param {Date} date2 
    */
    dayDiff(date1: Date, date2: Date): number {
        var month1 = date1.getMonth() + 1;
        var day1 = date1.getDate();
        var year1 = date1.getFullYear();

        var month2 = date2.getMonth() + 1;
        var day2 = date2.getDate();
        var year2 = date2.getFullYear();

        var dif = ((Date.parse(month2 + '/' + day2 + '/' + year2) - Date.parse(month1 + '/' + day1 + '/' + year1)) / 86400000);
        if (dif < 0) {
            console.log('时间大小存在问题');
            return -1;
        }

        return parseInt(dif.toString());
    }
}
