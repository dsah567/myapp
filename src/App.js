import './App.css'

import React, { createContext, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Create a component that provides values to the context
function MyContextProvider({ children }) {
  const contextValue = "Hello, I'm from context!";

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

// Create a component that consumes values from the context
function MyComponent() {
  // Use useContext to access the values from MyContext
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>Value from context: {contextValue}</p>
    </div>
  );
}

// Wrap MyComponent with the context provider to provide the context values
function App() {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
}

export default App;
