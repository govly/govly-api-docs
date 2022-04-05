import { API } from '@stoplight/elements';

import '@stoplight/elements/styles.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <API apiDescriptionUrl="../docs.yaml" />
    </div>
  );
}

export default App;
