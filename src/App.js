import { API } from '@stoplight/elements';

import '@stoplight/elements/styles.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <API
        basePath="/"
        apiDescriptionUrl={process.env.PUBLIC_URL + '/docs.yaml'}
      />
    </div>
  );
}

export default App;
