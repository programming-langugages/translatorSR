const http = require('http');
const antlr4 = require('antlr4/index');
const SRLexer = require('./SRLexer');
const SRParser = require('./SRParser');
const SRListener = require('./HtmlSRListener').HtmlSRListener;

http.createServer((req, res) => {

   res.writeHead(200, {
       'Content-Type': 'text/html',
   });
   res.write('<html><head><meta charset="UTF-8"/></head><body>');


   var input =
          `resource lizzyresource()
          const d := 5
          end`;
   var chars = new antlr4.InputStream(input);
   var lexer = new SRLexer.SRLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new SRParser.SRParser(tokens);
   parser.buildParseTrees = true;
   var tree = parser.sr_program();
   var sr_program = new HtmlSRListener(res);
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(sr_program, tree);

   res.write('</body></html>');
   res.end();
}).listen(1337);
