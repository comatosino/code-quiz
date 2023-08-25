import { useRef, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { HStack, PinInput, PinInputField, Button, Stack } from "@chakra-ui/react";
import { useGetLastScore, useHighScores } from "../hooks";

interface IFormProps {
  last_game_score: number | null;
}

export const InitialsForm: React.FC<IFormProps> = ({ last_game_score }): JSX.Element => {
  const navigate = useNavigate();
  const { resetLastScore } = useGetLastScore();
  const { saveHighScore } = useHighScores();
  const [initials, setInitials] = useState({ uno: "", dos: "", tres: "" });

  const btnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setInitials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (last_game_score === undefined || null) {
      throw new Error("error: score not found");
    }
    saveHighScore({
      initials: Object.values(initials).join(""),
      score: last_game_score as number,
    });
    resetLastScore();
    navigate("/quiz-legacy/scores", { replace: true });
  };

  const handleQuit = () => {
    resetLastScore();
    navigate("/quiz-legacy", { replace: true });
  };

  const handleComplete = () => {
    btnRef?.current?.focus();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    // return focus to the last PinInputField
    if (e.key === "Backspace") {
      inputRef?.current?.focus();
    }
  };

  if (last_game_score === null || last_game_score === undefined) {
    navigate("/quiz-legacy", { replace: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <HStack>
          <PinInput
            autoFocus
            type="alphanumeric"
            size="lg"
            placeholder=""
            onComplete={handleComplete}
          >
            <PinInputField name="uno" maxLength={1} onInput={handleInput} />
            <PinInputField name="dos" maxLength={1} onInput={handleInput} />
            <PinInputField ref={inputRef} name="tres" maxLength={1} onInput={handleInput} />
          </PinInput>
        </HStack>
        <Stack pt={5} spacing={5}>
          <Button ref={btnRef} type="submit" onKeyDown={handleKeyDown}>
            Save
          </Button>
          <Button onClick={handleQuit}>Quit</Button>
        </Stack>
      </Stack>
    </form>
  );
};
