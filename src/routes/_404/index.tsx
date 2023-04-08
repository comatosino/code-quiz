import { PageHeading } from "../../components/PageHeading";

export const _404: React.FC = (): JSX.Element => {
  document.title = "Quiz Game - 404";
  return (
    <>
      <PageHeading>404 Not Found</PageHeading>
    </>
  );
};
