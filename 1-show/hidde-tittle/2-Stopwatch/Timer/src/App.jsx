import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [running, setRunning] = useState(false)
  const [timerInterval, setTimerInterval] = useState(null)

  const handleStart = ()=> {
    if(!running) {
      setRunning(true);
      let seconds = 0
      let minutes = 0
      
      setTimerInterval(setInterval(() => {
        seconds += 1
        setSec(seconds);

        if(seconds === 60) {
          minutes += 1;
          setMin(minutes);
          seconds = 0
          setSec(seconds)
        }
      }, 1000))
    }
  }

  const handleStop = ()=> {
    setRunning(false);
    clearInterval(timerInterval);
  }

  const handleReset = ()=> {
    clearInterval(timerInterval);
    setRunning(false);
    setMin(0);
    setSec(0);
  }

	return (
		<>
			<h1> Temporizador: </h1>

			<section style={{ marginBottom: "20px" }}>
				<span> {min} minutos </span> - <span> {sec} segundos </span>
			</section>
      
			<section
				style={{ 
          display: "flex", 
          gap: "10px", 
          justifyContent: "center" 
        }}
			>
				<button onClick={handleStart}> Iniciar </button>
				<button onClick={handleStop}> Detener </button>
				<button onClick={handleReset}> Reiniciar </button>
			</section>
		</>
	);
}

export default App;
