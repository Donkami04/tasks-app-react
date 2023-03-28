import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Users } from "./components/Users/Users";
import { Tasks } from "./components/Tasks/Tasks";
import { Home } from "./components/Home/Home";

export function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
