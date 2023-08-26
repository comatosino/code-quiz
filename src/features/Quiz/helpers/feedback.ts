import { UseToastOptions } from "@chakra-ui/react";

export const correct: UseToastOptions = {
  title: "Correct!",
  status: "success",
  position: "top",
  duration: 1000,
  variant: "subtle",
};

export const incorrect: UseToastOptions = {
  title: "Incorrect ",
  status: "error",
  position: "top",
  duration: 1000,
  variant: "subtle",
};
