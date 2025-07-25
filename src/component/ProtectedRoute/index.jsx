import {Navigate} from 'react-router-dom'

export default function ProtectedRoute({isAuthenticated,children}) {
    if (!isAuthenticated) {
        return <Navigate to='/dashboard' replace />
    }

    return children
}