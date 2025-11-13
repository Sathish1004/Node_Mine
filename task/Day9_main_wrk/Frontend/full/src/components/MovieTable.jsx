const MovieTable = ({ movies }) => (
  <div className="overflow-x-auto mt-4">
    <h2 className="text-xl font-semibold mb-2">Movies Table</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Genre</th>
          <th className="border px-4 py-2">Year</th>
          <th className="border px-4 py-2">Rating</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((m, i) => (
          <tr key={i}>
            <td className="border px-4 py-2">{m.title}</td>
            <td className="border px-4 py-2">{m.genre}</td>
            <td className="border px-4 py-2">{m.year}</td>
            <td className="border px-4 py-2">{m.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MovieTable;
