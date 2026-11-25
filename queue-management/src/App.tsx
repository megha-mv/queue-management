import "./App.css";
import CustomerForm from "./components/customerform/CustomerForm";

function App() {
  return (
    <>
      <h1>Queue Management</h1>
      <div data-testid="user-form" className="user-form">
        <h1>Enter query Details</h1>
        <CustomerForm />
      </div>
    </>
  );
}

export default App;
