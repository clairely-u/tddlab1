const { TestWatcher } = require('jest');
const translate = require('./index');

describe('translate', () => {
    //tests for words starting with vowels
    test('words that start with vowels', () => {
        expect(translate("apple")).toEqual("appleway");
    });
    test('words that start with vowels', () => {
        expect(translate("orange")).toEqual("orangeway");
    });
    test('words that start with vowels', () => {
        expect(translate("earth")).toEqual("earthway");
    });
    test('words that start with vowels', () => {
        expect(translate("user")).toEqual("userway");
    });
    test('words starting with different vowel', () => {
        expect(translate("else")).toEqual("elseway");
    });
    // tests for words beginning with consonants
    test('words starting with one consonant', () => {
        expect(translate("giraffe")).toEqual("iraffegay");
    });
    test('words starting with one consonant', () => {
        expect(translate("horse")).toEqual("orsehay");
    });
    // tests for words beginning with two consonants
    test('words starting with two consonants', () => {
        expect(translate("chonk")).toEqual("onkchay");
    });
    // tests for words beginning with THREE consonants
    test('words starting with three consonants', () => {
        expect(translate("schnapps")).toEqual("appsschnay");
    });
});