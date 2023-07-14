import MainSignInPage from "./components/SignIn/MainSignInPage";
import DashboardMainPage from "./components/Dashboard/DashboardMainPage"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <MainSignInPage />
      <DashboardMainPage /> */}

      <Routes>
        <Route path="/"  element={<MainSignInPage />}/>
        <Route path="/dashboard"  element={<DashboardMainPage />}/>
      </Routes>
    </div>
  );
}

export default App;
