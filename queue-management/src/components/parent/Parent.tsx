import { useState } from "react";
import CustomerForm from "../customerform/CustomerForm";
import DisplayArea from "../displayArea/DisplayArea";

export interface Query {
  id: string;
  name: string;
  email: string;
  query: string;
}

const Parent = () => {
  const [query, setQuery] = useState<Query[]>([]);

  return (
    <div
      data-testid="user-form"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start items-center justify-center p-4 md:p-8 lg:p-12"
    >
      <CustomerForm setQuery={setQuery} />
      <DisplayArea query={query} />
    </div>
  );
};

export default Parent;
