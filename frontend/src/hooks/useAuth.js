import { useAuth as useAuthContext } from '../context/AuthContext';

// Export as both default and named export
const useAuth = useAuthContext;
export default useAuth;
export { useAuth };