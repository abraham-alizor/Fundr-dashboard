import { Navigate, Route, Routes } from 'react-router-dom';
import MainRoutes from './Routes';
import NotFound from './pages/NotFound';

function App() {
	// useEffect(() => {
	// 	// Store references to the original console methods
	// 	const originalLog = console.log;
	// 	const originalWarn = console.warn;
	// 	const originalError = console.error;

	// 	console.log = function () {};

	// 	// Override other console methods if needed
	// 	console.warn = function () {};
	// 	console.error = function () {};

	// 	// Cleanup function to restore original console methods
	// 	return () => {
	// 		console.log = originalLog;
	// 		console.warn = originalWarn;
	// 		console.error = originalError;
	// 	};
	// }, []);
	return (
		<>
			<Routes>
				{/* Redirect from / to /dashboard */}
				<Route path='/' element={<Navigate to='/dashboard' />} />
				{/* Define your other routes */}
				<Route path='/*' element={<MainRoutes />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
