import { Outlet } from "react-router-dom";
import MenuComponent from "./components/Menu.component";
import { ConfigProvider } from "antd";
import { theme } from "./theme";

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <MenuComponent />
      <Outlet />
    </ConfigProvider>
  );
};

export default App;
