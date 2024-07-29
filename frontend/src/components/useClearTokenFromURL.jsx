import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useClearTokenFromURL = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        if (query.get('token')) {
            query.delete('token');
            navigate({ search: query.toString() }, { replace: true });
        }
    }, [location, navigate]);
};

export default useClearTokenFromURL;
