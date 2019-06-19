import React from "react";
import ReactDOM from 'react-dom';
import Main from "./Components/Main";
import ResponsiveLayoutProvider from "./lib/ResponsiveLayout";

function App() {
  return (
    <ResponsiveLayoutProvider>
      <div className="App">
        <Main />
      </div>
    </ResponsiveLayoutProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
