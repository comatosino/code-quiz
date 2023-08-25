import { useEffect, useState } from "react";
import { api } from "../../utils/api";

const useQuestions = () => {
  const [questions, setQuestions] = useState<OtdbQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await api.questions.default();
      setQuestions(response.data.results);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { questions, loading, error };
};

export const Play: React.FC = () => {
  const { questions, loading, error } = useQuestions();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>...loading questions</div>;
  }

  return (
    <div>
      {questions?.map((q, i) => (
        <p key={i}>{q.question}</p>
      ))}
    </div>
  );
};
