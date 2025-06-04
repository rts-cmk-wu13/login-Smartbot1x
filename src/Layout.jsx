import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header></header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>&copy; {new Date().getFullYear()} My App.</small>
      </footer>
    </>
  );
}

export default App;
