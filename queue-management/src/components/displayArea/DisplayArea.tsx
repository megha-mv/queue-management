import type { Query } from "../parent/Parent";

const DisplayArea = ({ query }: { query: Query[] }) => {
  console.log("DisplayArea query:", typeof query); // Debugging line to check the value of query
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4">Display Area</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-700">
            This is the display area where you can show information.
          </p>
          {query.length > 0 ? (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Submitted Queries:</h2>
              <ul className="list-disc pl-5">
                {query.map((q, index) => (
                  <li key={index} className="text-gray-700">
                    <strong>{q.name}</strong> - {q.email}: {q.query}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500">No queries submitted yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayArea;
