class VigenereCipheringMachine {
    constructor (direction) {
        this.direction = direction === false ? 'reverse' : 'direct';
    }

    encrypt(input, key) {
        if (!input || !key || input.length <= 0 || key.length <= 0) {
            throw new Error();
        }

        input = input.toUpperCase();
        key = key.toUpperCase();

        let res = [];

        for (let i = 0, j = 0; i < input.length; i++) {
            if (!input[i].match(/[A-Z]/)) {
                res.push(input[i]);
                continue;
            }
            
            let inputCharCode = input[i].charCodeAt(0);
            let keyCharCode = key[j].charCodeAt(0);
            j++;

            if (j >= key.length) {
                j = 0;
            }

            let encrypted = String.fromCharCode((inputCharCode + keyCharCode) % 26 + 65);

            res.push(encrypted);
        }
        
        if (this.direction === 'reverse') {
            res.reverse();
        }

        return res.join('');
    }

    decrypt(encryptedWord, key) {
        if (!encryptedWord || !key || encryptedWord.length <= 0 || key.length <= 0) {
            throw new Error();
        }

        encryptedWord = encryptedWord.toUpperCase();
        key = key.toUpperCase();

        let res = [];

        for (let i = 0, j = 0; i < encryptedWord.length; i++) {
            if (!encryptedWord[i].match(/[A-Z]/)) {
                res.push(encryptedWord[i]);
                continue;
            }

            let encryptedCharCode = encryptedWord[i].charCodeAt();
            let keyCharCode = key[j].charCodeAt();
            j++;

            if (j >= key.length) {
                j = 0;
            }

            let decrypted = String.fromCharCode((encryptedCharCode + 26 - keyCharCode) % 26 + 65);

            res.push(decrypted);
        }

        if (this.direction === 'reverse') {
            res.reverse();
        }

        return res.join('');
    }
}

module.exports = VigenereCipheringMachine;
