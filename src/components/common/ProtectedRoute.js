import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, condition, alternative }) => {
  if (condition === false) {
    return <Navigate to={alternative} />;
  }
  return children;
};
export default ProtectedRoute;
