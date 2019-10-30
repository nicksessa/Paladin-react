export const myAlert = () => alert("hi from my functionDir alert")

export const customAlert = (custText) => alert(custText)

export 
function rollDie (dieType) {
    let result = Math.floor(Math.random() * dieType + 1);
  return result
}