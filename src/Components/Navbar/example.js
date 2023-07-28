function StringChallenge(str) {
    let encodedStr = "";
    let count = 1;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        encodedStr += count + str[i];
        count = 1;
      }
    }
  
    let ChallengeToken = "bo1knvmyje65";
    let finalOutput = encodedStr + ChallengeToken;
  
    let modifiedOutput = "";
    for (let i = 0; i < finalOutput.length; i++) {
      modifiedOutput += finalOutput[i];
      if ((i + 1) % 3 === 0) {
        modifiedOutput += "X";
      }
    }
  
    return modifiedOutput;
  }
  
  