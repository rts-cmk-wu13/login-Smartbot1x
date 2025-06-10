import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <header></header>

      <main>
        <Outlet />
      </main>

      <footer className="">
        <small className="">&copy; {new Date().getFullYear()} My App.</small>
      </footer>
    </>
  );
}

export default App;
