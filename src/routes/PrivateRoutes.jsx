import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <>
                <progress className="progress w-56"></progress>
            </>
        )
    }
    if (!user) {
        return <Navigate state={{from: location}} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoutes;