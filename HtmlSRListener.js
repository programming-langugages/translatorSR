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


function getTextOfChildrenModified(ctx, fromRule, untilRule){




  var text = '';

  if(!fromRule) fromRule = 0;
  if(!untilRule) if(ctx.children == null) untilRule = 0; else untilRule = ctx.children.length;
  for (var index = fromRule; index <  untilRule ; index++ ) {
    //console.log("Index " + index + " text: " +  ctx.children[index].getText() + " translated " + ctx.children[index].text);
      if(ctx.children[index].text != null)
          text += ctx.children[index].text;
      else
          text += ctx.children[index].getText();
  }
  return text



};

function getTranslationOrText(ctx, index){
    try {
  var result = "";
  //if(!ctx.chilren || ctx.children == null) {console.log("fallo en " + index); return result;}
  if(ctx.children[index].text != null)
      result += ctx.children[index].text;
  else
      result += ctx.children[index].getText();
  return result;
  }catch(error) {
    console.error(error);
    return "";
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
};

HtmlSRListener.prototype.constructor = HtmlSRListener;
// override default listener behavior
HtmlSRListener.prototype.enterSr_program = function(ctx) {
    this.Res.write("<strong> Code translated </strong> <br/>");


};

// Exit a parse tree produced by SRParser#sr_program.
HtmlSRListener.prototype.exitSr_program = function(ctx) {

    var text = getTextOfChildrenModified(ctx);
    //console.log(Object.getOwnPropertyNames(ctx));

    console.log("Final text" + text);

    //text += ctx.enterResource_body().text;
    this.Res.write(text);
};



// Enter a parse tree produced by SRParser#resources_body.
HtmlSRListener.prototype.enterResources_body = function(ctx) {
};

// Exit a parse tree produced by SRParser#resources_body.
HtmlSRListener.prototype.exitResources_body = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#resource_body.
HtmlSRListener.prototype.enterResource_body = function(ctx) {

};


// Exit a parse tree produced by SRParser#resource_body.
SRListener.prototype.exitResource_body = function(ctx) {

  var text = ''
  for (var index = 0; index <  ctx.children.length; index++ ) {
    let auxtext = ctx.children[index].getText()
    if(index == 0) //resource
      auxtext = "<span class='fontBlue'>function </span>";
    else if(index==1) //ID
      auxtext = "main_" + auxtext;
    else auxtext = getTranslationOrText(ctx, index);
    text += auxtext
  }
  console.log("enterResourceTranslation: " + text);
  ctx.text = text + "\n";


  //ctx.text = getTextOfChildrenModified(ctx);
  console.log("exitResource_body");
  console.log(ctx.text);
  console.log("exitResource_body\n");
};


// Enter a parse tree produced by SRParser#end_optional.
HtmlSRListener.prototype.enterEnd_optional = function(ctx) {
};

// Exit a parse tree produced by SRParser#end_optional.
HtmlSRListener.prototype.exitEnd_optional = function(ctx) {

  var translation = "}";
  ctx.text = translation;

};


// Enter a parse tree produced by SRParser#resource_body1.
HtmlSRListener.prototype.enterResource_body1 = function(ctx) {



};

// Exit a parse tree produced by SRParser#resource_body1.
HtmlSRListener.prototype.exitResource_body1 = function(ctx) {

  var translation  = '';
  var numberOfRules = ctx.children.length;

  if(numberOfRules == 3){
    var translation = "(" +
                      ")" + "\n\t{" +
                      getTranslationOrText(ctx, 2) ;
    console.log("Translation of exitResource_body1 " + translation);
    ctx.text = translation;
  } else ctx.text = getTextOfChildrenModified(ctx);
  console.log("exitResource_body1");
  console.log(ctx.text);
  console.log("exitResource_body1\n");
};


// Enter a parse tree produced by SRParser#resource_body11.
HtmlSRListener.prototype.enterResource_body11 = function(ctx) {

};

// Exit a parse tree produced by SRParser#resource_body11.
HtmlSRListener.prototype.exitResource_body11 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
  console.log("exitResource_body11");
  console.log(ctx.text);
  console.log("exitResource_body11\n");
};


