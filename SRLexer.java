// Generated from SR.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SRLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		GLOBAL=1, DOUBLE=2, BODY=3, CONST=4, CREATE=5, DO=6, OD=7, FS=8, AF=9, 
		SKIP_RESERVED=10, EXIT=11, MAXLENGTH=12, LENGTH=13, RECEIVE=14, REC=15, 
		DESTROY=16, EXTERNAL=17, EXTEND=18, GETARG=19, GET=20, IMPORT=21, MOD=22, 
		NEW=23, REAL=24, PROCEDURE=25, PROCESS=26, FINAL=27, REPLY=28, NEXT=29, 
		PROC=30, READ=31, SEND=32, SPEC=33, INITIAL=34, CHAR=35, STRING=36, BOOL=37, 
		RESOURCE=38, RETURNS=39, SCANF=40, SEM=41, SPRINTF=42, INT=43, STOP=44, 
		HIGH=45, WRITES=46, WRITE=47, PRED=48, CAP=49, LOW=50, REF=51, END=52, 
		ABS=53, RES=54, VAL=55, VAR=56, NI=57, CO=58, TO=59, OPTYPE=60, OP=61, 
		OR=62, FA=63, FI=64, IF=65, LB=66, UB=67, PUT=68, TYPE=69, SUCC=70, ID=71, 
		TK_SUMA_ASIG=72, TK_MENOS_ASIG=73, TK_ASIG=74, TK_COMA=75, TK_COR_DER=76, 
		TK_COR_IZQ=77, TK_CORCHE_DER=78, TK_CORCHE_IZQ=79, TK_DISTINTO=80, TK_DOS_PUNTOS=81, 
		TK_EJECUTA=82, TK_IGUAL=83, TK_MENORQUE=84, TK_MAYORQUE=85, TK_EXPR_SINC=86, 
		TK_MULTI=87, TK_PAR_IZQ=88, TK_PAR_DER=89, TK_PUNTO_Y_COMA=90, TK_NUM=91, 
		TK_MENOS_MENOS=92, TK_MENOS=93, TK_SEPARA=94, TK_SUMA_SUMA=95, TK_SUMA=96, 
		TK_DIV=97, TK_PUNTO=98, TK_SWAP=99, TK_TRES_PUNTOS=100, TK_PORCENTAJE=101, 
		TK_AMPERSAND=102, ANY=103, WS=104;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"GLOBAL", "DOUBLE", "BODY", "CONST", "CREATE", "DO", "OD", "FS", "AF", 
			"SKIP_RESERVED", "EXIT", "MAXLENGTH", "LENGTH", "RECEIVE", "REC", "DESTROY", 
			"EXTERNAL", "EXTEND", "GETARG", "GET", "IMPORT", "MOD", "NEW", "REAL", 
			"PROCEDURE", "PROCESS", "FINAL", "REPLY", "NEXT", "PROC", "READ", "SEND", 
			"SPEC", "INITIAL", "CHAR", "STRING", "BOOL", "RESOURCE", "RETURNS", "SCANF", 
			"SEM", "SPRINTF", "INT", "STOP", "HIGH", "WRITES", "WRITE", "PRED", "CAP", 
			"LOW", "REF", "END", "ABS", "RES", "VAL", "VAR", "NI", "CO", "TO", "OPTYPE", 
			"OP", "OR", "FA", "FI", "IF", "LB", "UB", "PUT", "TYPE", "SUCC", "ID", 
			"TK_SUMA_ASIG", "TK_MENOS_ASIG", "TK_ASIG", "TK_COMA", "TK_COR_DER", 
			"TK_COR_IZQ", "TK_CORCHE_DER", "TK_CORCHE_IZQ", "TK_DISTINTO", "TK_DOS_PUNTOS", 
			"TK_EJECUTA", "TK_IGUAL", "TK_MENORQUE", "TK_MAYORQUE", "TK_EXPR_SINC", 
			"TK_MULTI", "TK_PAR_IZQ", "TK_PAR_DER", "TK_PUNTO_Y_COMA", "TK_NUM", 
			"TK_MENOS_MENOS", "TK_MENOS", "TK_SEPARA", "TK_SUMA_SUMA", "TK_SUMA", 
			"TK_DIV", "TK_PUNTO", "TK_SWAP", "TK_TRES_PUNTOS", "TK_PORCENTAJE", "TK_AMPERSAND", 
			"ANY", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'global'", "'double'", "'body'", "'const '", "'create'", "'do'", 
			"'od'", "'fs'", "'af'", "'skip'", "'exit'", "'maxlength'", "'length'", 
			"'receive'", "'rec'", "'destroy'", "'external'", "'extend'", "'getarg'", 
			"'get'", "'import'", "'mod'", "'new'", "'real'", "'procedure'", "'process'", 
			"'final'", "'reply'", "'next'", "'proc'", "'read'", "'send'", "'spec'", 
			"'initial'", "'char'", "'string'", "'bool'", "'resource'", "'returns'", 
			"'scanf'", "'sem'", "'sprintf'", "'int'", "'stop'", "'high'", "'writes'", 
			"'write'", "'pred'", "'cap'", "'low'", "'ref'", "'end'", "'abs'", "'res'", 
			"'val'", "'var'", "'ni'", "'co'", "'to'", "'optype'", "'op'", "'or '", 
			"'fa'", "'fi'", "'if'", "'lb'", "'ub'", "'put'", "'type'", "'succ'", 
			null, "'+:='", "'-:='", "':='", "','", "']'", "'['", "'}'", "'{'", "'!='", 
			"':'", "'->'", "'='", "'<'", "'>'", "'?'", "'*'", "'('", "')'", "';'", 
			null, "'--'", "'-'", "'[]'", "'++'", "'+'", "'/'", "'.'", "':=:'", "'...'", 
			"'%'", "'&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "GLOBAL", "DOUBLE", "BODY", "CONST", "CREATE", "DO", "OD", "FS", 
			"AF", "SKIP_RESERVED", "EXIT", "MAXLENGTH", "LENGTH", "RECEIVE", "REC", 
			"DESTROY", "EXTERNAL", "EXTEND", "GETARG", "GET", "IMPORT", "MOD", "NEW", 
			"REAL", "PROCEDURE", "PROCESS", "FINAL", "REPLY", "NEXT", "PROC", "READ", 
			"SEND", "SPEC", "INITIAL", "CHAR", "STRING", "BOOL", "RESOURCE", "RETURNS", 
			"SCANF", "SEM", "SPRINTF", "INT", "STOP", "HIGH", "WRITES", "WRITE", 
			"PRED", "CAP", "LOW", "REF", "END", "ABS", "RES", "VAL", "VAR", "NI", 
			"CO", "TO", "OPTYPE", "OP", "OR", "FA", "FI", "IF", "LB", "UB", "PUT", 
			"TYPE", "SUCC", "ID", "TK_SUMA_ASIG", "TK_MENOS_ASIG", "TK_ASIG", "TK_COMA", 
			"TK_COR_DER", "TK_COR_IZQ", "TK_CORCHE_DER", "TK_CORCHE_IZQ", "TK_DISTINTO", 
			"TK_DOS_PUNTOS", "TK_EJECUTA", "TK_IGUAL", "TK_MENORQUE", "TK_MAYORQUE", 
			"TK_EXPR_SINC", "TK_MULTI", "TK_PAR_IZQ", "TK_PAR_DER", "TK_PUNTO_Y_COMA", 
			"TK_NUM", "TK_MENOS_MENOS", "TK_MENOS", "TK_SEPARA", "TK_SUMA_SUMA", 
			"TK_SUMA", "TK_DIV", "TK_PUNTO", "TK_SWAP", "TK_TRES_PUNTOS", "TK_PORCENTAJE", 
			"TK_AMPERSAND", "ANY", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SRLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SR.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2j\u02a4\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b"+
		"\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f"+
		"\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3"+
		" \3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\3#\3$\3$\3$"+
		"\3$\3$\3%\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3\'"+
		"\3\'\3\'\3(\3(\3(\3(\3(\3(\3(\3(\3)\3)\3)\3)\3)\3)\3*\3*\3*\3*\3+\3+\3"+
		"+\3+\3+\3+\3+\3+\3,\3,\3,\3,\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3/\3/\3/\3"+
		"/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\62"+
		"\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\65\3\65\3\65"+
		"\3\65\3\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67\38\38\38\38\39\39\39\39"+
		"\3:\3:\3:\3;\3;\3;\3<\3<\3<\3=\3=\3=\3=\3=\3=\3=\3>\3>\3>\3?\3?\3?\3?"+
		"\3@\3@\3@\3A\3A\3A\3B\3B\3B\3C\3C\3C\3D\3D\3D\3E\3E\3E\3E\3F\3F\3F\3F"+
		"\3F\3G\3G\3G\3G\3G\3H\6H\u0247\nH\rH\16H\u0248\3I\3I\3I\3I\3J\3J\3J\3"+
		"J\3K\3K\3K\3L\3L\3M\3M\3N\3N\3O\3O\3P\3P\3Q\3Q\3Q\3R\3R\3S\3S\3S\3T\3"+
		"T\3U\3U\3V\3V\3W\3W\3X\3X\3Y\3Y\3Z\3Z\3[\3[\3\\\6\\\u0279\n\\\r\\\16\\"+
		"\u027a\3]\3]\3]\3^\3^\3_\3_\3_\3`\3`\3`\3a\3a\3b\3b\3c\3c\3d\3d\3d\3d"+
		"\3e\3e\3e\3e\3f\3f\3g\3g\3h\3h\3h\3h\3i\6i\u029f\ni\ri\16i\u02a0\3i\3"+
		"i\2\2j\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17"+
		"\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\35"+
		"9\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66"+
		"k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008bG"+
		"\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009bO\u009dP\u009f"+
		"Q\u00a1R\u00a3S\u00a5T\u00a7U\u00a9V\u00abW\u00adX\u00afY\u00b1Z\u00b3"+
		"[\u00b5\\\u00b7]\u00b9^\u00bb_\u00bd`\u00bfa\u00c1b\u00c3c\u00c5d\u00c7"+
		"e\u00c9f\u00cbg\u00cdh\u00cfi\u00d1j\3\2\5\5\2\62;C\\c|\3\2\62;\4\2\13"+
		"\f\17\17\2\u02a6\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2"+
		"!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3"+
		"\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2"+
		"\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E"+
		"\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2"+
		"\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2"+
		"\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k"+
		"\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2"+
		"\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2"+
		"\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b"+
		"\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2"+
		"\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d"+
		"\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2"+
		"\2\2\u00a7\3\2\2\2\2\u00a9\3\2\2\2\2\u00ab\3\2\2\2\2\u00ad\3\2\2\2\2\u00af"+
		"\3\2\2\2\2\u00b1\3\2\2\2\2\u00b3\3\2\2\2\2\u00b5\3\2\2\2\2\u00b7\3\2\2"+
		"\2\2\u00b9\3\2\2\2\2\u00bb\3\2\2\2\2\u00bd\3\2\2\2\2\u00bf\3\2\2\2\2\u00c1"+
		"\3\2\2\2\2\u00c3\3\2\2\2\2\u00c5\3\2\2\2\2\u00c7\3\2\2\2\2\u00c9\3\2\2"+
		"\2\2\u00cb\3\2\2\2\2\u00cd\3\2\2\2\2\u00cf\3\2\2\2\2\u00d1\3\2\2\2\3\u00d3"+
		"\3\2\2\2\5\u00da\3\2\2\2\7\u00e1\3\2\2\2\t\u00e6\3\2\2\2\13\u00ed\3\2"+
		"\2\2\r\u00f4\3\2\2\2\17\u00f7\3\2\2\2\21\u00fa\3\2\2\2\23\u00fd\3\2\2"+
		"\2\25\u0100\3\2\2\2\27\u0105\3\2\2\2\31\u010a\3\2\2\2\33\u0114\3\2\2\2"+
		"\35\u011b\3\2\2\2\37\u0123\3\2\2\2!\u0127\3\2\2\2#\u012f\3\2\2\2%\u0138"+
		"\3\2\2\2\'\u013f\3\2\2\2)\u0146\3\2\2\2+\u014a\3\2\2\2-\u0151\3\2\2\2"+
		"/\u0155\3\2\2\2\61\u0159\3\2\2\2\63\u015e\3\2\2\2\65\u0168\3\2\2\2\67"+
		"\u0170\3\2\2\29\u0176\3\2\2\2;\u017c\3\2\2\2=\u0181\3\2\2\2?\u0186\3\2"+
		"\2\2A\u018b\3\2\2\2C\u0190\3\2\2\2E\u0195\3\2\2\2G\u019d\3\2\2\2I\u01a2"+
		"\3\2\2\2K\u01a9\3\2\2\2M\u01ae\3\2\2\2O\u01b7\3\2\2\2Q\u01bf\3\2\2\2S"+
		"\u01c5\3\2\2\2U\u01c9\3\2\2\2W\u01d1\3\2\2\2Y\u01d5\3\2\2\2[\u01da\3\2"+
		"\2\2]\u01df\3\2\2\2_\u01e6\3\2\2\2a\u01ec\3\2\2\2c\u01f1\3\2\2\2e\u01f5"+
		"\3\2\2\2g\u01f9\3\2\2\2i\u01fd\3\2\2\2k\u0201\3\2\2\2m\u0205\3\2\2\2o"+
		"\u0209\3\2\2\2q\u020d\3\2\2\2s\u0211\3\2\2\2u\u0214\3\2\2\2w\u0217\3\2"+
		"\2\2y\u021a\3\2\2\2{\u0221\3\2\2\2}\u0224\3\2\2\2\177\u0228\3\2\2\2\u0081"+
		"\u022b\3\2\2\2\u0083\u022e\3\2\2\2\u0085\u0231\3\2\2\2\u0087\u0234\3\2"+
		"\2\2\u0089\u0237\3\2\2\2\u008b\u023b\3\2\2\2\u008d\u0240\3\2\2\2\u008f"+
		"\u0246\3\2\2\2\u0091\u024a\3\2\2\2\u0093\u024e\3\2\2\2\u0095\u0252\3\2"+
		"\2\2\u0097\u0255\3\2\2\2\u0099\u0257\3\2\2\2\u009b\u0259\3\2\2\2\u009d"+
		"\u025b\3\2\2\2\u009f\u025d\3\2\2\2\u00a1\u025f\3\2\2\2\u00a3\u0262\3\2"+
		"\2\2\u00a5\u0264\3\2\2\2\u00a7\u0267\3\2\2\2\u00a9\u0269\3\2\2\2\u00ab"+
		"\u026b\3\2\2\2\u00ad\u026d\3\2\2\2\u00af\u026f\3\2\2\2\u00b1\u0271\3\2"+
		"\2\2\u00b3\u0273\3\2\2\2\u00b5\u0275\3\2\2\2\u00b7\u0278\3\2\2\2\u00b9"+
		"\u027c\3\2\2\2\u00bb\u027f\3\2\2\2\u00bd\u0281\3\2\2\2\u00bf\u0284\3\2"+
		"\2\2\u00c1\u0287\3\2\2\2\u00c3\u0289\3\2\2\2\u00c5\u028b\3\2\2\2\u00c7"+
		"\u028d\3\2\2\2\u00c9\u0291\3\2\2\2\u00cb\u0295\3\2\2\2\u00cd\u0297\3\2"+
		"\2\2\u00cf\u0299\3\2\2\2\u00d1\u029e\3\2\2\2\u00d3\u00d4\7i\2\2\u00d4"+
		"\u00d5\7n\2\2\u00d5\u00d6\7q\2\2\u00d6\u00d7\7d\2\2\u00d7\u00d8\7c\2\2"+
		"\u00d8\u00d9\7n\2\2\u00d9\4\3\2\2\2\u00da\u00db\7f\2\2\u00db\u00dc\7q"+
		"\2\2\u00dc\u00dd\7w\2\2\u00dd\u00de\7d\2\2\u00de\u00df\7n\2\2\u00df\u00e0"+
		"\7g\2\2\u00e0\6\3\2\2\2\u00e1\u00e2\7d\2\2\u00e2\u00e3\7q\2\2\u00e3\u00e4"+
		"\7f\2\2\u00e4\u00e5\7{\2\2\u00e5\b\3\2\2\2\u00e6\u00e7\7e\2\2\u00e7\u00e8"+
		"\7q\2\2\u00e8\u00e9\7p\2\2\u00e9\u00ea\7u\2\2\u00ea\u00eb\7v\2\2\u00eb"+
		"\u00ec\7\"\2\2\u00ec\n\3\2\2\2\u00ed\u00ee\7e\2\2\u00ee\u00ef\7t\2\2\u00ef"+
		"\u00f0\7g\2\2\u00f0\u00f1\7c\2\2\u00f1\u00f2\7v\2\2\u00f2\u00f3\7g\2\2"+
		"\u00f3\f\3\2\2\2\u00f4\u00f5\7f\2\2\u00f5\u00f6\7q\2\2\u00f6\16\3\2\2"+
		"\2\u00f7\u00f8\7q\2\2\u00f8\u00f9\7f\2\2\u00f9\20\3\2\2\2\u00fa\u00fb"+
		"\7h\2\2\u00fb\u00fc\7u\2\2\u00fc\22\3\2\2\2\u00fd\u00fe\7c\2\2\u00fe\u00ff"+
		"\7h\2\2\u00ff\24\3\2\2\2\u0100\u0101\7u\2\2\u0101\u0102\7m\2\2\u0102\u0103"+
		"\7k\2\2\u0103\u0104\7r\2\2\u0104\26\3\2\2\2\u0105\u0106\7g\2\2\u0106\u0107"+
		"\7z\2\2\u0107\u0108\7k\2\2\u0108\u0109\7v\2\2\u0109\30\3\2\2\2\u010a\u010b"+
		"\7o\2\2\u010b\u010c\7c\2\2\u010c\u010d\7z\2\2\u010d\u010e\7n\2\2\u010e"+
		"\u010f\7g\2\2\u010f\u0110\7p\2\2\u0110\u0111\7i\2\2\u0111\u0112\7v\2\2"+
		"\u0112\u0113\7j\2\2\u0113\32\3\2\2\2\u0114\u0115\7n\2\2\u0115\u0116\7"+
		"g\2\2\u0116\u0117\7p\2\2\u0117\u0118\7i\2\2\u0118\u0119\7v\2\2\u0119\u011a"+
		"\7j\2\2\u011a\34\3\2\2\2\u011b\u011c\7t\2\2\u011c\u011d\7g\2\2\u011d\u011e"+
		"\7e\2\2\u011e\u011f\7g\2\2\u011f\u0120\7k\2\2\u0120\u0121\7x\2\2\u0121"+
		"\u0122\7g\2\2\u0122\36\3\2\2\2\u0123\u0124\7t\2\2\u0124\u0125\7g\2\2\u0125"+
		"\u0126\7e\2\2\u0126 \3\2\2\2\u0127\u0128\7f\2\2\u0128\u0129\7g\2\2\u0129"+
		"\u012a\7u\2\2\u012a\u012b\7v\2\2\u012b\u012c\7t\2\2\u012c\u012d\7q\2\2"+
		"\u012d\u012e\7{\2\2\u012e\"\3\2\2\2\u012f\u0130\7g\2\2\u0130\u0131\7z"+
		"\2\2\u0131\u0132\7v\2\2\u0132\u0133\7g\2\2\u0133\u0134\7t\2\2\u0134\u0135"+
		"\7p\2\2\u0135\u0136\7c\2\2\u0136\u0137\7n\2\2\u0137$\3\2\2\2\u0138\u0139"+
		"\7g\2\2\u0139\u013a\7z\2\2\u013a\u013b\7v\2\2\u013b\u013c\7g\2\2\u013c"+
		"\u013d\7p\2\2\u013d\u013e\7f\2\2\u013e&\3\2\2\2\u013f\u0140\7i\2\2\u0140"+
		"\u0141\7g\2\2\u0141\u0142\7v\2\2\u0142\u0143\7c\2\2\u0143\u0144\7t\2\2"+
		"\u0144\u0145\7i\2\2\u0145(\3\2\2\2\u0146\u0147\7i\2\2\u0147\u0148\7g\2"+
		"\2\u0148\u0149\7v\2\2\u0149*\3\2\2\2\u014a\u014b\7k\2\2\u014b\u014c\7"+
		"o\2\2\u014c\u014d\7r\2\2\u014d\u014e\7q\2\2\u014e\u014f\7t\2\2\u014f\u0150"+
		"\7v\2\2\u0150,\3\2\2\2\u0151\u0152\7o\2\2\u0152\u0153\7q\2\2\u0153\u0154"+
		"\7f\2\2\u0154.\3\2\2\2\u0155\u0156\7p\2\2\u0156\u0157\7g\2\2\u0157\u0158"+
		"\7y\2\2\u0158\60\3\2\2\2\u0159\u015a\7t\2\2\u015a\u015b\7g\2\2\u015b\u015c"+
		"\7c\2\2\u015c\u015d\7n\2\2\u015d\62\3\2\2\2\u015e\u015f\7r\2\2\u015f\u0160"+
		"\7t\2\2\u0160\u0161\7q\2\2\u0161\u0162\7e\2\2\u0162\u0163\7g\2\2\u0163"+
		"\u0164\7f\2\2\u0164\u0165\7w\2\2\u0165\u0166\7t\2\2\u0166\u0167\7g\2\2"+
		"\u0167\64\3\2\2\2\u0168\u0169\7r\2\2\u0169\u016a\7t\2\2\u016a\u016b\7"+
		"q\2\2\u016b\u016c\7e\2\2\u016c\u016d\7g\2\2\u016d\u016e\7u\2\2\u016e\u016f"+
		"\7u\2\2\u016f\66\3\2\2\2\u0170\u0171\7h\2\2\u0171\u0172\7k\2\2\u0172\u0173"+
		"\7p\2\2\u0173\u0174\7c\2\2\u0174\u0175\7n\2\2\u01758\3\2\2\2\u0176\u0177"+
		"\7t\2\2\u0177\u0178\7g\2\2\u0178\u0179\7r\2\2\u0179\u017a\7n\2\2\u017a"+
		"\u017b\7{\2\2\u017b:\3\2\2\2\u017c\u017d\7p\2\2\u017d\u017e\7g\2\2\u017e"+
		"\u017f\7z\2\2\u017f\u0180\7v\2\2\u0180<\3\2\2\2\u0181\u0182\7r\2\2\u0182"+
		"\u0183\7t\2\2\u0183\u0184\7q\2\2\u0184\u0185\7e\2\2\u0185>\3\2\2\2\u0186"+
		"\u0187\7t\2\2\u0187\u0188\7g\2\2\u0188\u0189\7c\2\2\u0189\u018a\7f\2\2"+
		"\u018a@\3\2\2\2\u018b\u018c\7u\2\2\u018c\u018d\7g\2\2\u018d\u018e\7p\2"+
		"\2\u018e\u018f\7f\2\2\u018fB\3\2\2\2\u0190\u0191\7u\2\2\u0191\u0192\7"+
		"r\2\2\u0192\u0193\7g\2\2\u0193\u0194\7e\2\2\u0194D\3\2\2\2\u0195\u0196"+
		"\7k\2\2\u0196\u0197\7p\2\2\u0197\u0198\7k\2\2\u0198\u0199\7v\2\2\u0199"+
		"\u019a\7k\2\2\u019a\u019b\7c\2\2\u019b\u019c\7n\2\2\u019cF\3\2\2\2\u019d"+
		"\u019e\7e\2\2\u019e\u019f\7j\2\2\u019f\u01a0\7c\2\2\u01a0\u01a1\7t\2\2"+
		"\u01a1H\3\2\2\2\u01a2\u01a3\7u\2\2\u01a3\u01a4\7v\2\2\u01a4\u01a5\7t\2"+
		"\2\u01a5\u01a6\7k\2\2\u01a6\u01a7\7p\2\2\u01a7\u01a8\7i\2\2\u01a8J\3\2"+
		"\2\2\u01a9\u01aa\7d\2\2\u01aa\u01ab\7q\2\2\u01ab\u01ac\7q\2\2\u01ac\u01ad"+
		"\7n\2\2\u01adL\3\2\2\2\u01ae\u01af\7t\2\2\u01af\u01b0\7g\2\2\u01b0\u01b1"+
		"\7u\2\2\u01b1\u01b2\7q\2\2\u01b2\u01b3\7w\2\2\u01b3\u01b4\7t\2\2\u01b4"+
		"\u01b5\7e\2\2\u01b5\u01b6\7g\2\2\u01b6N\3\2\2\2\u01b7\u01b8\7t\2\2\u01b8"+
		"\u01b9\7g\2\2\u01b9\u01ba\7v\2\2\u01ba\u01bb\7w\2\2\u01bb\u01bc\7t\2\2"+
		"\u01bc\u01bd\7p\2\2\u01bd\u01be\7u\2\2\u01beP\3\2\2\2\u01bf\u01c0\7u\2"+
		"\2\u01c0\u01c1\7e\2\2\u01c1\u01c2\7c\2\2\u01c2\u01c3\7p\2\2\u01c3\u01c4"+
		"\7h\2\2\u01c4R\3\2\2\2\u01c5\u01c6\7u\2\2\u01c6\u01c7\7g\2\2\u01c7\u01c8"+
		"\7o\2\2\u01c8T\3\2\2\2\u01c9\u01ca\7u\2\2\u01ca\u01cb\7r\2\2\u01cb\u01cc"+
		"\7t\2\2\u01cc\u01cd\7k\2\2\u01cd\u01ce\7p\2\2\u01ce\u01cf\7v\2\2\u01cf"+
		"\u01d0\7h\2\2\u01d0V\3\2\2\2\u01d1\u01d2\7k\2\2\u01d2\u01d3\7p\2\2\u01d3"+
		"\u01d4\7v\2\2\u01d4X\3\2\2\2\u01d5\u01d6\7u\2\2\u01d6\u01d7\7v\2\2\u01d7"+
		"\u01d8\7q\2\2\u01d8\u01d9\7r\2\2\u01d9Z\3\2\2\2\u01da\u01db\7j\2\2\u01db"+
		"\u01dc\7k\2\2\u01dc\u01dd\7i\2\2\u01dd\u01de\7j\2\2\u01de\\\3\2\2\2\u01df"+
		"\u01e0\7y\2\2\u01e0\u01e1\7t\2\2\u01e1\u01e2\7k\2\2\u01e2\u01e3\7v\2\2"+
		"\u01e3\u01e4\7g\2\2\u01e4\u01e5\7u\2\2\u01e5^\3\2\2\2\u01e6\u01e7\7y\2"+
		"\2\u01e7\u01e8\7t\2\2\u01e8\u01e9\7k\2\2\u01e9\u01ea\7v\2\2\u01ea\u01eb"+
		"\7g\2\2\u01eb`\3\2\2\2\u01ec\u01ed\7r\2\2\u01ed\u01ee\7t\2\2\u01ee\u01ef"+
		"\7g\2\2\u01ef\u01f0\7f\2\2\u01f0b\3\2\2\2\u01f1\u01f2\7e\2\2\u01f2\u01f3"+
		"\7c\2\2\u01f3\u01f4\7r\2\2\u01f4d\3\2\2\2\u01f5\u01f6\7n\2\2\u01f6\u01f7"+
		"\7q\2\2\u01f7\u01f8\7y\2\2\u01f8f\3\2\2\2\u01f9\u01fa\7t\2\2\u01fa\u01fb"+
		"\7g\2\2\u01fb\u01fc\7h\2\2\u01fch\3\2\2\2\u01fd\u01fe\7g\2\2\u01fe\u01ff"+
		"\7p\2\2\u01ff\u0200\7f\2\2\u0200j\3\2\2\2\u0201\u0202\7c\2\2\u0202\u0203"+
		"\7d\2\2\u0203\u0204\7u\2\2\u0204l\3\2\2\2\u0205\u0206\7t\2\2\u0206\u0207"+
		"\7g\2\2\u0207\u0208\7u\2\2\u0208n\3\2\2\2\u0209\u020a\7x\2\2\u020a\u020b"+
		"\7c\2\2\u020b\u020c\7n\2\2\u020cp\3\2\2\2\u020d\u020e\7x\2\2\u020e\u020f"+
		"\7c\2\2\u020f\u0210\7t\2\2\u0210r\3\2\2\2\u0211\u0212\7p\2\2\u0212\u0213"+
		"\7k\2\2\u0213t\3\2\2\2\u0214\u0215\7e\2\2\u0215\u0216\7q\2\2\u0216v\3"+
		"\2\2\2\u0217\u0218\7v\2\2\u0218\u0219\7q\2\2\u0219x\3\2\2\2\u021a\u021b"+
		"\7q\2\2\u021b\u021c\7r\2\2\u021c\u021d\7v\2\2\u021d\u021e\7{\2\2\u021e"+
		"\u021f\7r\2\2\u021f\u0220\7g\2\2\u0220z\3\2\2\2\u0221\u0222\7q\2\2\u0222"+
		"\u0223\7r\2\2\u0223|\3\2\2\2\u0224\u0225\7q\2\2\u0225\u0226\7t\2\2\u0226"+
		"\u0227\7\"\2\2\u0227~\3\2\2\2\u0228\u0229\7h\2\2\u0229\u022a\7c\2\2\u022a"+
		"\u0080\3\2\2\2\u022b\u022c\7h\2\2\u022c\u022d\7k\2\2\u022d\u0082\3\2\2"+
		"\2\u022e\u022f\7k\2\2\u022f\u0230\7h\2\2\u0230\u0084\3\2\2\2\u0231\u0232"+
		"\7n\2\2\u0232\u0233\7d\2\2\u0233\u0086\3\2\2\2\u0234\u0235\7w\2\2\u0235"+
		"\u0236\7d\2\2\u0236\u0088\3\2\2\2\u0237\u0238\7r\2\2\u0238\u0239\7w\2"+
		"\2\u0239\u023a\7v\2\2\u023a\u008a\3\2\2\2\u023b\u023c\7v\2\2\u023c\u023d"+
		"\7{\2\2\u023d\u023e\7r\2\2\u023e\u023f\7g\2\2\u023f\u008c\3\2\2\2\u0240"+
		"\u0241\7u\2\2\u0241\u0242\7w\2\2\u0242\u0243\7e\2\2\u0243\u0244\7e\2\2"+
		"\u0244\u008e\3\2\2\2\u0245\u0247\t\2\2\2\u0246\u0245\3\2\2\2\u0247\u0248"+
		"\3\2\2\2\u0248\u0246\3\2\2\2\u0248\u0249\3\2\2\2\u0249\u0090\3\2\2\2\u024a"+
		"\u024b\7-\2\2\u024b\u024c\7<\2\2\u024c\u024d\7?\2\2\u024d\u0092\3\2\2"+
		"\2\u024e\u024f\7/\2\2\u024f\u0250\7<\2\2\u0250\u0251\7?\2\2\u0251\u0094"+
		"\3\2\2\2\u0252\u0253\7<\2\2\u0253\u0254\7?\2\2\u0254\u0096\3\2\2\2\u0255"+
		"\u0256\7.\2\2\u0256\u0098\3\2\2\2\u0257\u0258\7_\2\2\u0258\u009a\3\2\2"+
		"\2\u0259\u025a\7]\2\2\u025a\u009c\3\2\2\2\u025b\u025c\7\177\2\2\u025c"+
		"\u009e\3\2\2\2\u025d\u025e\7}\2\2\u025e\u00a0\3\2\2\2\u025f\u0260\7#\2"+
		"\2\u0260\u0261\7?\2\2\u0261\u00a2\3\2\2\2\u0262\u0263\7<\2\2\u0263\u00a4"+
		"\3\2\2\2\u0264\u0265\7/\2\2\u0265\u0266\7@\2\2\u0266\u00a6\3\2\2\2\u0267"+
		"\u0268\7?\2\2\u0268\u00a8\3\2\2\2\u0269\u026a\7>\2\2\u026a\u00aa\3\2\2"+
		"\2\u026b\u026c\7@\2\2\u026c\u00ac\3\2\2\2\u026d\u026e\7A\2\2\u026e\u00ae"+
		"\3\2\2\2\u026f\u0270\7,\2\2\u0270\u00b0\3\2\2\2\u0271\u0272\7*\2\2\u0272"+
		"\u00b2\3\2\2\2\u0273\u0274\7+\2\2\u0274\u00b4\3\2\2\2\u0275\u0276\7=\2"+
		"\2\u0276\u00b6\3\2\2\2\u0277\u0279\t\3\2\2\u0278\u0277\3\2\2\2\u0279\u027a"+
		"\3\2\2\2\u027a\u0278\3\2\2\2\u027a\u027b\3\2\2\2\u027b\u00b8\3\2\2\2\u027c"+
		"\u027d\7/\2\2\u027d\u027e\7/\2\2\u027e\u00ba\3\2\2\2\u027f\u0280\7/\2"+
		"\2\u0280\u00bc\3\2\2\2\u0281\u0282\7]\2\2\u0282\u0283\7_\2\2\u0283\u00be"+
		"\3\2\2\2\u0284\u0285\7-\2\2\u0285\u0286\7-\2\2\u0286\u00c0\3\2\2\2\u0287"+
		"\u0288\7-\2\2\u0288\u00c2\3\2\2\2\u0289\u028a\7\61\2\2\u028a\u00c4\3\2"+
		"\2\2\u028b\u028c\7\60\2\2\u028c\u00c6\3\2\2\2\u028d\u028e\7<\2\2\u028e"+
		"\u028f\7?\2\2\u028f\u0290\7<\2\2\u0290\u00c8\3\2\2\2\u0291\u0292\7\60"+
		"\2\2\u0292\u0293\7\60\2\2\u0293\u0294\7\60\2\2\u0294\u00ca\3\2\2\2\u0295"+
		"\u0296\7\'\2\2\u0296\u00cc\3\2\2\2\u0297\u0298\7(\2\2\u0298\u00ce\3\2"+
		"\2\2\u0299\u029a\13\2\2\2\u029a\u029b\3\2\2\2\u029b\u029c\bh\2\2\u029c"+
		"\u00d0\3\2\2\2\u029d\u029f\t\4\2\2\u029e\u029d\3\2\2\2\u029f\u02a0\3\2"+
		"\2\2\u02a0\u029e\3\2\2\2\u02a0\u02a1\3\2\2\2\u02a1\u02a2\3\2\2\2\u02a2"+
		"\u02a3\bi\2\2\u02a3\u00d2\3\2\2\2\6\2\u0248\u027a\u02a0\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}