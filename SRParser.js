// Generated from SR.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SRListener = require('./SRListener').SRListener;
var grammarFileName = "SR.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003l\u001e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0012\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002",
    "\u0006\u0002\u0004\u0006\b\u0002\u0002\u0002\u001a\u0002\n\u0003\u0002",
    "\u0002\u0002\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u0013\u0003\u0002",
    "\u0002\u0002\b\u0018\u0003\u0002\u0002\u0002\n\u000b\u0005\u0006\u0004",
    "\u0002\u000b\f\u0005\u0004\u0003\u0002\f\u0003\u0003\u0002\u0002\u0002",
    "\r\u000e\u0005\u0006\u0004\u0002\u000e\u000f\u0005\u0004\u0003\u0002",
    "\u000f\u0012\u0003\u0002\u0002\u0002\u0010\u0012\u0007\u0002\u0002\u0003",
    "\u0011\r\u0003\u0002\u0002\u0002\u0011\u0010\u0003\u0002\u0002\u0002",
    "\u0012\u0005\u0003\u0002\u0002\u0002\u0013\u0014\u0007(\u0002\u0002",
    "\u0014\u0015\u0007I\u0002\u0002\u0015\u0016\u0005\b\u0005\u0002\u0016",
    "\u0017\u00076\u0002\u0002\u0017\u0007\u0003\u0002\u0002\u0002\u0018",
    "\u0019\u0007\u0006\u0002\u0002\u0019\u001a\u0007I\u0002\u0002\u001a",
    "\u001b\u0007L\u0002\u0002\u001b\u001c\u0007]\u0002\u0002\u001c\t\u0003",
    "\u0002\u0002\u0002\u0003\u0011"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'global'", "'double'", "' body'", "'const'", 
                     "'create'", "'do'", "'od'", "'fs'", "'af'", "'skip'", 
                     "'exit'", "'maxlength'", "'length'", "'receive'", "'rec'", 
                     "'destroy'", "'external'", "'extend'", "'getarg'", 
                     "'get'", "'import'", "'mod'", "'new'", "'real'", "'procedure'", 
                     "'process'", "'final'", "'reply'", "'next'", "'proc'", 
                     "'read'", "'send'", "'spec'", "'initial'", "'char'", 
                     "'string'", "'bool'", "'resource'", "'returns'", "'scanf'", 
                     "'sem'", "'sprintf'", "'int'", "'stop'", "'high'", 
                     "'writes'", "'write'", "'pred'", "'cap'", "'low'", 
                     "'ref'", "'end'", "'abs'", "'res'", "'val'", "'var'", 
                     "'ni'", "'co'", "'to'", "'optype'", "'op'", "'or '", 
                     "'fa'", "'fi'", "'if'", "'lb'", "'ub'", "'put'", "'type'", 
                     "'succ'", null, "'+:='", "'-:='", "':='", "','", "']'", 
                     "'['", "'}'", "'{'", "'!='", "':'", "'->'", "'='", 
                     "'<'", "'>'", "'?'", "'*'", "'('", "')'", "';'", null, 
                     "'--'", "'-'", "'[]'", "'++'", "'+'", "'/'", "'.'", 
                     "':=:'", "'...'", "'%'", "'&'", "' '" ];

var symbolicNames = [ null, "GLOBAL", "DOUBLE", "BODY", "CONST", "CREATE", 
                      "DO", "OD", "FS", "AF", "SKIP_RESERVED", "EXIT", "MAXLENGTH", 
                      "LENGTH", "RECEIVE", "REC", "DESTROY", "EXTERNAL", 
                      "EXTEND", "GETARG", "GET", "IMPORT", "MOD", "NEW", 
                      "REAL", "PROCEDURE", "PROCESS", "FINAL", "REPLY", 
                      "NEXT", "PROC", "READ", "SEND", "SPEC", "INITIAL", 
                      "CHAR", "STRING", "BOOL", "RESOURCE", "RETURNS", "SCANF", 
                      "SEM", "SPRINTF", "INT", "STOP", "HIGH", "WRITES", 
                      "WRITE", "PRED", "CAP", "LOW", "REF", "END", "ABS", 
                      "RES", "VAL", "VAR", "NI", "CO", "TO", "OPTYPE", "OP", 
                      "OR", "FA", "FI", "IF", "LB", "UB", "PUT", "TYPE", 
                      "SUCC", "ID", "TK_SUMA_ASIG", "TK_MENOS_ASIG", "TK_ASIG", 
                      "TK_COMA", "TK_COR_DER", "TK_COR_IZQ", "TK_CORCHE_DER", 
                      "TK_CORCHE_IZQ", "TK_DISTINTO", "TK_DOS_PUNTOS", "TK_EJECUTA", 
                      "TK_IGUAL", "TK_MENORQUE", "TK_MAYORQUE", "TK_EXPR_SINC", 
                      "TK_MULTI", "TK_PAR_IZQ", "TK_PAR_DER", "TK_PUNTO_Y_COMA", 
                      "TK_NUM", "TK_MENOS_MENOS", "TK_MENOS", "TK_SEPARA", 
                      "TK_SUMA_SUMA", "TK_SUMA", "TK_DIV", "TK_PUNTO", "TK_SWAP", 
                      "TK_TRES_PUNTOS", "TK_PORCENTAJE", "TK_AMPERSAND", 
                      "EPSILON", "ANY", "NEWLINE", "WS" ];

