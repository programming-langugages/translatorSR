// Generated from SR.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SRParser.
function SRListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SRListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SRListener.prototype.constructor = SRListener;

// Enter a parse tree produced by SRParser#sr_program.
SRListener.prototype.enterSr_program = function(ctx) {
};

// Exit a parse tree produced by SRParser#sr_program.
SRListener.prototype.exitSr_program = function(ctx) {
};


// Enter a parse tree produced by SRParser#resources_body.
SRListener.prototype.enterResources_body = function(ctx) {
};

// Exit a parse tree produced by SRParser#resources_body.
SRListener.prototype.exitResources_body = function(ctx) {
};


// Enter a parse tree produced by SRParser#resource_body.
SRListener.prototype.enterResource_body = function(ctx) {
};

// Exit a parse tree produced by SRParser#resource_body.
SRListener.prototype.exitResource_body = function(ctx) {
};


// Enter a parse tree produced by SRParser#constant_declaration.
SRListener.prototype.enterConstant_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#constant_declaration.
SRListener.prototype.exitConstant_declaration = function(ctx) {
};



exports.SRListener = SRListener;