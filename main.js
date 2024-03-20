function decode(message){
    const english = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const zoltanian = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Cu"];
    let decodedMessage = "";
    for (let i = 0; i < message.length; i++){
        let char =        message.charAt(i);
        if (char == " "){
            decodedMessage = decodedMessage + char;
            continue;
        }
        let nextChar = message.charAt(i + 1);
        if(nextChar != ' ' && nextChar == nextChar.toLowerCase()){
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

            decodedMessage = decodedMessage + translatechar;
    }
        return decodedMessage;
}

let encodedMessage = "OHSSMn HeFArCaOBeHMnCu MnPSc HArB RfDs";
console.log(encodedMessage);
let decodedMessage = decode(encodedMessage);
console.log(decodedMessage);