// Enter a parse tree produced by SRParser#block.
HtmlSRListener.prototype.enterBlock = function(ctx) {

};

// Exit a parse tree produced by SRParser#block.
HtmlSRListener.prototype.exitBlock = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
  console.log("exitBlock");
  console.log(ctx.text);
  console.log("exitBlock\n");
};


// Enter a parse tree produced by SRParser#interfaces_part.
HtmlSRListener.prototype.enterInterfaces_part = function(ctx) {
};

// Exit a parse tree produced by SRParser#interfaces_part.
HtmlSRListener.prototype.exitInterfaces_part = function(ctx) {

  ctx.text = getTextOfChildrenModified(ctx);
  console.log("exitInterfaces_part");
  console.log(ctx.text);
  console.log("exitInterfaces_part\n");
};


// Enter a parse tree produced by SRParser#interface_part.
HtmlSRListener.prototype.enterInterface_part = function(ctx) {

};

// Exit a parse tree produced by SRParser#interface_part.
HtmlSRListener.prototype.exitInterface_part = function(ctx) {

  ctx.text = getTextOfChildrenModified(ctx);
  console.log("exitInterface_part");
  console.log(ctx.text);
  console.log("exitInterface_part\n");
};


// Enter a parse tree produced by SRParser#body_declaration.
HtmlSRListener.prototype.enterBody_declaration = function(ctx) {

};

// Exit a parse tree produced by SRParser#body_declaration.
HtmlSRListener.prototype.exitBody_declaration = function(ctx) {

  console.log("AAAAAAAAAAAAAAAAAAAAAAAAA")
  console.log(getTranslationOrText(ctx, 2));
  console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ")
  var translation = "<span class=\"fontBlue\"> function </span> <span class=\"fontLightBlue\"> body_" +
                    ctx.children[1].getText() + "</span>" +  // ID
                    getTranslationOrText(ctx, 2);
  ctx.text = translation;

  console.log("exitBody_declaration");
  console.log(ctx.text);
  console.log("exitBody_declaration\n");
};


// Enter a parse tree produced by SRParser#body_declaration1.
HtmlSRListener.prototype.enterBody_declaration1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#body_declaration1.
HtmlSRListener.prototype.exitBody_declaration1 = function(ctx) {
  ctx.text = getTranslationOrText(ctx,1);
};


// Enter a parse tree produced by SRParser#body_declaration11.
HtmlSRListener.prototype.enterBody_declaration11 = function(ctx) {
};

// Exit a parse tree produced by SRParser#body_declaration11.
HtmlSRListener.prototype.exitBody_declaration11 = function(ctx) {
  ctx.text = "("+
  getTranslationOrText(ctx,0) + "){" +
  getTranslationOrText(ctx,2) + "}";

};


// Enter a parse tree produced by SRParser#body_body.
HtmlSRListener.prototype.enterBody_body = function(ctx) {

};

// Exit a parse tree produced by SRParser#body_body.
HtmlSRListener.prototype.exitBody_body = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#global_specification.
HtmlSRListener.prototype.enterGlobal_specification = function(ctx) {
};

// Exit a parse tree produced by SRParser#global_specification.
HtmlSRListener.prototype.exitGlobal_specification = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#global_bodies.
HtmlSRListener.prototype.enterGlobal_bodies = function(ctx) {
};

// Exit a parse tree produced by SRParser#global_bodies.
HtmlSRListener.prototype.exitGlobal_bodies = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#global_body.
HtmlSRListener.prototype.enterGlobal_body = function(ctx) {
};

// Exit a parse tree produced by SRParser#global_body.
HtmlSRListener.prototype.exitGlobal_body = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#resource_specification.
HtmlSRListener.prototype.enterResource_specification = function(ctx) {
};

