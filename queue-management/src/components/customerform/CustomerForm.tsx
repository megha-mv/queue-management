import { useState } from "react";
import { debounce } from "../../utils/debounceFunc";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "general",
  });

  console.log(formData);

  return (
    <div>
      <form>
        <label>
          Name:
          <input
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
        <label>
          Email:
          <input
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
        <label>
          Query:
          <select
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomerForm;
