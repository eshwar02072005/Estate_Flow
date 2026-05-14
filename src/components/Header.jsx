
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-900 text-white px-8 py-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-emerald-400">
        EstateFlow
      </h1>

      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/listings">Properties</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;
