// import React from "react";

// import Navbar from "./components/NavBar";
// import Splash from "./Splash";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Splash />
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import Navbar from "./components/NavBar";
import Splash from "./Splash";

function App() {
  useEffect(() => {
    // Function to apply styles
    const applyStyles = () => {
      document.body.style.cssText = `
        overflow-x: hidden;
        width: 100%;
        position: relative;
        margin: 0;
        padding: 0;
      `;

      // Ensure all direct children of body are also constrained
      Array.from(document.body.children).forEach((child) => {
        if (child instanceof HTMLElement) {
          child.style.cssText = `
            max-width: 100vw;
            overflow-x: hidden;
          `;
        }
      });
    };

    // Apply styles initially
    applyStyles();

    // Set up a resize listener to reapply styles if needed
    window.addEventListener("resize", applyStyles);

    // Cleanup function
    return () => {
      document.body.style.cssText = "";
      Array.from(document.body.children).forEach((child) => {
        if (child instanceof HTMLElement) {
          child.style.cssText = "";
        }
      });
      window.removeEventListener("resize", applyStyles);
    };
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <Splash />
    </div>
  );
}

export default App;
