class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log('1. True');
    console.log('2. False');
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }
  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}.${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log('Answer: ________________');
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log('Minimum: ________________');
    console.log('Maximum: ________________');
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log('');
  });
}

const questions = [
  new BooleanQuestion('Will I working hard to be a master?'),
  new MultipleChoiceQuestion('What is the latest programming language?', [
    'Rust',
    'Golang',
    'C++',
    'java',
    'JavaScript',
  ]),
  new TextQuestion('Describe your favorite JS feature.'),
  new RangeQuestion('What is the speed limit in your city'),
];

printQuiz(questions);
