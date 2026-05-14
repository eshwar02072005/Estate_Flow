
function Dashboard() {
  return (
    <div className="p-10 bg-slate-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold">
            Saved Properties
          </h2>

          <p className="text-5xl mt-5 text-emerald-600">
            12
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold">
            Favorites
          </h2>

          <p className="text-5xl mt-5 text-emerald-600">
            5
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold">
            Contact Requests
          </h2>

          <p className="text-5xl mt-5 text-emerald-600">
            8
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
