import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../features/themeSwitcher/themeSlice";

export default function useThemeSwitcher() {
  const is_dark_theme = useSelector((state) => state.theme.is_dark_theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggle());
  };

  return { is_dark_theme, toggleTheme };
}
