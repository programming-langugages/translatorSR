grammar SR;

/*
 * Lexer Rules
 */

GLOBAL: 'global';
DOUBLE:  'double';
BODY:  ' body';
CONST: 'const ';
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
ANY : . ;

WS: [\t\r\n]+ -> skip;


/*
 * Parser Rules
 */

sr_program :  resource_body resources_body | resources_body resource_body;
resources_body : resource_body resources_body | ;
resource_body : RESOURCE ID resource_body1 end_optional;


end_optional : END | ;
resource_body1 :  block  | TK_PAR_IZQ TK_PAR_DER resource_body11;
resource_body11 :  block | TK_SEPARA block;




block : interface_part interfaces_part | conditional_statement;



interfaces_part : interface_part interfaces_part | ;


interface_part :  constant_declaration | import_specification | conditional_statement | global_specification | operation_type_declaration
  | extend_declaration | operation_declaration  | type_declaration | procedure_specification | resource_specification
  |  variable_declaration |  sequential_statement | primitive_function | body_declaration | final_declaration | initial_declaration;




body_declaration : BODY ID body_declaration1;
body_declaration1 :  TK_PAR_IZQ body_declaration11 | ;
body_declaration11 : type_specification_op TK_PAR_DER block END | TK_PAR_DER block END;


body_body : variable_declaration | constant_declaration;






global_specification : GLOBAL ID global_body global_bodies END;
global_bodies : constant_declaration global_bodies | type_declaration global_bodies |  ;
global_body : constant_declaration  | type_declaration;
resource_specification : SPEC ID optional_import resource_specification_body RESOURCE ID TK_PAR_IZQ parameter_call_function TK_PAR_DER separate_optional;
resource_specification_body : constant_declaration | operation_declaration | type_declaration | ;
optional_import : import_specification | ;
separate_optional : TK_SEPARA | ;



constant_declaration : CONST ID TK_ASIG arithmethic_expression arithmethic_expressions;
import_specification : IMPORT ids_group;
operation_declaration :  OP ID operation_declaration1;
operation_declaration1 : TK_PAR_IZQ type_specification_op TK_PAR_DER operation_end | type_specification_op_2  operation_end;


operation_type_declaration :  OPTYPE ID TK_IGUAL TK_PAR_IZQ type_specification_op_type TK_PAR_DER RETURNS ID TK_DOS_PUNTOS var_type;


type_declaration : TYPE ID TK_IGUAL REC TK_PAR_IZQ type_specification TK_PAR_DER;
extend_declaration : EXTEND ids_group;
conditional_statement : IF boolean_expression TK_EJECUTA block end_if
  | DO boolean_expression TK_EJECUTA block end_do
  | FS quantifier TK_EJECUTA block end_fs
  | FA cycles TK_EJECUTA block end_fa;
procedure_specification : procedure_reserved_word ID procedure_specification1 returns_rule block END;
procedure_specification1 : ids_group_0 | TK_PAR_IZQ ids_group_0 TK_PAR_DER;
final_declaration : FINAL block END;
initial_declaration : INITIAL block END;



quantifier : ;


cycles :  cycle_body cycle;
cycle : TK_COMA cycles | ;
cycle_body : variable_instance2 TK_ASIG term TO term;


terms_to_terms : term TO term terms_to_term;
terms_to_term : TK_COMA terms_to_terms | ;




returns_rule : RETURNS ID | ;
procedure_reserved_word : PROC | PROCESS;




operation_end : TK_COR_IZQ operation_type_declaration TK_COR_DER | RETURNS ID TK_DOS_PUNTOS operation_end1 |  ;
operation_end1 :  var_type | ID;
type_specification : ids_group TK_DOS_PUNTOS var_type type_specification1;
type_specification1 :  TK_PUNTO_Y_COMA type_specification |TK_COMA type_specification |  ;






type_specification_op_type : ids_group_dos_puntos_op_type;




type_specification_op : ID type_specification_op1 | ;
type_specification_op1 :  TK_DOS_PUNTOS ids_group_dos_puntos type_specification_op | TK_COMA type_specification_op |  ;






type_specification_op_2 : ids_group_dos_puntos type_specification_op_21 | ;
type_specification_op_21 :  TK_COMA type_specification_op_2 |  TK_DOS_PUNTOS type_specification_op_2 | ;


end_if : TK_SEPARA FI | FI;
end_do : TK_SEPARA OD | OD;
end_fa : TK_SEPARA AF | AF;
end_fs : TK_SEPARA FS | FS;












parameter : TK_PAR_IZQ parameter_specification TK_PAR_DER;
parameter_specification : parameter_id TK_DOS_PUNTOS var_type | parameter_id TK_DOS_PUNTOS var_type TK_PUNTO_Y_COMA parameter_specification  |  ;
parameter_id : ID | array  | RES array;




array : TK_COR_IZQ ids_group TK_COR_DER | ;

expression : expression boolean_expression | expression arithmethic_expression | ;






fnp_parameter_type_1 : primitive_function fnp_parameter_type_11 | TK_CADENA fnp_parameter_type_11 | ID fnp_parameter_type_111 ;
fnp_parameter_type_111 : TK_PUNTO ID fnp_parameter_type_1111 | call_function_in_function fnp_parameter_type_11 | TK_COMA fnp_parameter_type_1 | ;
fnp_parameter_type_1111 : call_function_in_function fnp_parameter_type_11 | fnp_parameter_type_11;
fnp_parameter_type_11 :   TK_COMA fnp_parameter_type_1 | ;




