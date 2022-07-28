module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const LEN = str.length;
  const ConfigLen = bracketsConfig.length;
  let OPEN_BRACKETS = [];
  let  BRACKETS_PAIR = {};

  for (let j = 0; j < ConfigLen; j++){
    OPEN_BRACKETS.push(bracketsConfig[j][0]);
    BRACKETS_PAIR[bracketsConfig[j][1]] = bracketsConfig[j][0];
  }

  for (let i = 0; i < LEN; i++){
    let current = str[i];

    if (OPEN_BRACKETS.includes(current)){
      if (BRACKETS_PAIR[current] !== current) {
        stack.push(current);
      } else {
        if (stack.length === 0 || stack[stack.length-1] != current){
          stack.push(current);
        } else {
          stack.pop();
        }
      }
    } else {
        if (stack.length === 0) {
          return false;
        } else {
        let top = stack[stack.length-1]
    
        if (BRACKETS_PAIR[current] === top){
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}