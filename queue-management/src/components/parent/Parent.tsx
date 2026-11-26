import { useState } from "react";
import CustomerForm from "../customerform/CustomerForm";
import DisplayArea from "../displayArea/DisplayArea";

export interface Query {
  name: string;
  email: string;
  query: string;
}

const Parent = () => {
  const [query, setQuery] = useState<Query[]>([]);
  return (
    <div data-testid="user-form" className="flex flex-col gap-4">
      <CustomerForm setQuery={setQuery} />
      <DisplayArea query={query} />
    </div>
  );
};

export default Parent;
