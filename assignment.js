
function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }

  const totalIncome = income - expenses;
  const CalculatedTax = totalIncome * 0.2;
  return CalculatedTax;
}



function sendNotification(email) {
  if (
    email.indexOf("@") === -1 ||
    email.startsWith("@") ||
    email.endsWith("@") ||
    email.indexOf("@") !== email.lastIndexOf("@")
  ) {
    return "Invalid Email";
  }

  const cut = email.split("@");
  const userName = cut[0];
  const domainName = cut[1];

  return `${userName} sent you an email from ${domainName}`;
}


function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  const findNumber = /\d/;
  if (findNumber.test(name)) {
    return true;
  } else {
    return false;
  }
}



function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  }

  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    obj.testScore < 0 ||
    obj.testScore > 50 ||
    typeof obj.schoolGrade !== "number" ||
    obj.schoolGrade < 0 ||
    obj.schoolGrade > 30 ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let finalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    finalScore += 20;
  }

  return finalScore >= 80;
}



function  waitingTime(waitingTimes  , serialNumber) {
    
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }
    let count = 0;
    for(const wait of waitingTimes){
          count += wait 
    }
   const size = waitingTimes.length
    const avg = Math.round(count/size)
    if(serialNumber <= size){
      return 'Invalid Input'
    }  
    const serialLeft = serialNumber - 1 -size;
    const totalWaitingTime = serialLeft * avg;
    return totalWaitingTime;
}

