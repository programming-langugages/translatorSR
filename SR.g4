grammar SR;

/*
 * Lexer Rules
 */

GLOBAL: 'global';
DOUBLE:  'double';
BODY:  ' body';
CONST: 'const';
CREATE: 'create';
DO: 'do';
OD: 'od';
FS:  'fs';
AF: 'af';
SKIP_RESERVED : 'skip';
EXIT : 'exit';
MAXLENGTH: 'maxlength';
LENGTH: 'length';
RECEIVE: 'receive';
REC: 'rec';
DESTROY: 'destroy';
EXTERNAL: 'external';
EXTEND: 'extend';
GETARG: 'getarg';
GET: 'get';
IMPORT: 'import';
MOD: 'mod';
NEW: 'new';
REAL: 'real';
PROCEDURE: 'procedure';
PROCESS: 'process';
FINAL: 'final';
REPLY: 'reply';
NEXT: 'next';
PROC: 'proc';
READ: 'read';
SEND: 'send';
SPEC: 'spec';
INITIAL : 'initial';
CHAR: 'char';
STRING: 'string';
BOOL: 'bool';
RESOURCE: 'resource';
RETURNS: 'returns';
SCANF: 'scanf';
SEM: 'sem';
SPRINTF: 'sprintf';
INT: 'int';
STOP: 'stop';
HIGH: 'high';
WRITES: 'writes';
WRITE: 'write';
PRED: 'pred';
CAP: 'cap';
LOW: 'low';
REF: 'ref';
END: 'end';
ABS: 'abs';
RES: 'res';
VAL: 'val';
VAR: 'var';
NI: 'ni';
CO:  'co';
TO: 'to';
OPTYPE: 'optype';
OP: 'op';
OR: 'or ';
FA: 'fa';
FI: 'fi' ;
IF: 'if';
LB: 'lb';
UB: 'ub';
PUT: 'put';
TYPE: 'type';
SUCC : 'succ';
ID: [a-zA-Z]+;
TK_SUMA_ASIG: '+:=';
TK_MENOS_ASIG: '-:=';
TK_ASIG: ':=';
TK_COMA: ',';
TK_COR_DER: ']';
TK_COR_IZQ: '[';
TK_CORCHE_DER: '}';
TK_CORCHE_IZQ: '{';
TK_DISTINTO: '!=';
TK_DOS_PUNTOS: ':';
TK_EJECUTA: '->';
TK_IGUAL: '=';
TK_MENORQUE: '<';
TK_MAYORQUE: '>';
TK_EXPR_SINC: '?';
TK_MULTI: '*';
TK_PAR_IZQ: '(';
TK_PAR_DER: ')';
TK_PUNTO_Y_COMA: ';';
TK_NUM:  [0-9]+;
TK_MENOS_MENOS: '--';
TK_MENOS: '-';
TK_SEPARA: '[]';
TK_SUMA_SUMA: '++';
TK_SUMA: '+';
TK_DIV: '/';
TK_PUNTO: '.';
TK_SWAP: ':=:';
TK_TRES_PUNTOS: '...';
TK_PORCENTAJE: '%';
TK_AMPERSAND: '&';
EPSILON: ' ';
ANY : . ;
NEWLINE: [\n]+;
WS: [\t\r]+ -> skip;


/*
 * Parser Rules
 */

sr_program :  resource_body resources_body;
resources_body : resource_body resources_body | EOF;
resource_body : RESOURCE ID constant_declaration END;

constant_declaration : CONST ID TK_ASIG TK_NUM;
