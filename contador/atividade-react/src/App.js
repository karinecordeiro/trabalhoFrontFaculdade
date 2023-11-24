import logo from './logo.svg';
import './App.css';
import * as React from "react";

function App() {

    const [counter, setCounter] = React.useState(10);
    setInterval(()=> setCounter(counter-1), 1000);

    React.useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);

  return (
    <div className="App">
      <h1>Bem-vindo à primeira atividade da disciplina Programação para internet em Front-End</h1>
      <img src={logo} alt="Logo" className='App-logo'/>
      <div>Contador regressivo: {counter} </div>
    </div>
  );
}

export default App;