primitive_function : function_one_parameter | function_two_parameter | function_n_parameters;
function_one_parameter : f1p_reserved_word_type1 TK_PAR_IZQ f1p_parameter TK_PAR_DER semicolon_or_not
  | f1p_reserved_word_type2 TK_PAR_IZQ var_type TK_PAR_DER semicolon_or_not
  | f1p_reserved_word_type3 TK_PAR_IZQ ID TK_PAR_DER semicolon_or_not;
function_two_parameter : f2p_reserved_word TK_PAR_IZQ ID f2p_parameter TK_PAR_DER semicolon_or_not;
function_n_parameters : fnp_reserved_word_type_1 TK_PAR_IZQ fnp_parameter_type_1 TK_PAR_DER semicolon_or_not
  | fnp_reserved_word_type_2 TK_PAR_IZQ fnp_parameter_type_2 TK_PAR_DER semicolon_or_not;
f1p_reserved_word_type1 : ABS | PRED | SUCC ;
f1p_reserved_word_type2 : LOW | HIGH | NEW;
f1p_reserved_word_type3 : LENGTH | MAXLENGTH ;
f1p_parameter : variable_instance | TK_NUM;
f2p_reserved_word : UB | LB;
fnp_reserved_word_type_1 : WRITE;
fnp_reserved_word_type_2 : PUT;
f2p_parameter : TK_COMA TK_NUM | ;






fnp_parameter_type_2 : strings | parameter_call_function;


strings : TK_CADENA string;
string : TK_COMA strings | ;




expression_variable :  TK_ASIG arithmethic_expression | ;


statements : statement statements;
statement : sequential_statement;
sequential_statement : SKIP_RESERVED | EXIT | NEXT
  | variable_declaration
  | variable_instance;





boolean_expression : TK_PAR_IZQ term op_binario_boolean term boolean_expression1
  | term op_binario_boolean term boolean_expression11;
boolean_expression1 : op_binario_boolean term TK_PAR_DER | TK_PAR_DER;
boolean_expression11 : op_binario_boolean term | ;


variable_instance : ID variable_instance1;
variable_instance1 : TK_PUNTO ID | TK_MENOS_MENOS | TK_SUMA_SUMA
  | TK_COMA ids_group | op_binario variable_instance11 |  array_declarations TK_ASIG variable_instance11
  | TK_ASIG variable_instance11 | TK_SWAP variable_instance11 |  call_function | ;
variable_instance11 : arithmethic_expression arithmethic_expressions semicolon_or_not | call_function | CREATE ID call_function;


array_declarations : array_declarations array |  ;

variable_declaration : VAR ID variable_declaration1;
variable_declaration1 : TK_DOS_PUNTOS variable_declaration111 | ids_group1 variable_declaration11;
variable_declaration111 : var_type ids_type_group1 | parameter_call_function;
variable_declaration11 : TK_DOS_PUNTOS var_type |  ;




arithmethic_expression :  TK_PAR_IZQ term arithmethic_expressions TK_PAR_DER semicolon_or_not | term arithmethic_expressions;


arithmethic_expressions :  op_binario arithmethic_expression | ;
term : parameter_call_function | TK_NUM;




variable_instance2 : ID variable_instance21;
variable_instance21 : TK_PUNTO ID variable_instance2 | ;


op_binario : TK_SUMA | TK_DIV | TK_MENOS | TK_MULTI | TK_SUMA_ASIG | TK_MENOS_ASIG;
op_binario_boolean : TK_DISTINTO | TK_MENORQUE | TK_MAYORQUE  | TK_IGUAL | TK_MENORQUE TK_IGUAL | TK_MAYORQUE TK_IGUAL;


call_function :  TK_PAR_IZQ arithmethic_expression arithmethic_expressions TK_PAR_DER semicolon_or_not;
call_function_in_function : TK_PAR_IZQ parameter_call_function TK_PAR_DER;




parameter_call_function : ID parameter_call_function11 | ;
parameter_call_function11 : parameter_call_function1 | TK_PUNTO ID parameter_call_function1 | ;
parameter_call_function1 : TK_COMA parameter_call_function | ;






semicolon_or_not : TK_PUNTO_Y_COMA | ;




ids_type_group : ID TK_DOS_PUNTOS var_type ids_type_group1;
ids_type_group1 : TK_COMA ids_type_group | ;


ids_group : ID ids_group1;
ids_group1 : TK_COMA ids_group | ;


ids_group_dos_puntos : ID ids_group_dos_puntos1 | var_type ids_group_dos_puntos11  | ;
ids_group_dos_puntos11 : ids_group_dos_puntos1 | TK_PAR_IZQ ids_group_dos_puntos TK_PAR_DER ids_group_dos_puntos1 | ;
ids_group_dos_puntos1 :  TK_COMA ids_group_dos_puntos | TK_DOS_PUNTOS ids_group_dos_puntos |  TK_PUNTO_Y_COMA ids_group_dos_puntos  |  ;






ids_group_dos_puntos_op_type : ID ids_group_dos_puntos_op_type1 | var_type ids_group_dos_puntos_op_type1 | ;
ids_group_dos_puntos_op_type1 : TK_DOS_PUNTOS ids_group_dos_puntos_op_type |  TK_PUNTO_Y_COMA ids_group_dos_puntos_op_type  |  TK_PUNTO_Y_COMA ids_group_dos_puntos_op_type | ;






var_type : INT | CAP | DOUBLE | CHAR | REAL;


ids_group_0 : ID ids_group_01 | ;
ids_group_01 : TK_COMA ids_group_0 | ;
