import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../Shared/LoadingSpinner";
const TrainerRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;
  if (role === "Trainer") return children;
  return <Navigate to="/dashboard" />;
};

export default TrainerRoute;

TrainerRoute.propTypes = {
  children: PropTypes.element,
};
