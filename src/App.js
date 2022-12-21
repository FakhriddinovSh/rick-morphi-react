import { Header } from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Character } from './pages/Character/Character';
import { Location } from './pages/Location/Location';
import { Episode } from './pages/Episode/Episode';

function App() {
	return (
		<>
			<Header />
			<div className="pt-3">
				<Routes>
					<Route path="/" element={<Character />} />
					<Route path="/episode" element={<Episode />}></Route>
					<Route path="/location" element={<Location />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
