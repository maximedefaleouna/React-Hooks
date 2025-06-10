import Hooks from "./features/custom-hooks/useCounter";
import UseCallback from "./features/useCallback";
import UseContext from "./features/useContext";
import UseEffect from "./features/useEffect";
import UseMemo from "./features/useMemo";
import UseReducer from "./features/useReducer";
import UseRef from "./features/useRef";
import UseState from "./features/useState";

function App() {
  return (
    <>
      <div className="App">
        <h1>les hooks en react</h1>
        <UseState />
        <UseEffect />
        <UseContext />
        <UseReducer />
        <UseCallback />
        <UseMemo />
        <UseRef />
        <Hooks />
      </div>
    </>
  );
}

export default App;
