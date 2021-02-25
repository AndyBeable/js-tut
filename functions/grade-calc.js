// two arguments - student score, total possible score
// Present letter grade and student score as %. eg. 15/20  -> You got a C (75%)
// A 90 - 100, B 80-89, C 70-70, D, 60-69, F 0-59

let gradeCalc1 = function (studentScore, maxScore = 20) {
  let score = (studentScore / maxScore) * 100;

  if (score >= 90) {
    return `You got an A ${score}%`;
  } else if (score >= 80) {
    return `You got a B ${score}%`;
  } else if (score >= 70) {
    return `You got a C ${score}%`;
  } else if (score >= 60) {
    return `You got a D ${score}%`;
  } else {
    return `You got an F ${score}%`;
  }
};

let studentOne = gradeCalc1(15);
console.log(studentOne);

// REFACTOR

const gradeCalc2 = function (studentScore, maxScore = 20) {
  const percent = (studentScore / maxScore) * 100;
  let letterGrade = '';

  if (score >= 90) {
    letterGrade = 'A';
  } else if (score >= 80) {
    letterGrade = 'B';
  }

  return `You got an ${letterGrade} ${percent}%`;
};

const result = gradeCalc2(19);
console.log(result);
