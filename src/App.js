import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import StatsSection from "./Components/Statistics/StatsSection"


const App = () => {
  return (
	<div >
		<Navbar/>
		<Hero/>
		<StatsSection/>
		<About/>
	</div>
  )
}

export default App