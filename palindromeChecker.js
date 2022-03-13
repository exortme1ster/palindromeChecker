function palindrome(str) {
  const regex = /[^A-Za-z0-9]/g;
  const newStr = str.replace(regex, "");
  let result = newStr.toLowerCase();
  let reverse = result.split("").reverse().join("");

  let flag = false;
  let resL = result.length;
  let revL = reverse.length;
  if(resL === revL) {
    for(let i = 0; i < result.length; i++){
      if(result[i] == reverse[i]) {
        flag = true;
      } else {
        return false;
      }
    }
  }

  console.log(flag);
  return flag;
}