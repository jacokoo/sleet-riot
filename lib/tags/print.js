var Print,Tag,__extends=function(t,r){function e(){this.constructor=t}for(var n in r)__hasProp.call(r,n)&&(t[n]=r[n]);return e.prototype=r.prototype,t.prototype=new e,t.__super__=r.prototype,t},__hasProp={}.hasOwnProperty;Tag=require("sleet").Tag,module.exports=Print=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return __extends(r,t),r.prototype.generate=function(t){return t.pop().push("{").push(this.content).push("}"),this.isInline?t.eol():void 0},r}(Tag);