// Exit a parse tree produced by SRParser#resource_specification.
HtmlSRListener.prototype.exitResource_specification = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#resource_specification_body.
HtmlSRListener.prototype.enterResource_specification_body = function(ctx) {
};

// Exit a parse tree produced by SRParser#resource_specification_body.
HtmlSRListener.prototype.exitResource_specification_body = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#optional_import.
HtmlSRListener.prototype.enterOptional_import = function(ctx) {
};

// Exit a parse tree produced by SRParser#optional_import.
HtmlSRListener.prototype.exitOptional_import = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#separate_optional.
HtmlSRListener.prototype.enterSeparate_optional = function(ctx) {
};

// Exit a parse tree produced by SRParser#separate_optional.
HtmlSRListener.prototype.exitSeparate_optional = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#constant_declaration.
SRListener.prototype.enterConstant_declaration = function(ctx) {

};

// Exit a parse tree produced by SRParser#constant_declaration.
SRListener.prototype.exitConstant_declaration = function(ctx) {


  var text = ''
  for (var index = 0; index <  ctx.children.length; index++ ) {
    let auxtext = ctx.children[index].getText()

    if(auxtext == ":=")
      auxtext = "="
    else auxtext = getTranslationOrText(ctx, index);
    text += auxtext
  }


  ctx.text = text;

  console.log("exitConstant_declaration");
  console.log(ctx.text);
  console.log("exitConstant_declaration\n");

};


// Enter a parse tree produced by SRParser#import_specification.
HtmlSRListener.prototype.enterImport_specification = function(ctx) {
};

// Exit a parse tree produced by SRParser#import_specification.
HtmlSRListener.prototype.exitImport_specification = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#operation_declaration.
HtmlSRListener.prototype.enterOperation_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#operation_declaration.
HtmlSRListener.prototype.exitOperation_declaration = function(ctx) {
  var translation = '<span class="fontBlue"> var </span> <span class="fontLightBlue">'
                    + getTranslationOrText(ctx, 1) //ID
                    + '</span> = function' + getTranslationOrText(ctx, 2)  ;
  ctx.text = translation;
};


// Enter a parse tree produced by SRParser#operation_declaration1.
HtmlSRListener.prototype.enterOperation_declaration1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#operation_declaration1.
HtmlSRListener.prototype.exitOperation_declaration1 = function(ctx) {
  var translation = '(' + getTranslationOrText(ctx,1) + ') {}'; //type_specification_op
  ctx.text = translation;
};


// Enter a parse tree produced by SRParser#operation_type_declaration.
HtmlSRListener.prototype.enterOperation_type_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#operation_type_declaration.
HtmlSRListener.prototype.exitOperation_type_declaration = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#type_declaration.
HtmlSRListener.prototype.enterType_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#type_declaration.
HtmlSRListener.prototype.exitType_declaration = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#extend_declaration.
HtmlSRListener.prototype.enterExtend_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#extend_declaration.
HtmlSRListener.prototype.exitExtend_declaration = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#conditional_statement.
HtmlSRListener.prototype.enterConditional_statement = function(ctx) {
};

// Exit a parse tree produced by SRParser#conditional_statement.
HtmlSRListener.prototype.exitConditional_statement = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#procedure_specification.
HtmlSRListener.prototype.enterProcedure_specification = function(ctx) {
};

// Exit a parse tree produced by SRParser#procedure_specification.
HtmlSRListener.prototype.exitProcedure_specification = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#procedure_specification1.
HtmlSRListener.prototype.enterProcedure_specification1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#procedure_specification1.
HtmlSRListener.prototype.exitProcedure_specification1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#final_declaration.
HtmlSRListener.prototype.enterFinal_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#final_declaration.
HtmlSRListener.prototype.exitFinal_declaration = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#initial_declaration.
HtmlSRListener.prototype.enterInitial_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#initial_declaration.
HtmlSRListener.prototype.exitInitial_declaration = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#quantifier.
HtmlSRListener.prototype.enterQuantifier = function(ctx) {
};

