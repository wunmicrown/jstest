//1.
const nameString = "Pamilerin";
const index = 6;
const result = specifiedInd(nameString, index);
function specifiedInd(nameString, index) {
  if (nameString) {
    const char = nameString.charAt(index);
    console.log(char);
  } else {
    alert(" error handling if the index is out of bounds");
  }
}

//2.
const programStr = "pprogrammingg";
const rslt = fndFirstNonRepeatedChar(programStr);
console.log(`The first non-repeated character is: `+ rslt);

function fndFirstNonRepeatedChar(programStr) {
  const charCount = {};
  for (let p = 0; p < programStr.length; p++) {
    const char = programStr.charAt(p);
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let p = 0; p < programStr.length; p++) {
    const char = programStr.charAt(p);
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}
5.
const string1 = "Olushola ";
const string2 = "bidemi";
const concatenate = concatenateString(string1, string2);
console.log(concatenate);
function concatenateString() {
  return string1.concat(string2);
}
//6.
const myName = ["Olayiwola", " ", "Blessing", " ", "Pamilerin"];
const joiningString = joiningStr(myName);
console.log(joiningString);
function joiningStr(myName) {
  return myName.concat().join("");
}
//7.
const world = ["world", " ", "Best"];
const concatString = concatStr(world);
console.log(concatString);
function concatStr(world) {
  return world.concat().join("");
}
//8.
const lgString = "This is a larger belt";
const subs = "larger";
function Subs(subs, lgString) {
  return lgString.includes(subs);
}
if (Subs(subs, lgString)) {
  console.log("it is a larger belt");
} else {
  console.log(" is not a larger belt");
}

//12.
const originalString = "Stay Focused";
const startIndex = 5;
const endIndex = 12;

const extractedSubstring = extractSubstring(
  originalString,
  startIndex,
  endIndex
);
console.log(extractedSubstring);
function extractSubstring(str, startIndex, endIndex) {
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > startIndex.length) {
    endIndex = startIndex.length;
  }
  return str.slice(startIndex, endIndex);
}
//13.
const need = "Erin";
const stIndex = 3;
const ndIndex = "4";
const extractStrings = stringsExtract(need, stIndex, ndIndex);
console.log(extractStrings);
function stringsExtract(ans, stIndex, ndIndex) {
  if (stIndex < 0) {
    stIndex = 0;
  }
  if (ndIndex > stIndex.length) {
    ndIndex = stIndex.length;
  }
  return ans.slice(stIndex, ndIndex);
}
//15.
const text = "Individual person ";
const textrslt1 = text.substring(10, 17);
const textans = textAns(text, textrslt1);
function textAns(textrslt1) {
  console.log(textrslt1);
}
//16.
const lgReverse = "Larger strings reverse";
const reverse = "Larger";
console.log(reverse);

//17.
function lowerCase(lowerCase) {
  return lowerCase.toLowerCase();
}
const lowerName = "ABIODUN GRACE";
const lowerResult = lowerCase(lowerName);
console.log(lowerResult);

//18.
function notEqualString(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
const upperItem = "Spoon";
const lowerItem = "Jug";
const toLowerNmResult = notEqualString(upperItem, lowerItem);
console.log(toLowerNmResult);

//19.
const sentence = "my name is omolayo erinfolami";
const sentenceRslt = wordToCapitalize(sentence);
console.log(sentenceRslt);

function wordToCapitalize(sentence) {
  const words = sentence.split(" ");
  console.log(words);
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return "";
    }
  });
  const capitalizedSentence = capitalizedWords.join(" ");
  return capitalizedSentence;
}
//20.
function isAllUppercase(InputString) {
  return InputString === InputString.toUpperCase();
}
const countryOne = "Swenden";
const country2NotInUpper = "UNITED KINGDOM";

console.log(isAllUppercase(countryOne));
console.log(isAllUppercase(country2NotInUpper));

//21.
const myString = "Hello, World!";
const mySubstring = "World!";

console.log(Substring(myString, mySubstring));
function Substring(myString, mySubstring) {
  return myString.endsWith(mySubstring);
}
//22.
//
//23
function startsWithPrefix(inputString, prefix) {
  return inputString.startsWith(prefix);
}
var str = "Hello,there!";
var prefix = "Hello";
if (startsWithPrefix(str, prefix)) {
  console.log("The string " + str + " starts with the prefix " + prefix);
} else {
  console.log(
    "The string " + str + "does not starts with the prefix " + prefix
  );

  // }
  //24

  //26

  //27
  function removeWhitespace(inputString) {
    return inputString.trimEnd();
  }

  const TrailingWhitespace = "This is a string with trailing whitespace.    ";
  const cleanstr = removeWhitespace(TrailingWhitespace);
  console.log(cleanstr);

  function trimUsernames(usernames) {
    return usernames.map((username) => username.trimEnd());
  }

  var nameOfUsers = ["Josh", "  Ibukun", "Precious"];
  var trimmedUsernames = trimUsernames(nameOfUsers.slice());

  console.log(nameOfUsers);
  console.log(trimmedUsernames);

  //28

  //29
  function removeLeadingWhitespace(inputString) {
    return inputString.trimStart();
  }
  const strWithLeadingWhitespace =
    "    This is a string with leading whitespace.";
  const cleanedStrs = removeLeadingWhitespace(strWithLeadingWhitespace);
  console.log(strWithLeadingWhitespace);
  console.log(cleanedStrs);

  //30
  function trimUsernames(usernames) {
    return usernames.map((username) => username.trimStart());
  }
  var usernames = ["bidemi", " iwahlola", "peter"];
  var trimmedUsernames = trimUsernames(usernames);

  console.log("Original usernames:");
  console.log(usernames);
  console.log("Usernames after removing leading spaces:");
  console.log(trimmedUsernames);

  // 31
  function repeatStr(inputStr, timestoBeRepeated) {
    return inputStr.repeat(timestoBeRepeated);
  }
  var originalStrig = " spoon";
  var repeatedString = repeatStr(originalStrig, 5);
  console.log(originalStrig);
  console.log(repeatedString);

  //32
  function repeatString(stringWanttoRepeat, times) {
    return stringWanttoRepeat.repeat(times);
  }
  var helloStr = "Hello String, ";
  var stringRepeated = repeatString(helloStr, 3);
  console.log("Original string:");
  console.log(helloStr);
  console.log("String repeated 3 times:");
  console.log(stringRepeated);
}
