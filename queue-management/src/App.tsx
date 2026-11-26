import "./App.css";
import Parent from "./components/parent/Parent";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-16 bg-gray-100 dark:bg-gray-800 shadow-md">
        <h1 className="flex text-blue-600 dark:text-sky-400 text-2xl font-bold">
          Queue Management
        </h1>
      </div>
      <Parent />
    </>
  );
}

export default App;