var ruleNames =  [ "sr_program", "resources_body", "resource_body", "constant_declaration" ];

function SRParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SRParser.prototype = Object.create(antlr4.Parser.prototype);
SRParser.prototype.constructor = SRParser;

Object.defineProperty(SRParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SRParser.EOF = antlr4.Token.EOF;
SRParser.GLOBAL = 1;
SRParser.DOUBLE = 2;
SRParser.BODY = 3;
SRParser.CONST = 4;
SRParser.CREATE = 5;
SRParser.DO = 6;
SRParser.OD = 7;
SRParser.FS = 8;
SRParser.AF = 9;
SRParser.SKIP_RESERVED = 10;
SRParser.EXIT = 11;
SRParser.MAXLENGTH = 12;
SRParser.LENGTH = 13;
SRParser.RECEIVE = 14;
SRParser.REC = 15;
SRParser.DESTROY = 16;
SRParser.EXTERNAL = 17;
SRParser.EXTEND = 18;
SRParser.GETARG = 19;
SRParser.GET = 20;
SRParser.IMPORT = 21;
SRParser.MOD = 22;
SRParser.NEW = 23;
SRParser.REAL = 24;
SRParser.PROCEDURE = 25;
SRParser.PROCESS = 26;
SRParser.FINAL = 27;
SRParser.REPLY = 28;
SRParser.NEXT = 29;
SRParser.PROC = 30;
SRParser.READ = 31;
SRParser.SEND = 32;
SRParser.SPEC = 33;
SRParser.INITIAL = 34;
SRParser.CHAR = 35;
SRParser.STRING = 36;
SRParser.BOOL = 37;
SRParser.RESOURCE = 38;
SRParser.RETURNS = 39;
SRParser.SCANF = 40;
SRParser.SEM = 41;
SRParser.SPRINTF = 42;
SRParser.INT = 43;
SRParser.STOP = 44;
SRParser.HIGH = 45;
SRParser.WRITES = 46;
SRParser.WRITE = 47;
SRParser.PRED = 48;
SRParser.CAP = 49;
SRParser.LOW = 50;
SRParser.REF = 51;
SRParser.END = 52;
SRParser.ABS = 53;
SRParser.RES = 54;
SRParser.VAL = 55;
SRParser.VAR = 56;
SRParser.NI = 57;
SRParser.CO = 58;
SRParser.TO = 59;
SRParser.OPTYPE = 60;
SRParser.OP = 61;
SRParser.OR = 62;
SRParser.FA = 63;
SRParser.FI = 64;
SRParser.IF = 65;
SRParser.LB = 66;
SRParser.UB = 67;
SRParser.PUT = 68;
SRParser.TYPE = 69;
SRParser.SUCC = 70;
SRParser.ID = 71;
SRParser.TK_SUMA_ASIG = 72;
SRParser.TK_MENOS_ASIG = 73;
SRParser.TK_ASIG = 74;
SRParser.TK_COMA = 75;
SRParser.TK_COR_DER = 76;
SRParser.TK_COR_IZQ = 77;
SRParser.TK_CORCHE_DER = 78;
SRParser.TK_CORCHE_IZQ = 79;
SRParser.TK_DISTINTO = 80;
SRParser.TK_DOS_PUNTOS = 81;
SRParser.TK_EJECUTA = 82;
SRParser.TK_IGUAL = 83;
SRParser.TK_MENORQUE = 84;
SRParser.TK_MAYORQUE = 85;
SRParser.TK_EXPR_SINC = 86;
SRParser.TK_MULTI = 87;
SRParser.TK_PAR_IZQ = 88;
SRParser.TK_PAR_DER = 89;
SRParser.TK_PUNTO_Y_COMA = 90;
SRParser.TK_NUM = 91;
SRParser.TK_MENOS_MENOS = 92;
SRParser.TK_MENOS = 93;
SRParser.TK_SEPARA = 94;
SRParser.TK_SUMA_SUMA = 95;
SRParser.TK_SUMA = 96;
SRParser.TK_DIV = 97;
SRParser.TK_PUNTO = 98;
SRParser.TK_SWAP = 99;
SRParser.TK_TRES_PUNTOS = 100;
SRParser.TK_PORCENTAJE = 101;
SRParser.TK_AMPERSAND = 102;
SRParser.EPSILON = 103;
SRParser.ANY = 104;
SRParser.NEWLINE = 105;
SRParser.WS = 106;

SRParser.RULE_sr_program = 0;
SRParser.RULE_resources_body = 1;
SRParser.RULE_resource_body = 2;
SRParser.RULE_constant_declaration = 3;


function Sr_programContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SRParser.RULE_sr_program;
    return this;
}

