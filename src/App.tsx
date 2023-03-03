import { Landing } from './pages/landing';
import { Question } from './pages/question';
import { useState } from 'react';
import { BestMatch } from './pages/best-match';
import { questions } from './data';

function App() {
  const [isComplete, setIsComplete] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  if (showQuestion && !isComplete) {
    return <Question questions={questions} onComplete={setIsComplete} />;
  }
  if (isComplete) {
    return (
      <BestMatch
        onReset={() => {
          setIsComplete(false);
          setShowQuestion(false);
        }}
      />
    );
  }
  return <Landing setShowQuestion={setShowQuestion} />;
}

export default App;
