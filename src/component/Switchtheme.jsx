import { useState } from "react";

function Switchtheme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const appStyle = {
    height: "100vh",
    width: "100vw", 
    backgroundColor: isDark ? "#111" : "#fff",
    color: isDark ? "#fff" : "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  
  };
  const buttonstyle={
    backgroundColor:isDark?"#fff":'#111',
    color:isDark?'#111':"#fff"
  }

  return (
    <div style={appStyle}>
      <h3>{isDark ? "Dark Theme" : "White Theme"}</h3>
      <button style={buttonstyle} onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default Switchtheme;
 