// Exit a parse tree produced by SRParser#quantifier.
HtmlSRListener.prototype.exitQuantifier = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#cycles.
HtmlSRListener.prototype.enterCycles = function(ctx) {
};

// Exit a parse tree produced by SRParser#cycles.
HtmlSRListener.prototype.exitCycles = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#cycle.
HtmlSRListener.prototype.enterCycle = function(ctx) {
};

// Exit a parse tree produced by SRParser#cycle.
HtmlSRListener.prototype.exitCycle = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#cycle_body.
HtmlSRListener.prototype.enterCycle_body = function(ctx) {
};

// Exit a parse tree produced by SRParser#cycle_body.
HtmlSRListener.prototype.exitCycle_body = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#terms_to_terms.
HtmlSRListener.prototype.enterTerms_to_terms = function(ctx) {
};

// Exit a parse tree produced by SRParser#terms_to_terms.
HtmlSRListener.prototype.exitTerms_to_terms = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#terms_to_term.
HtmlSRListener.prototype.enterTerms_to_term = function(ctx) {
};

// Exit a parse tree produced by SRParser#terms_to_term.
HtmlSRListener.prototype.exitTerms_to_term = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#returns_rule.
HtmlSRListener.prototype.enterReturns_rule = function(ctx) {
};

// Exit a parse tree produced by SRParser#returns_rule.
HtmlSRListener.prototype.exitReturns_rule = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#procedure_reserved_word.
HtmlSRListener.prototype.enterProcedure_reserved_word = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};

// Exit a parse tree produced by SRParser#procedure_reserved_word.
HtmlSRListener.prototype.exitProcedure_reserved_word = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#operation_end.
HtmlSRListener.prototype.enterOperation_end = function(ctx) {
};

// Exit a parse tree produced by SRParser#operation_end.
HtmlSRListener.prototype.exitOperation_end = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#operation_end1.
HtmlSRListener.prototype.enterOperation_end1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#operation_end1.
HtmlSRListener.prototype.exitOperation_end1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#type_specification.
HtmlSRListener.prototype.enterType_specification = function(ctx) {
};

// Exit a parse tree produced by SRParser#type_specification.
HtmlSRListener.prototype.exitType_specification = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#type_specification1.
HtmlSRListener.prototype.enterType_specification1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#type_specification1.
HtmlSRListener.prototype.exitType_specification1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#type_specification_op_type.
HtmlSRListener.prototype.enterType_specification_op_type = function(ctx) {
};

// Exit a parse tree produced by SRParser#type_specification_op_type.
HtmlSRListener.prototype.exitType_specification_op_type = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#type_specification_op.
HtmlSRListener.prototype.enterType_specification_op = function(ctx) {
};

// Exit a parse tree produced by SRParser#type_specification_op.
HtmlSRListener.prototype.exitType_specification_op = function(ctx) {
  //try {

  if(!getTranslationOrText(ctx, 0) == ""){
    var translation = '<span class="fontLightBlue">  ' +
                      getTranslationOrText(ctx, 0) + ' </span> '  //ID
                    + getTranslationOrText(ctx, 1);

    ctx.text = translation;
  } else ctx.text = getTextOfChildrenModified(ctx);

  // }catch(error){
  //   ctx.text = getTextOfChildrenModified(ctx);
  // }
};


// Enter a parse tree produced by SRParser#type_specification_op1.
HtmlSRListener.prototype.enterType_specification_op1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#type_specification_op1.
HtmlSRListener.prototype.exitType_specification_op1 = function(ctx) {

  if(getTranslationOrText(ctx,1) != ""){
    var translation = ", " + getTranslationOrText(ctx, 1) + getTranslationOrText(ctx, 2);

  }
  else translation = "";
  ctx.text = translation;



};


