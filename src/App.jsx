import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Account from "./components/Account";
import About from "./components/About";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Accountsuccess from "./components/Accountsuccess";

const router = createBrowserRouter([
  {
    path: '/',
    element : <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: '/account',
    element : <div>
      <Navbar/>
      <Account/>
    </div>
  },
  {
    path: '/about',
    element : <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path: '/services',
    element : <div>
      <Navbar/>
      <Services/>
    </div>
  },
  {
    path: '/contact',
    element : <div>
      <Navbar/>
      <Contactus/>
    </div>
  },
  {
    path: '/accountsuccess',
    element : <div>
      <Accountsuccess/>
    </div>
  }
]
);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
