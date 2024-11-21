/*import { Route } from "react-router"*/
import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import StatsSection from "./Components/Statistics/StatsSection"
import Causes from "./Components/Programs/Causes"


const App = () => {
  return (
	<div >
		<Navbar/>
		<Hero/>
		<StatsSection/>
		<About/>
		<Causes/>
		{/*<Route></Route>*/}
	</div>
  )
}

export default App