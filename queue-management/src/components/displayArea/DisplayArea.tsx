import type { Query } from "../parent/Parent";

type DisplayAreaProps = {
  query: Query[];
};

const DisplayArea = ({ query }: DisplayAreaProps) => {
  return (
    <section className="flex flex-col gap-4">
      {query.length === 0 ? (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <p className="text-gray-500">No queries submitted yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Submitted Queries</h2>

          {query.map((item) => (
            <article
              key={item.id}
              className="bg-white p-4 rounded-lg border border-gray-300 shadow-md hover:border-blue-500 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>

              <p className="text-sm text-gray-600">{item.email}</p>

              <p className="mt-2 text-gray-700">
                <span className="font-medium">Query type:</span> {item.query}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default DisplayArea;
