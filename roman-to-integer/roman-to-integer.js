/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let skipNext = false;
    let values = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }
    for (var i = 0; i < s.length; i++) {
            if (skipNext === true) {
                skipNext = false;
            } else {
                if (s[i] === 'C' && s[i+1] === 'M') {
                    sum += values['CM'];
                    skipNext = true;
                } else if (s[i] === 'C' && s[i+1] === 'D') {
                    sum += values['CD'];
                    skipNext = true;
                } else if (s[i] === 'X' && s[i+1] === 'C') {
                    sum += values['XC'];
                    skipNext = true;
                } else if (s[i] === 'X' && s[i+1] === 'L') {
                    sum += values['XL'];
                    skipNext = true;
                } else if (s[i] === 'I' && s[i+1] === 'X') {
                    sum += values['IX'];
                    skipNext = true;
                } else if (s[i] === 'I' && s[i+1] === 'V') {
                    sum += values['IV'];
                    skipNext = true;
                } else {
                    sum += values[s[i]];
                }
                
            }
           
        }
        return sum;
};