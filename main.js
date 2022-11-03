/* 
👉 Write your kata here!
*/
//Ive lost my pyjamas
//array of strings of anagrams of different types of clothes and you have to return "pyjamas"
//The challenge is to return the position of the array that contains the string pyjamas
//Asnwer must be a number

//👉 Write the function your CodeWarriors will start with below here:
export function findPyjamas(arr) {
  //   let wordReg = null;
  for (let i = 0; i < arr.length; i++) {
    // console.log((arr[i].match(/[pyjamas]/g) || []).length);
    if ((arr[i].match(/[pyjamas]/g) || []).length === arr[i].length) {
      return i;
    }
  }

  //CODE GOES HERE
}

// console.log(findPyjamas(["cosks", "ath", "ckjtae", "saamypj", "olgevs"]));
// ;
