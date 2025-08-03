import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Guitarbrands } from './components/guitarbrands';
import { Guitarmodels } from './components/guitarmodels';
import { Guitars } from './components/guitars';
function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Guitarbrands />} /> 
         <Route path="/guitarmodels" element={<Guitarmodels />} /> 
        <Route path="/guitars/:brandId/:modelId" element={<Guitars />} />
         
         </Routes>
    </Router>
  );
}
export default App;
