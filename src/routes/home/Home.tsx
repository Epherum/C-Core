import { FunctionComponent, memo, useCallback, useState } from "react";

import { HomeProps } from "./home.props";
import { Wrapper } from './home.style';
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import { Outlet, useMatch } from "react-router-dom";
import { Device, DeviceContext } from "../../interfaces/DeviceContext";
import { motion } from "framer-motion";
import AddDevice from "../../components/popups/addDevice/AddDevice";

const Home: FunctionComponent<HomeProps> = ({ toggleTheme }) => { 
  const match = useMatch("/home/addDevice");
  const showPopup = !!match;

  const [devices, setDevices] = useState<Device[]>([]);
  const addDeviceToDashboard = useCallback((deviceName: string, deviceType: string, deviceId: string) => {
    setDevices(prevDevices => [...prevDevices, { deviceName, deviceType, deviceId }]);
  }, []);
  //Constant Rerenders when tyying to add a device
  
  return (
    <Wrapper>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 1.5}}
      >
        <Header toggleTheme={toggleTheme}/>
        <motion.div
        className="homeContainer"
        initial={{ opacity: 1 }}
        animate={{ opacity: showPopup ? 0 : 1 }}
      >
          <Menu/>
          <DeviceContext.Provider value={{ devices, addDeviceToDashboard }}>
            <motion.div
              className="outletContainer"
              key={window.location.pathname}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.5 }}
            >
              <Outlet />
            </motion.div>
          </DeviceContext.Provider>
        </motion.div>
        {showPopup && <AddDevice />}
      </motion.div>
    </Wrapper>
  );
};

export default memo(Home);