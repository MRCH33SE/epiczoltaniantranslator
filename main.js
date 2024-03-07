function decode(message){
    const english = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const zoltanian = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe"];
    let decodedMessage = "";
    for (let i = 0; i < message.length; i++){
        let char =        message.charAt(i);
        if (char == " "){
            decodedMessage = decodedMessage + char;
            continue;
        }
        if(message.charAt(i + 1) == message.charAt(i + 1).toLowerCase()){
            char = char + message.charAt(i + 1);
            i++;
        }
        let       index = zoltanian.indexOf(char);
        let translatechar = english[index];

            decodedMessage = decodedMessage + translatechar;
    }
        return decodedMessage;
}

let encodedMessage = "OHSSMn HeFArCaOBeHMn";
console.log(encodedMessage);
let decodedMessage = decode(encodedMessage);
console.log(decodedMessage);