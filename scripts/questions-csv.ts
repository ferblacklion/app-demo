import * as fs from 'fs';
type Answer = {
  answerName: string;
  answerId: number;
};
type Question = {
  questionId: number;
  questionName: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    questionId: 1,
    questionName: 'What is you favorite color?',
    answers: [
      {
        answerName: 'Red',
        answerId: 11,
      },
      {
        answerName: 'Blue',
        answerId: 12,
      },
    ],
  },
  {
    questionId: 2,
    questionName: 'Are you a flat-earther?',
    answers: [
      {
        answerName: 'Yes',
        answerId: 21,
      },
      {
        answerName: 'No',
        answerId: 22,
      },
      {
        answerName: 'maybe',
        answerId: 23,
      },
    ],
  },
  {
    questionId: 3,
    questionName: 'Do you like coffee?',
    answers: [
      {
        answerName: 'Yes',
        answerId: 21,
      },
      {
        answerName: 'No',
        answerId: 22,
      },
    ],
  },
];

const headers = questions.reduce((acc, cur) => [...acc, cur.questionName], []);
const parseData = questions.reduce((acc, current) => {
  const t = current.answers.reduce((accA, currentA) => {
    return [...accA, { [current.questionName]: currentA.answerName }];
  }, []);
  return [...acc, ...t];
}, []);

const csvRows = [];

csvRows.push(headers.join(','));

for (const row of parseData) {
  const values = headers.map((header) =>
    row[header] ? `"${row[header]}"` : '',
  );

  csvRows.push(values.join(','));
}

const csvString = csvRows.join('\n');

fs.writeFile('./scripts/data.csv', csvString, 'utf-8', (err) => {
  if (err) console.log(err);
  else console.log('Data saved');
});
