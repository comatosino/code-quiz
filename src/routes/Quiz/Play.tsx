import { useEffect, useState } from "react";

export const Play: React.FC = () => {
  const [questions, setQuestions] = useState<OtdbQuestion[] | null>(null);

  useEffect(() => {
    console.log(questions);
    if (!questions) {
      fetchQuestions();
    }
  }, []);

  const fetchQuestions = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=10"); // 10 random questions
    const data: OtdbResponse = await response.json();
    setQuestions(data.results);
  };

  if (!questions) {
    return <div>...fetching questions</div>;
  }

  return (
    <div>
      {questions.map((q, i) => (
        <p key={i}>{q.question}</p>
      ))}
    </div>
  );
};
