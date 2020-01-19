var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartGame = (function (_super) {
    __extends(StartGame, _super);
    function StartGame() {
        return _super.call(this) || this;
    }
    StartGame.Shared = function () {
        if (StartGame.shared == null) {
            StartGame.shared = new StartGame();
        }
        return StartGame.shared;
    };
    StartGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StartGame.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    StartGame.prototype.init = function () {
        console.log('startgame。init');
        this.btn_startgame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    };
    StartGame.prototype.startGame = function () {
        this.parent.addChild(levelNormal.Shared());
        this.parent.removeChild(this);
    };
    return StartGame;
}(eui.Component));
__reflect(StartGame.prototype, "StartGame", ["eui.UIComponent", "egret.DisplayObject"]);