// Enter a parse tree produced by SRParser#type_specification_op_2.
HtmlSRListener.prototype.enterType_specification_op_2 = function(ctx) {
};

// Exit a parse tree produced by SRParser#type_specification_op_2.
HtmlSRListener.prototype.exitType_specification_op_2 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#type_specification_op_21.
HtmlSRListener.prototype.enterType_specification_op_21 = function(ctx) {
};

// Exit a parse tree produced by SRParser#type_specification_op_21.
HtmlSRListener.prototype.exitType_specification_op_21 = function(ctx) {
  ctx.text = getTranslationOrText(ctx,1);
};


// Enter a parse tree produced by SRParser#end_if.
HtmlSRListener.prototype.enterEnd_if = function(ctx) {
};

// Exit a parse tree produced by SRParser#end_if.
HtmlSRListener.prototype.exitEnd_if = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#end_do.
HtmlSRListener.prototype.enterEnd_do = function(ctx) {
};

// Exit a parse tree produced by SRParser#end_do.
HtmlSRListener.prototype.exitEnd_do = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#end_fa.
HtmlSRListener.prototype.enterEnd_fa = function(ctx) {
};

// Exit a parse tree produced by SRParser#end_fa.
HtmlSRListener.prototype.exitEnd_fa = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#end_fs.
HtmlSRListener.prototype.enterEnd_fs = function(ctx) {
};

// Exit a parse tree produced by SRParser#end_fs.
HtmlSRListener.prototype.exitEnd_fs = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};



// Enter a parse tree produced by SRParser#parameter.
HtmlSRListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by SRParser#parameter.
HtmlSRListener.prototype.exitParameter = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#parameter_specification.
HtmlSRListener.prototype.enterParameter_specification = function(ctx) {
};

// Exit a parse tree produced by SRParser#parameter_specification.
HtmlSRListener.prototype.exitParameter_specification = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#parameter_id.
HtmlSRListener.prototype.enterParameter_id = function(ctx) {
};

// Exit a parse tree produced by SRParser#parameter_id.
HtmlSRListener.prototype.exitParameter_id = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#array.
HtmlSRListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by SRParser#array.
HtmlSRListener.prototype.exitArray = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#expression.
HtmlSRListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by SRParser#expression.
HtmlSRListener.prototype.exitExpression = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#expression1.
HtmlSRListener.prototype.enterExpression1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#expression1.
HtmlSRListener.prototype.exitExpression1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#fnp_parameter_type_1.
HtmlSRListener.prototype.enterFnp_parameter_type_1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#fnp_parameter_type_1.
HtmlSRListener.prototype.exitFnp_parameter_type_1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#fnp_parameter_type_111.
HtmlSRListener.prototype.enterFnp_parameter_type_111 = function(ctx) {
};

// Exit a parse tree produced by SRParser#fnp_parameter_type_111.
HtmlSRListener.prototype.exitFnp_parameter_type_111 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#fnp_parameter_type_1111.
HtmlSRListener.prototype.enterFnp_parameter_type_1111 = function(ctx) {
};

// Exit a parse tree produced by SRParser#fnp_parameter_type_1111.
HtmlSRListener.prototype.exitFnp_parameter_type_1111 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#fnp_parameter_type_11.
HtmlSRListener.prototype.enterFnp_parameter_type_11 = function(ctx) {
};

// Exit a parse tree produced by SRParser#fnp_parameter_type_11.
HtmlSRListener.prototype.exitFnp_parameter_type_11 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#primitive_function.
HtmlSRListener.prototype.enterPrimitive_function = function(ctx) {
};

// Exit a parse tree produced by SRParser#primitive_function.
HtmlSRListener.prototype.exitPrimitive_function = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#function_one_parameter.
HtmlSRListener.prototype.enterFunction_one_parameter = function(ctx) {
};

// Exit a parse tree produced by SRParser#function_one_parameter.
HtmlSRListener.prototype.exitFunction_one_parameter = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#function_two_parameter.
HtmlSRListener.prototype.enterFunction_two_parameter = function(ctx) {
};

