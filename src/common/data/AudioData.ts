import DataStorage from "./DataStorage";

/**
 * 音乐音效控制UI类型
 */
export enum AudioType {
    Sound_Volume,       //音效大小
    Music_Volume,       //音乐大小
    Sound_Mute,         //音效开关
    Music_Mute,         //音乐开关
    Mute,               //静音开关
    Vibrator            //震动开关
};

interface Audio {
    soundVolume?: number,
    musicVolume?: number,
    musicMute?: number,
    soundMute?: number,
    mute?: number,
    vibrator?: number,
};

export class AudioData extends DataStorage {
    private _audio: Audio = {
        soundVolume: 1,
        musicVolume: 1,
        musicMute: 1,
        soundMute: 1,
        mute: 1,
        vibrator: 1
    }
    constructor() {
        super();
        this._localName = "game-audio";
        let localAudio = AudioData.getJson(this._localName);
        for (let key in localAudio) {
            this._audio[key] = localAudio[key];
        }
        this.save();
    }

    save() {
        AudioData.setJson(this._localName, this._audio);
    }

    set soundVolume(volume: number) {
        this._audio.soundVolume = volume;
        this.save();
    }

    get soundVolume() {
        return this._audio.soundVolume;
    }

    set musicVolume(volume: number) {
        this._audio.musicVolume = volume;
        this.save();
    }

    get musicVolume() {
        return this._audio.musicVolume;
    }

    set soundMute(smute: number) {
        this._audio.soundMute = smute;
        this.save();
    }

    get soundMute() {
        return this._audio.soundMute;
    }

    set musicMute(mmute: number) {
        this._audio.musicMute = mmute;
        this.save();
    }

    get musicMute() {
        return this._audio.musicMute;
    }

    set mute(mute: number) {
        this._audio.mute = mute;
        this.save();
    }

    get mute() {
        return this._audio.mute;
    }

    set vibrator(vib: number) {
        this._audio.vibrator = vib;
        this.save();
    }

    get vibrator() {
        return this._audio.vibrator;
    }
}

