import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Counter Project</p>
				<Counter></Counter>			{/*<<========Component Call*/}
			</header>
		</div>
	);
}
function Counter(){
	const [count, setCount] = useState(0)  //<<=========useState Declare
	const handleIncrease = () =>{		  //<<==========handleIncrease function create [Start]
		console.log("Yes! I'm Increase");
		let newCount = count + 1;
		setCount(newCount);
	}									 //<<==========handleIncrease function create [End]
	const handleDecrease = () =>{		//<<==========handleDecrease function create [Start]
		console.log("Yes! I'm Decrease");
		if(count <= 0) {
			return;
		  } else {
			setCount(count - 1);
		  }
	}								  //<<==========handleDecrease function create [End]
	return(
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrease}>Increase</button>	{/*<<=======eventHandle Connect In Button*/}
			<button onClick={handleDecrease}>Decrease</button>
		</div>
	)
}
export default App;
