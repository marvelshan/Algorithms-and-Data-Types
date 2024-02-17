function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case 'boolean':
        console.log('1. True');
        console.log('2. False');
        break;
      case 'multipleChoice':
        question.option.forEach((option, index) => {
          console.log(`${index + 1}.${option}`);
        });
        break;
      case 'text':
        console.log('Answer: ________________');
        break;
      case 'range':
        console.log('Minimum: ________________');
        console.log('Maximum: ________________');
        break;
    }
    console.log('');
  });
}
const questions = [
  {
    type: 'boolean',
    description: 'Will I working hard to be a master?',
  },
  {
    type: 'multipleChoice',
    description: 'What is the latest programming language?',
    option: ['Rust', 'Golang', 'C++', 'java', 'JavaScript'],
  },
  {
    type: 'text',
    description: 'Describe your favorite JS feature.',
  },
  {
    type: 'range',
    description: 'What is the speed limit in your city',
  },
];
printQuiz(questions);
