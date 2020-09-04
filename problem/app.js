let findOppositeNumber = (n, firstNum) => {
  let space = n / 2;
  if (firstNum > space) {
    return firstNum - space;
  } else {
    return firstNum + space;
  }
}

console.log(findOppositeNumber(12, 1));

let merge2String = (str1, str2) => {
  let c = "";
  let str3;
  if (str1.length >= str2.length) {
    str3 = str1.slice(str2.length);
    for (let i = 0; i < str2.length; i++) {
      c += str1[i] + str2[i];
    }
  } else {
    str3 = str2.slice(str1.length);
    for (let i = 0; i < str1.length; i++) {
      c += str1[i] + str2[i];
    }
  }

  return c + str3;
}

console.log(merge2String("aaa", "sssss"));

