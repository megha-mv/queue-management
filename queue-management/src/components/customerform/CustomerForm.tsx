import { useState } from "react";
import { debounce } from "../../utils/debounceFunc";
import type { Query } from "../parent/Parent";

const CustomerForm = ({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<Query[]>>;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "general",
  });

  console.log(formData);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery((prev) => [...prev, formData]);
  };

  return (
    <div className="flex flex-col gap-4 justify-start items-center">
      <form
        className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={debounce(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, name: e.target.value }),
                300,
              )}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={debounce(
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value }),
                300,
              )}
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Query:
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="query"
              onChange={debounce(
                (e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFormData({ ...formData, query: e.target.value }),
                300,
              )}
            >
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
