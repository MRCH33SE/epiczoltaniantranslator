const english =   ["A", "B", "C", "D","E","F","G","H","I", "J", "K", "L", "M", "N","O","P", "Q", "R","S", "T", "U", "V","W", "X", "Y", "Z",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const zoltanian = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", " Cu", " Zn", " Ga"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];

function isSpecialCharacter(character) {
    let index = english.indexOf(character);
    return index > 38;
}

const ZAlt = ["Z","O","L","T","A","N","B","C","D","E","F","G","H","I","J","K","M","P","Q","R","S","U","V","W","X","Y",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const JosAlt = ["J","O","S","I","A","H","B","C","D","E","F","G","K","L","M","N","P","Q","R","Z","T","U","V","W","X","Y",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const CAlt = ["C","A","I","U","S","B","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","T","Z","V","W","X","Y",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const AAlt = ["A","S","H","E","R","B","C","D","F","G","I","J","K","L","M","N","O","P","Q","Z","T","U","V","W","X","Y",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const GAlt = ["G","R","A","D","Y","B","C","E","F","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const TAlt = ["T","A","R","E","K","B","C","D","I","F","G","H","J","Q","L","M","N","O","P","S","U","V","W","X","Y","Z",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const LAlt = ["L","U","Y","I","A","B","C","D","E","F","G","H","J","K","M","N","O","P","Q","R","S","T","V","W","X","Z",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const JAlt = ["J","O","E","L","A","B","C","D","F","G","H","I","K","M","N","Z","P","Q","R","S","T","U","V","X","W","Y",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];
const PercentCommonnessAlt = ["E","A","T","R","I","S","N","U","L","O","D","C","M","P","F","V","G","Q","J","B","X","Y","H","Z","K","W",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":", '\n'];

//Ciphertype indicates what alternate cdicionary is 
function encodeAlt(message, ciphertype) {
    let encodedMessageAlt = "";
    for(let i = 0; i < message.length; i++) {
        let char =      message.charAt(i).toUpperCase();
        let       index = english.indexOf(char);
        let translatechar = ciphertype[index];
        if (translatechar == undefined) {
            console.log(char);
        }
        encodedMessageAlt = encodedMessageAlt + translatechar;
    }
    return encodedMessageAlt;
}

function decodeAlt(message, ciphertype){
    let decodedMessageAlt = "";
    for (let i = 0; i < message.length; i++){
        let char =        message.charAt(i);
        let nextChar = message.charAt(i + 1);
        if(!isSpecialCharacter(nextChar) && nextChar == nextChar.toLowerCase()){
            char = char + message.charAt(i + 1);
            i++;
        }
        let       index = ciphertype.indexOf(char);
        if (index == -1) {
            char == char.substring(0, char.length - 1);
            i--;
           index = ciphertype.indexOf(char);
        }
        let translatechar = english[index];
        if(translatechar == undefined){
            translatechar = "ScSiBeBCFSiBBe";
        }
            decodedMessageAlt = decodedMessageAlt + translatechar;
    }
        return decodedMessageAlt;
}