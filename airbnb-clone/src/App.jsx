import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return(
    <Router>
      <div className="font-sans bg-gray-50 text-gray-800">
        <Navbar />
        <main className="pt-20 px-4">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
