import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import StatsSection from "./Components/Statistics/StatsSection"
import Causes from "./Components/Programs/Causes"
import { Route, Routes } from "react-router"
import AwarenessCampaign from "./Components/ProgramsInfo/AwarenessCampaign "
import CounselingSupport from "./Components/ProgramsInfo/CounselingSupport"
import PrisonRehabilitation from "./Components/ProgramsInfo/PrisonRehabilitation"
import RehabilitationRecovery from "./Components/ProgramsInfo/RehabilitationRecovery"
import SkillDevelopment from "./Components/ProgramsInfo/SkillDevelopment"




const App = () => {
  return (
	<div >
		<Navbar/>
		<Routes>

		<Route path="/" element={
            <>
              <Hero />
              <StatsSection />
              <About />
              <Causes />
	
            </>
          } />
          <Route path='/awareness' element={<AwarenessCampaign/>}/>
          <Route path='/counselling' element={<CounselingSupport/>}/>
          <Route path='/prison' element={<PrisonRehabilitation/>}/>
          <Route path='/recovery' element={<RehabilitationRecovery/>}/>
          <Route path='/skill' element={<SkillDevelopment/>}/>

		 
		</Routes>
		
	</div>
  )
}

export default App