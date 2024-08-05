import { AuthContextProvider } from "../_utils/auth-context";
import Sidebar from "../components/SideMenu";


const Layout = ({ children }) => {
  return (
    
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-5 w-full">
        <AuthContextProvider>{children}</AuthContextProvider>
        </div>
      </div>
    
  );
};

export default Layout;
