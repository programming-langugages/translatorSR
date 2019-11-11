const antlr4 = require('antlr4/index');
const SRLexer = require('./SRLexer');
const SRParser = require('./SRParser');
var SRListener = require('./SRListener').SRListener;
HtmlSRListener = function(res) {
    this.Res = res;
    SRListener.call(this); // inherit default listener
    return this;
};
// inherit default listener
HtmlSRListener.prototype = Object.create(SRListener.prototype);
HtmlSRListener.prototype.constructor = HtmlSRListener;
// override default listener behavior
HtmlSRListener.prototype.enterSr_program = function(ctx) {
    this.Res.write("<strong> Testing this SR grammar <br/>");
    this.Res.write(ctx.getText());

};
HtmlSRListener.prototype.exitSr_program = function(ctx) {
    this.Res.write("</strong> ");
};



// Enter a parse tree produced by SRParser#resources_body.
SRListener.prototype.enterResources_body = function(ctx) {

  this.Res.write(ctx.getText());
};

// Exit a parse tree produced by SRParser#resources_body.
SRListener.prototype.exitResources_body = function(ctx) {
};



// Enter a parse tree produced by SRParser#resource_body.
SRListener.prototype.enterResource_body = function(ctx) {

  this.Res.write(ctx.getText());
};

// Exit a parse tree produced by SRParser#resource_body.
SRListener.prototype.exitResource_body = function(ctx) {

  this.Res.write(ctx.getText());
};




exports.HtmlSRListener = HtmlSRListener;
