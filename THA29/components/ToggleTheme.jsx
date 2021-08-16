import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../actions";

const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="toggle-theme">
      <button className={theme ? "btn btn-light" : "btn btn-dark"}
        onClick=
        {() => {
          dispatch(toggleTheme());
        }}
        >{theme ? "Light" : "Dark"}
      </button>
    </div>
  );
};
export default ToggleTheme;
