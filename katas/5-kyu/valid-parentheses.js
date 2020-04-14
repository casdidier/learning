// https://www.codewars.com/kata/valid-parentheses/train/javascript



function validParentheses(parens) {
    const values = {
        '(': 1,
        ')': -1
    }

    let sum = 0;
    for (let i = 0; i < parens.length; i++) {
        const paren  = parens[i];
              sum   += values[paren];
        if (sum < 0) {
            return false;
        }
    }

    return sum === 0;
}


function validParentheses(parens) {
    let sum = parens.split('').reduce((sum, cur) => {
        // console.log("sum", sum);
        if (cur === '(') { sum += 1; }
        else if (cur === ')') { sum -= 1; }
        return sum;
    }, 0);

    if (sum < 0) return false;

    return sum === 0;
}


function validParentheses(parens, sum = 0) {
    return Array.prototype.every.call(parens, (paren) => {
        sum += {
            '(': 1,
            ')': -1
        }[paren];
        return sum >= 0;
    }) && sum === 0;
}




console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);