// Exit a parse tree produced by SRParser#function_two_parameter.
HtmlSRListener.prototype.exitFunction_two_parameter = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#function_n_parameters.
HtmlSRListener.prototype.enterFunction_n_parameters = function(ctx) {
};

// Exit a parse tree produced by SRParser#function_n_parameters.
HtmlSRListener.prototype.exitFunction_n_parameters = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#f1p_reserved_word_type1.
HtmlSRListener.prototype.enterF1p_reserved_word_type1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#f1p_reserved_word_type1.
HtmlSRListener.prototype.exitF1p_reserved_word_type1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#f1p_reserved_word_type2.
HtmlSRListener.prototype.enterF1p_reserved_word_type2 = function(ctx) {
};

// Exit a parse tree produced by SRParser#f1p_reserved_word_type2.
HtmlSRListener.prototype.exitF1p_reserved_word_type2 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#f1p_reserved_word_type3.
HtmlSRListener.prototype.enterF1p_reserved_word_type3 = function(ctx) {
};

// Exit a parse tree produced by SRParser#f1p_reserved_word_type3.
HtmlSRListener.prototype.exitF1p_reserved_word_type3 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#f1p_parameter.
HtmlSRListener.prototype.enterF1p_parameter = function(ctx) {
};

// Exit a parse tree produced by SRParser#f1p_parameter.
HtmlSRListener.prototype.exitF1p_parameter = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#f2p_reserved_word.
HtmlSRListener.prototype.enterF2p_reserved_word = function(ctx) {
};

// Exit a parse tree produced by SRParser#f2p_reserved_word.
HtmlSRListener.prototype.exitF2p_reserved_word = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#fnp_reserved_word_type_1.
HtmlSRListener.prototype.enterFnp_reserved_word_type_1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#fnp_reserved_word_type_1.
HtmlSRListener.prototype.exitFnp_reserved_word_type_1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#fnp_reserved_word_type_2.
HtmlSRListener.prototype.enterFnp_reserved_word_type_2 = function(ctx) {
};

// Exit a parse tree produced by SRParser#fnp_reserved_word_type_2.
HtmlSRListener.prototype.exitFnp_reserved_word_type_2 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#f2p_parameter.
HtmlSRListener.prototype.enterF2p_parameter = function(ctx) {
};

// Exit a parse tree produced by SRParser#f2p_parameter.
HtmlSRListener.prototype.exitF2p_parameter = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#fnp_parameter_type_2.
HtmlSRListener.prototype.enterFnp_parameter_type_2 = function(ctx) {
};

// Exit a parse tree produced by SRParser#fnp_parameter_type_2.
HtmlSRListener.prototype.exitFnp_parameter_type_2 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#strings.
HtmlSRListener.prototype.enterStrings = function(ctx) {
};

// Exit a parse tree produced by SRParser#strings.
HtmlSRListener.prototype.exitStrings = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#string.
HtmlSRListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by SRParser#string.
HtmlSRListener.prototype.exitString = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#expression_variable.
HtmlSRListener.prototype.enterExpression_variable = function(ctx) {
};

// Exit a parse tree produced by SRParser#expression_variable.
HtmlSRListener.prototype.exitExpression_variable = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#statements.
HtmlSRListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by SRParser#statements.
HtmlSRListener.prototype.exitStatements = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#statement.
HtmlSRListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by SRParser#statement.
HtmlSRListener.prototype.exitStatement = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#sequential_statement.
HtmlSRListener.prototype.enterSequential_statement = function(ctx) {
};

// Exit a parse tree produced by SRParser#sequential_statement.
HtmlSRListener.prototype.exitSequential_statement = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#boolean_expression.
HtmlSRListener.prototype.enterBoolean_expression = function(ctx) {
};

