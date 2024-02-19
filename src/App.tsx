import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import { theme } from "./theme";
import MenuComponent from "./common/components/Menu.component";

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <MenuComponent />
      <Outlet />
    </ConfigProvider>
  );
};

export default App;
