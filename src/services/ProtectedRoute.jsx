import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({
    admin,
    redirectPath = '/',
    children,
}) => {
    if (!admin) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;