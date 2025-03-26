import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== roleRequired) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
