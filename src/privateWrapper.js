import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateWrapper = (props) => {
  const location = useLocation();
  const { auth } = props;

  if (!auth) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateWrapper;
