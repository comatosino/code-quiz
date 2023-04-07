import { RootState, useAppDispatch, useAppSelector } from "../store";
import { setPage } from "../store/page";
import { PAGE } from "../@types";

export const useNavigate = () => {
  const page = useAppSelector((state: RootState) => state.page.index);
  const dispatch = useAppDispatch();

  return {
    page,
    setPage: (page: PAGE) => {
      dispatch(setPage(page));
    },
  };
};
