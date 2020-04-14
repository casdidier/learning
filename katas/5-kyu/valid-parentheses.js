// https://www.codewars.com/kata/valid-parentheses/train/javascript

function validParentheses(parens) {
    return parens.split('').filter(x => x !== ' ').reduce((sum, cur) => {
        // console.log("sum", sum);
        if (cur === '(') { sum += 1; }
        else if (cur === ')') { sum -= 1; }
        return sum;
    }, 0) === 0;
}





console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);