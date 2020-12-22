var vm = new Vue({
	el: "#main",
    data: {
        input: ""
    },
    computed: {
        output: function() {
            if(/[^A-Za-z0-9\s-+]/gi.test(this.input)) {
                return "INVALID INPUT! Illegal character entered";
            }
            if(/[A-Za-z]/g.test(this.input)&&/\d/g.test(this.input)) {
                return "INVALID INPUT! You cannot enter both letters and numbers";
            }
            if(/[A-Za-z]/g.test(this.input)&&/[-+]/g.test(this.input)) {
                return doMathOnLetters(this.input);
            }
            if(/[\d]+/g.test(this.input)) {
                return translateNumericToAlpha(this.input);
            }
            if(/[A-Za-z]+/g.test(this.input)) {
                return translateAlphaToNumeric(this.input);
            }
            
        }
    }
});

function doMathOnLetters(inputString) {
    let mathExpression = translateAlphaToNumeric(inputString);
    let finalNumber = parseNumericExpression(mathExpression);
    if(finalNumber>26 || finalNumber<-26) {
     finalNumber = finalNumber % 26; //use modulo to stay between 1-26
    }
    if(finalNumber<0) {
        finalNumber = 26+finalNumber; //subtract from 26 to get appropriate letter
    }
    return translateNumericToAlpha(String(finalNumber));
}

function translateAlphaToNumeric(inputString) {
    let translatedString = inputString;
    translatedString = translatedString.replace(/\ba\b/gi, "1");
    translatedString = translatedString.replace(/\bb\b/gi, "2");
    translatedString = translatedString.replace(/\bc\b/gi, "3");
    translatedString = translatedString.replace(/\bd\b/gi, "4");
    translatedString = translatedString.replace(/\be\b/gi, "5");
    translatedString = translatedString.replace(/\bf\b/gi, "6");
    translatedString = translatedString.replace(/\bg\b/gi, "7");
    translatedString = translatedString.replace(/\bh\b/gi, "8");
    translatedString = translatedString.replace(/\bi\b/gi, "9");
    translatedString = translatedString.replace(/\bj\b/gi, "10");
    translatedString = translatedString.replace(/\bk\b/gi, "11");
    translatedString = translatedString.replace(/\bl\b/gi, "12");
    translatedString = translatedString.replace(/\bm\b/gi, "13");
    translatedString = translatedString.replace(/\bn\b/gi, "14");
    translatedString = translatedString.replace(/\bo\b/gi, "15");
    translatedString = translatedString.replace(/\bp\b/gi, "16");
    translatedString = translatedString.replace(/\bq\b/gi, "17");
    translatedString = translatedString.replace(/\br\b/gi, "18");
    translatedString = translatedString.replace(/\bs\b/gi, "19");
    translatedString = translatedString.replace(/\bt\b/gi, "20");
    translatedString = translatedString.replace(/\bu\b/gi, "21");
    translatedString = translatedString.replace(/\bv\b/gi, "22");
    translatedString = translatedString.replace(/\bw\b/gi, "23");
    translatedString = translatedString.replace(/\bx\b/gi, "24");
    translatedString = translatedString.replace(/\by\b/gi, "25");
    translatedString = translatedString.replace(/\bz\b/gi, "26");
    return translatedString;
}

function parseNumericExpression(inputString) {
    return Function("return (" + inputString + ")")(); //safer than eval()
}

function translateNumericToAlpha(inputString) {
    let translatedString = inputString;
    translatedString = translatedString.replace(/\b1\b/gi, "A");
    translatedString = translatedString.replace(/\b2\b/gi, "B");
    translatedString = translatedString.replace(/\b3\b/gi, "C");
    translatedString = translatedString.replace(/\b4\b/gi, "D");
    translatedString = translatedString.replace(/\b5\b/gi, "E");
    translatedString = translatedString.replace(/\b6\b/gi, "F");
    translatedString = translatedString.replace(/\b7\b/gi, "G");
    translatedString = translatedString.replace(/\b8\b/gi, "H");
    translatedString = translatedString.replace(/\b9\b/gi, "I");
    translatedString = translatedString.replace(/\b10\b/gi, "J");
    translatedString = translatedString.replace(/\b11\b/gi, "K");
    translatedString = translatedString.replace(/\b12\b/gi, "L");
    translatedString = translatedString.replace(/\b13\b/gi, "M");
    translatedString = translatedString.replace(/\b14\b/gi, "N");
    translatedString = translatedString.replace(/\b15\b/gi, "O");
    translatedString = translatedString.replace(/\b16\b/gi, "P");
    translatedString = translatedString.replace(/\b17\b/gi, "Q");
    translatedString = translatedString.replace(/\b18\b/gi, "R");
    translatedString = translatedString.replace(/\b19\b/gi, "S");
    translatedString = translatedString.replace(/\b20\b/gi, "T");
    translatedString = translatedString.replace(/\b21\b/gi, "U");
    translatedString = translatedString.replace(/\b22\b/gi, "V");
    translatedString = translatedString.replace(/\b23\b/gi, "W");
    translatedString = translatedString.replace(/\b24\b/gi, "X");
    translatedString = translatedString.replace(/\b25\b/gi, "Y");
    translatedString = translatedString.replace(/\b26\b/gi, "Z");
    return translatedString;
}