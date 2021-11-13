import './App.css';
import MemberList from './components/MemberList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemberDetail from './components/MemberDetail';
import CreateMember from './components/CreateMember';

function App() {
  return (
    <Router>
    <div className="App container">
      <Routes>
      <Route path= "/" element={<MemberList/>}></Route>
      <Route path= "/member-detail" element={<MemberDetail/>}></Route>
      <Route path= "/create-member" element={<CreateMember/>}></Route>
     
      </Routes>
    </div>
    </Router>
  );
}

export default App;
