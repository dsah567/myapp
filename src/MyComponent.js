import React, { useState } from 'react';

function MyComponent() {
  // This is allowed
  const [count, setCount] = useState(0);

  // This is not allowed inside a loop
  // for (let i = 0; i < count; i++) {
  //   const [otherState, setOtherState] = useState(''); // Avoid doing this
  // }

  // Instead, you can create a new component

  function Counter() {
    const [innerCount, setInnerCount] = useState(0);
    return (
      <div>
        <p>Inner Count: {innerCount}</p>
        <button onClick={() => setInnerCount(innerCount + 1)}>Increment Inner Count</button>
      </div>
    );
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* Now you can conditionally render the new component */}
      {count > 5 && <Counter />}
    </div>
  );
}

export default MyComponent;