Sr_programContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sr_programContext.prototype.constructor = Sr_programContext;

Sr_programContext.prototype.resource_body = function() {
    return this.getTypedRuleContext(Resource_bodyContext,0);
};

Sr_programContext.prototype.resources_body = function() {
    return this.getTypedRuleContext(Resources_bodyContext,0);
};

Sr_programContext.prototype.enterRule = function(listener) {
    if(listener instanceof SRListener ) {
        listener.enterSr_program(this);
	}
};

Sr_programContext.prototype.exitRule = function(listener) {
    if(listener instanceof SRListener ) {
        listener.exitSr_program(this);
	}
};




SRParser.Sr_programContext = Sr_programContext;

SRParser.prototype.sr_program = function() {

    var localctx = new Sr_programContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SRParser.RULE_sr_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.resource_body();
        this.state = 9;
        this.resources_body();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Resources_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SRParser.RULE_resources_body;
    return this;
}

Resources_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Resources_bodyContext.prototype.constructor = Resources_bodyContext;

Resources_bodyContext.prototype.resource_body = function() {
    return this.getTypedRuleContext(Resource_bodyContext,0);
};

Resources_bodyContext.prototype.resources_body = function() {
    return this.getTypedRuleContext(Resources_bodyContext,0);
};

Resources_bodyContext.prototype.EOF = function() {
    return this.getToken(SRParser.EOF, 0);
};

Resources_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof SRListener ) {
        listener.enterResources_body(this);
	}
};

Resources_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof SRListener ) {
        listener.exitResources_body(this);
	}
};




SRParser.Resources_bodyContext = Resources_bodyContext;

SRParser.prototype.resources_body = function() {

    var localctx = new Resources_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SRParser.RULE_resources_body);
    try {
        this.state = 15;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SRParser.RESOURCE:
            this.enterOuterAlt(localctx, 1);
            this.state = 11;
            this.resource_body();
            this.state = 12;
            this.resources_body();
            break;
        case SRParser.EOF:
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
            this.match(SRParser.EOF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Resource_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SRParser.RULE_resource_body;
    return this;
}

Resource_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Resource_bodyContext.prototype.constructor = Resource_bodyContext;

Resource_bodyContext.prototype.RESOURCE = function() {
    return this.getToken(SRParser.RESOURCE, 0);
};

Resource_bodyContext.prototype.ID = function() {
    return this.getToken(SRParser.ID, 0);
};

Resource_bodyContext.prototype.constant_declaration = function() {
    return this.getTypedRuleContext(Constant_declarationContext,0);
};

Resource_bodyContext.prototype.END = function() {
    return this.getToken(SRParser.END, 0);
};

Resource_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof SRListener ) {
        listener.enterResource_body(this);
	}
};

Resource_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof SRListener ) {
        listener.exitResource_body(this);
	}
};




SRParser.Resource_bodyContext = Resource_bodyContext;

SRParser.prototype.resource_body = function() {

    var localctx = new Resource_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SRParser.RULE_resource_body);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(SRParser.RESOURCE);
        this.state = 18;
        this.match(SRParser.ID);
        this.state = 19;
        this.constant_declaration();
        this.state = 20;
        this.match(SRParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Constant_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SRParser.RULE_constant_declaration;
    return this;
}

Constant_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Constant_declarationContext.prototype.constructor = Constant_declarationContext;

Constant_declarationContext.prototype.CONST = function() {
    return this.getToken(SRParser.CONST, 0);
};

Constant_declarationContext.prototype.ID = function() {
    return this.getToken(SRParser.ID, 0);
};

Constant_declarationContext.prototype.TK_ASIG = function() {
    return this.getToken(SRParser.TK_ASIG, 0);
};

Constant_declarationContext.prototype.TK_NUM = function() {
    return this.getToken(SRParser.TK_NUM, 0);
};

Constant_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof SRListener ) {
        listener.enterConstant_declaration(this);
	}
};

Constant_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof SRListener ) {
        listener.exitConstant_declaration(this);
	}
};




SRParser.Constant_declarationContext = Constant_declarationContext;

SRParser.prototype.constant_declaration = function() {

    var localctx = new Constant_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SRParser.RULE_constant_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.match(SRParser.CONST);
        this.state = 23;
        this.match(SRParser.ID);
        this.state = 24;
        this.match(SRParser.TK_ASIG);
        this.state = 25;
        this.match(SRParser.TK_NUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SRParser = SRParser;
