import { Outlet } from "react-router-dom";
import MenuComponent from "./components/Menu.component";

const App = () => {
  return (
    <>
      <MenuComponent />
      <Outlet />
    </>
  );
};

export default App;
