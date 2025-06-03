import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import PortfolioForm from "./components/PortfolioForm";
import PreviewCard from "./components/PreviewCard";
import ModernTemplate from "./components/templates/ModernTemplate";
import ClassicTemplate from "./components/templates/ClassicTemplate";
import ThemeSelector from './components/ThemeSelector';
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import Register from './pages/Register';
import Templates from './pages/Templates';
import PublicPortfolio from './pages/PublicPortfolio';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Navbar outside Routes so it shows on every page */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
                <ProtectedRoute>
                <Dashboard />
                </ProtectedRoute>
            }
          />
          <Route
            path="/templates"
            element={
                <ProtectedRoute>
                  <Templates />
                  </ProtectedRoute>
            }
          />
          <Route
            path="/portfolio/:id"
            element={
                <ProtectedRoute>
                  <PublicPortfolio />
                </ProtectedRoute>
            }
          />
          <Route
            path="/templates/modern"
            element={
                <ProtectedRoute>
                  <ModernTemplate />
                </ProtectedRoute>
            }
          />
          <Route
            path="/templates/minimal"
            element={
              <ProtectedRoute>
              <ClassicTemplate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