// Exit a parse tree produced by SRParser#boolean_expression.
HtmlSRListener.prototype.exitBoolean_expression = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#boolean_expression1.
HtmlSRListener.prototype.enterBoolean_expression1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#boolean_expression1.
HtmlSRListener.prototype.exitBoolean_expression1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#boolean_expression11.
HtmlSRListener.prototype.enterBoolean_expression11 = function(ctx) {
};

// Exit a parse tree produced by SRParser#boolean_expression11.
HtmlSRListener.prototype.exitBoolean_expression11 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#variable_instance.
HtmlSRListener.prototype.enterVariable_instance = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_instance.
HtmlSRListener.prototype.exitVariable_instance = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#variable_instance1.
HtmlSRListener.prototype.enterVariable_instance1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_instance1.
HtmlSRListener.prototype.exitVariable_instance1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#variable_instance11.
HtmlSRListener.prototype.enterVariable_instance11 = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_instance11.
HtmlSRListener.prototype.exitVariable_instance11 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#array_declarations.
HtmlSRListener.prototype.enterArray_declarations = function(ctx) {
};

// Exit a parse tree produced by SRParser#array_declarations.
HtmlSRListener.prototype.exitArray_declarations = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#array_declaration.
HtmlSRListener.prototype.enterArray_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#array_declaration.
HtmlSRListener.prototype.exitArray_declaration = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#variable_declaration.
HtmlSRListener.prototype.enterVariable_declaration = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_declaration.
HtmlSRListener.prototype.exitVariable_declaration = function(ctx) {
  var translation = "<span class=\"fontBlue\"> var </ span>" + getTranslationOrText(ctx,1)
                    + getTranslationOrText(ctx, 2) + ";";
  ctx.text = translation;
};


// Enter a parse tree produced by SRParser#variable_declaration1.
HtmlSRListener.prototype.enterVariable_declaration1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_declaration1.
HtmlSRListener.prototype.exitVariable_declaration1 = function(ctx) {
  var translation = getTranslationOrText(ctx, 0);
  ctx.text = translation;
};


// Enter a parse tree produced by SRParser#variable_declaration111.
HtmlSRListener.prototype.enterVariable_declaration111 = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_declaration111.
HtmlSRListener.prototype.exitVariable_declaration111 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#variable_declaration11.
HtmlSRListener.prototype.enterVariable_declaration11 = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_declaration11.
HtmlSRListener.prototype.exitVariable_declaration11 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#arithmethic_expression.
HtmlSRListener.prototype.enterArithmethic_expression = function(ctx) {
};

// Exit a parse tree produced by SRParser#arithmethic_expression.
HtmlSRListener.prototype.exitArithmethic_expression = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#arithmethic_expressions.
HtmlSRListener.prototype.enterArithmethic_expressions = function(ctx) {
};

// Exit a parse tree produced by SRParser#arithmethic_expressions.
HtmlSRListener.prototype.exitArithmethic_expressions = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#term.
HtmlSRListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by SRParser#term.
HtmlSRListener.prototype.exitTerm = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#variable_instance2.
HtmlSRListener.prototype.enterVariable_instance2 = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_instance2.
HtmlSRListener.prototype.exitVariable_instance2 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#variable_instance21.
HtmlSRListener.prototype.enterVariable_instance21 = function(ctx) {
};

// Exit a parse tree produced by SRParser#variable_instance21.
HtmlSRListener.prototype.exitVariable_instance21 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#op_binario.
HtmlSRListener.prototype.enterOp_binario = function(ctx) {
};

// Exit a parse tree produced by SRParser#op_binario.
HtmlSRListener.prototype.exitOp_binario = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#op_binario_boolean.
HtmlSRListener.prototype.enterOp_binario_boolean = function(ctx) {
};

// Exit a parse tree produced by SRParser#op_binario_boolean.
HtmlSRListener.prototype.exitOp_binario_boolean = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#call_function.
HtmlSRListener.prototype.enterCall_function = function(ctx) {
};

