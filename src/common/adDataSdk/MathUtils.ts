
/**常用的数据方法 */
export class MathUtils {
    static compareVersion(v1, v2) {//比较版本
        v1 = v1.split('.');
        v2 = v2.split('.');
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            } else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    }

    static isToday(date) {
        var now = new Date(Date.now());
        var target = new Date(date);
        if (now.getFullYear() != target.getFullYear() || now.getMonth() != target.getMonth() || now.getDate() != target.getDate()) {
            return false;
        }
        else {
            return true;
        }
    }

    /** 获取范围内的随机数 [min,max) */
    static random(min, max) {
        return Math.random() * (max - min) + min << 0;
    }

    /**是否为数字 包括字符串数字*/
    static IsNumber(val) {
        var regPos = /^\d+(\.\d+)?$/; //非负浮点数
        var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if (regPos.test(val) || regNeg.test(val)) {
            return true;
        } else {
            return false;
        }
    }
}