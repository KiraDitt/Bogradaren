import MenuBar from './MenuBar'; 

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main> 
      <MenuBar />  
    </div>
  );
};

export default Layout; 
