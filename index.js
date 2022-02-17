function translate(string) {
    string = string.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u' ];
    let vowelIndex = 0;

    if (vowels.includes(string[0])) {
        return string + "way";
    }   else {
        for (let character of string) {
            if (vowels.includes(character)) {
                vowelIndex= string.indexOf(character);
                break;
            }
        }
        return string.slice(vowelIndex) + string.slice(0, vowelIndex) + "ay";
    } 
}
console.log(translate("giraffe"));
console.log(translate("apple"));
console.log(translate("bongus"));


module.exports = translate;