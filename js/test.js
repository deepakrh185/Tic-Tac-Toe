const value = 5;
const stringValue = value.toString();
let evenValue = "";
let oddValue = "";
for (var i = 0; i < stringValue.length; i++) {
  if (i % 2 == 0) {
    evenValue += stringValue[i];
  } else oddValue += stringValue[i];
}
console.log("even", evenValue);
console.log(oddValue);

const result = Number(evenValue) + Number(oddValue);
console.log(result)
