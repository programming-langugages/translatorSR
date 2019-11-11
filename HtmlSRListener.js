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
    this.Res.write("<strong> Code translated </strong> <br/>");

};
HtmlSRListener.prototype.exitSr_program = function(ctx) {
  var text = '';
    for (var index = 0; index <  ctx.children.length; index++ ) {
        if(ctx.children[index].text != null)
            text += ctx.children[index].text;
        else
            text += ctx.children[index].getText();
    }
    this.Res.write(text);
};

// Enter a parse tree produced by SRParser#constant_declaration.
SRListener.prototype.enterConstant_declaration = function(ctx) {
  var text = ''
  for (var index = 0; index <  ctx.children.length; index++ ) {
    let auxtext = ctx.children[index].getText()
    if(auxtext == ":=")
      auxtext = "="
    text += auxtext
  }
  ctx.text = text;
};

// Exit a parse tree produced by SRParser#constant_declaration.
SRListener.prototype.exitConstant_declaration = function(ctx) {
};

SRListener.prototype.enterResource_body = function(ctx) {
};

// Exit a parse tree produced by SRParser#resource_body.
SRListener.prototype.exitResource_body = function(ctx) {
  var text = '';
    for (var index = 0; index <  ctx.children.length; index++ ) {
        if(ctx.children[index].text != null)
            text += ctx.children[index].text;
        else
            text += ctx.children[index].getText();
    }
    ctx.text = text
};

exports.HtmlSRListener = HtmlSRListener;