// Exit a parse tree produced by SRParser#call_function.
HtmlSRListener.prototype.exitCall_function = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#call_function_in_function.
HtmlSRListener.prototype.enterCall_function_in_function = function(ctx) {
};

// Exit a parse tree produced by SRParser#call_function_in_function.
HtmlSRListener.prototype.exitCall_function_in_function = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#parameter_call_function.
HtmlSRListener.prototype.enterParameter_call_function = function(ctx) {
};

// Exit a parse tree produced by SRParser#parameter_call_function.
HtmlSRListener.prototype.exitParameter_call_function = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#parameter_call_function11.
HtmlSRListener.prototype.enterParameter_call_function11 = function(ctx) {
};

// Exit a parse tree produced by SRParser#parameter_call_function11.
HtmlSRListener.prototype.exitParameter_call_function11 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#parameter_call_function1.
HtmlSRListener.prototype.enterParameter_call_function1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#parameter_call_function1.
HtmlSRListener.prototype.exitParameter_call_function1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#semicolon_or_not.
HtmlSRListener.prototype.enterSemicolon_or_not = function(ctx) {
};

// Exit a parse tree produced by SRParser#semicolon_or_not.
HtmlSRListener.prototype.exitSemicolon_or_not = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_type_group.
HtmlSRListener.prototype.enterIds_type_group = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_type_group.
HtmlSRListener.prototype.exitIds_type_group = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_type_group1.
HtmlSRListener.prototype.enterIds_type_group1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_type_group1.
HtmlSRListener.prototype.exitIds_type_group1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_group.
HtmlSRListener.prototype.enterIds_group = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group.
HtmlSRListener.prototype.exitIds_group = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_group1.
HtmlSRListener.prototype.enterIds_group1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group1.
HtmlSRListener.prototype.exitIds_group1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_group_dos_puntos.
HtmlSRListener.prototype.enterIds_group_dos_puntos = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group_dos_puntos.
HtmlSRListener.prototype.exitIds_group_dos_puntos = function(ctx) {

  var translation = getTranslationOrText(ctx,0) + getTranslationOrText(ctx,1);
  ctx.text = translation;


};


// Enter a parse tree produced by SRParser#ids_group_dos_puntos11.
HtmlSRListener.prototype.enterIds_group_dos_puntos11 = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group_dos_puntos11.
HtmlSRListener.prototype.exitIds_group_dos_puntos11 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_group_dos_puntos1.
HtmlSRListener.prototype.enterIds_group_dos_puntos1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group_dos_puntos1.
HtmlSRListener.prototype.exitIds_group_dos_puntos1 = function(ctx) {
  var translation = ", ";
  ctx.text = translation;
};


// Enter a parse tree produced by SRParser#ids_group_dos_puntos_op_type.
HtmlSRListener.prototype.enterIds_group_dos_puntos_op_type = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group_dos_puntos_op_type.
HtmlSRListener.prototype.exitIds_group_dos_puntos_op_type = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_group_dos_puntos_op_type1.
HtmlSRListener.prototype.enterIds_group_dos_puntos_op_type1 = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group_dos_puntos_op_type1.
HtmlSRListener.prototype.exitIds_group_dos_puntos_op_type1 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#var_type.
HtmlSRListener.prototype.enterVar_type = function(ctx) {
};

// Exit a parse tree produced by SRParser#var_type.
HtmlSRListener.prototype.exitVar_type = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_group_0.
HtmlSRListener.prototype.enterIds_group_0 = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group_0.
HtmlSRListener.prototype.exitIds_group_0 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};


// Enter a parse tree produced by SRParser#ids_group_01.
HtmlSRListener.prototype.enterIds_group_01 = function(ctx) {
};

// Exit a parse tree produced by SRParser#ids_group_01.
HtmlSRListener.prototype.exitIds_group_01 = function(ctx) {
  ctx.text = getTextOfChildrenModified(ctx);
};

exports.HtmlSRListener = HtmlSRListener;
