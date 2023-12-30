import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

const Root = () => {
  return (
    <>
      <Navbar />
      {/* for sharing in between components */}
      <Outlet />
    </>
  );
};

export default Root;
