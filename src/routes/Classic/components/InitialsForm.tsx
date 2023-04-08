import { InputGroup, InputLeftAddon, Input, InputRightAddon, Button } from "@chakra-ui/react";
import { Formik, Form, Field, FieldProps, FieldInputProps, FormikHelpers } from "formik";
import { IHighScore } from "../../../@types";

interface IFormProps {
  score: number;
  setHighScores: React.Dispatch<React.SetStateAction<IHighScore[]>>;
}

interface IFormValues {
  initials?: string;
}

export const InitialsForm: React.FC<IFormProps> = (): JSX.Element => {
  const handleSubmit = ({ initials }: IFormValues, { resetForm }: FormikHelpers<IFormValues>) => {
    // setHighScores((prevScores) => {
    //   const newScores = [...prevScores];
    //   const newEntry: IHighScore = { initials: initials.toUpperCase(), score };

    //   let i = 0;
    //   let curr;
    //   do {
    //     curr = newScores[i];
    //     if (!curr) {
    //       newScores.push(newEntry);
    //       break;
    //     }
    //     if (score > curr?.score) {
    //       newScores.splice(i, 0, newEntry);
    //       break;
    //     }
    //     i++;
    //   } while (curr);

    //   return newScores;
    // });
    resetForm();
  };

  return (
    <Formik initialValues={{ initials: "" }} onSubmit={handleSubmit}>
      {({ values, handleReset }) => (
        <Form style={{ width: "100%" }}>
          <InputGroup alignSelf="center">
            <InputLeftAddon children={`Your Score: ${0}`} />
            <Field name="initials">
              {({ field }: FieldProps<string, IFormValues>) => (
                <Input
                  {...field}
                  value={field.value.toUpperCase()}
                  type="text"
                  maxLength={3}
                  placeholder="...save your initials?"
                  borderLeftRadius="none"
                />
              )}
            </Field>
            <InputRightAddon
              p={0}
              bgColor="transparent"
              border="none"
              children={
                <>
                  {values.initials && (
                    <Button type="button" onClick={handleReset}>
                      Clear
                    </Button>
                  )}
                  <Button type="submit">Save</Button>
                </>
              }
            ></InputRightAddon>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};
