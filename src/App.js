import logo from './logo.svg';
import './App.css';
import ElevateAppBar from './components/ElevateAppBar';
import VerticalTabs from './components/VerticalTabs';

import mockAPI from './api.blackboardapp.co.postman_collection.json';

function App() {
  return (
    <div className="App">
      <ElevateAppBar title={"Blackboard"}>
        <VerticalTabs data={mockAPI}></VerticalTabs>
      </ElevateAppBar>
    </div>
  );
}

export default App;
