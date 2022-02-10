import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import Header from "./components/composites/Header";
import ListInput from "./components/ListInput";
import DataDisplay from "./components/DataDisplay";
import Footer from "./components/Footer";
import MuiCard from './components/MuiCard';
import Button from '@mui/material/Button';
import RecipeList from "./pages/RecipeList";
import Home from "./pages/Home";
import Help from "./pages/Help";
import TestingArea from "./pages/TestingArea";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/utility/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ minHeight: "75vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/recipes"
            element={
              <PrivateRoute>
                <RecipeList />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/testing" element={<TestingArea />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
