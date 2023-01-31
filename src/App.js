import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Watch from "./Watch";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Header />
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <div className='app___body'>
                    <Sidebar />
                    <Feed />
                    <Widgets />
                    {/* <Watch /> */}
                  </div>
                }
              />
              <Route
                exact
                path='/watch'
                element={
                  <div className='app___body'>
                    <Watch />
                  </div>
                }
              />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
