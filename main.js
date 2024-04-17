const english =   ["A", "B", "C", "D","E","F","G","H","I", "J", "K", "L", "M", "N","O","P", "Q", "R","S", "T", "U", "V","W", "X", "Y", "Z",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "0",  ".", "!" ,  "?"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":"];
const zoltanian = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Cu", "Zn", "Ga"," ", ",", "-", "'", "(", ")", "[", "]", "{", "}", "/", "\\", "|", "\"", "@", "#", "$", "%", "^", "&", "*", "_", "+", "=", "<", ">", "`", "~",";", ":"];

function encode(message) {
    let encodedMessage = "";
    for(let i = 0; i < message.length; i++) {
        let char =      message.charAt(i).toUpperCase();
        let       index = english.indexOf(char);
        let translatechar = zoltanian[index];

        encodedMessage = encodedMessage + translatechar;
    }
    return encodedMessage;
}

function decode(message){
    let decodedMessage = "";
    for (let i = 0; i < message.length; i++){
        let char =        message.charAt(i);
        let nextChar = message.charAt(i + 1);
        if(!isSpecialCharacter(nextChar) && nextChar == nextChar.toLowerCase()){
            char = char + message.charAt(i + 1);
            i++;
        }
        let       index = zoltanian.indexOf(char);
        if (index == -1) {
            char == char.substring(0, char.length - 1);
            i--;
           index = zoltanian.indexOf(char);
        }
        let translatechar = english[index];
        if(translatechar == undefined){
            translatechar = "ScSiBeBCFSiBBe";
        }
            decodedMessage = decodedMessage + translatechar;
    }
        return decodedMessage;
}

function isSpecialCharacter(character) {
    let index = english.indexOf(character);
    return index > 38;
}

//Enter Zoltanian text below
let encodedMessage = "HMgMg OBMgMg HeArBHLiNaK MgPPKB";
console.log(encodedMessage);
let decodedMessage = decode(encodedMessage);
console.log(decodedMessage);
let reincodedmessage = encode(decodedMessage);
console.log(reincodedmessage);
if(encodedMessage == reincodedmessage) {

    console.log("pass");
} else {
    console.log("fail");
}
//Enter English text below
console.log(encode("Entropy"));