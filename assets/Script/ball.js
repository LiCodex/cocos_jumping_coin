// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
      jumpDuaration: 1,
      jumpHeight: 300
    },
    ballJumpAction: function(){
      var jumpUp = cc.moveBy(this.jumpDuaration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
      var jumpDown = cc.moveBy(this.jumpDuaration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
      return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    onLoad: function() {
      this.node.runAction(this.ballJumpAction());
    },

});
