import "./App.css";
import Parent from "./components/parent/Parent";

function App() {
  return (
    <>
      <div className="flex">
        <h1 className="flex text-blue-600 dark:text-sky-400">
          Queue Management
        </h1>
      </div>
      <Parent />
    </>
  );
}

export default App;
