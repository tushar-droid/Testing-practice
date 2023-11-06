const capitalize = (inp) =>{
    if(inp === undefined) return
    var first_char = inp.charAt(0);
    first_char = first_char.toUpperCase();
    var res = first_char + inp.slice(1);
    return res;
}


const reverseString = (inp) =>{
    if(inp ===undefined) return
    var rev_string ='';
    for(var i=inp.length-1; i>=0; i--){
        rev_string +=inp.charAt(i);
    }
    return rev_string;
}

const calculator = {
    add: (val1, val2) => val1 && val2 ?val1+val2: 'Missing value',
    subtract: (val1, val2) => val1 && val2 ?val1-val2: 'Missing value',
    divide: (val1,val2) => val1 && val2 ?val1/val2: 'Missing value',
    multiply: (val1, val2) => val1 && val2 ?val1*val2: 'Missing value',
}
const caesarCipher = (inp, shift_factor) =>{
    //Z = 90 && z = 122  A = 65 && a==97  characters are between (65 and 90) and (97 and 122)
    var encrypted_message = '';
    for(var i=0; i<inp.length; i++){
        var ascii_of_char = inp.charCodeAt(i);
        if((65 <= ascii_of_char && ascii_of_char <= 90) || (97 <= ascii_of_char && ascii_of_char <= 122)){
            if(ascii_of_char ==90) {
                encrypted_message += String.fromCharCode(64+shift_factor);
            }
            else if(ascii_of_char === 122){ 
                encrypted_message += String.fromCharCode(96+shift_factor);
            }
            else{
                encrypted_message += String.fromCharCode(ascii_of_char+shift_factor);
            }
        }
        else if(ascii_of_char ===32) encrypted_message += String.fromCharCode(32);
        else  encrypted_message += String.fromCharCode(ascii_of_char);
    }
    console.log(encrypted_message)
}   

module.exports = {capitalize, reverseString, calculator, caesarCipher};