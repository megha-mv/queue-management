import { useCallback, useState } from "react";
import type { Query } from "../parent/Parent";

type CustomerFormData = Omit<Query, "id">;

const initialFormData: CustomerFormData = {
  name: "",
  email: "",
  query: "",
};

const CustomerForm = ({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<Query[]>>;
}) => {
  const [formData, setFormData] = useState<CustomerFormData>(initialFormData);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;

      setFormData((previousData) => ({
        ...previousData,
        [name]: value,
      }));
    },
    [],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setQuery((previousQueries) => [
      ...previousQueries,
      {
        ...formData,
        id: crypto.randomUUID(),
      },
    ]);

    setFormData(initialFormData);
  };

  return (
    <div className="flex flex-col gap-4 justify-start items-center">
      <form
        className="max-w-lg mx-auto p-4 bg-blue-50 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Query</h1>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
            <input
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </label>

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
            <input
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </label>

          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="query"
          >
            Query:
            <select
              id="query"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="query"
              value={formData.query}
              onChange={handleChange}
            >
              <option value="">--- Select Service ---</option>
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
