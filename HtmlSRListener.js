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


    console.log(Object.getOwnPropertyNames(ctx));

    console.log(ctx.resource_body().text);
    //text += ctx.enterResource_body().text;
    this.Res.write(ctx.resource_body().text);
};


// Enter a parse tree produced by SRParser#resource_body.
HtmlSRListener.prototype.enterResource_body = function(ctx) {
  var text = ''
  for (var index = 0; index <  ctx.children.length; index++ ) {
    let auxtext = ctx.children[index].getText()
    if(index==0) //resource
      auxtext = "<span class='fontBlue'>function </span>"
    else if(index==1) //ID
      auxtext += "main "
    text += auxtext
  }
  console.log("enterResourceTranslation: " + text);
  ctx.text = text;
};

// Enter a parse tree produced by SRParser#constant_declaration.
SRListener.prototype.enterConstant_declaration = function(ctx) {
  var text = ''
  for (var index = 0; index <  ctx.children.length; index++ ) {
    let auxtext = ctx.children[index].getText()



    if(auxtext == ":=")
      auxtext = "=xxxxxxxxxxxxxxxxxxxxxxx"
    else auxtext = "  notnotnot";
    text += auxtext
  }
  console.log("CONSTANT_DECLARATION translation: " + text);

  ctx.text += text;
};

// Exit a parse tree produced by SRParser#constant_declaration.
SRListener.prototype.exitConstant_declaration = function(ctx) {
console.log("2222222222");
console.log(ctx.text);
console.log("2222222222");
};


// Exit a parse tree produced by SRParser#resource_body.
SRListener.prototype.exitResource_body = function(ctx) {

  console.log("exiting");
  var text = '';
    for (var index = 0; index <  ctx.children.length; index++ ) {
      console.log(ctx.children[index].text);
      console.log(ctx.children[index].getText());
        if(ctx.children[index].text != null)
            text += ctx.children[index].text;
        else
            text += ctx.children[index].getText();
    }
    ctx.text += text;
};

exports.HtmlSRListener = HtmlSRListener;
