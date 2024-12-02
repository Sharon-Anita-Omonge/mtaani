import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import StatsSection from './Components/Statistics/StatsSection';
import Causes from './Components/Programs/Causes';
import { Route, Routes } from 'react-router';
import AwarenessCampaign from './Components/ProgramsInfo/AwarenessCampaign ';
import CounselingSupport from './Components/ProgramsInfo/CounselingSupport';
import PrisonRehabilitation from './Components/ProgramsInfo/PrisonRehabilitation';
import RehabilitationRecovery from './Components/ProgramsInfo/RehabilitationRecovery';
import SkillDevelopment from './Components/ProgramsInfo/SkillDevelopment';
import VolunteerForm from './Components/Volunteer/VolunteerForm';
import TeamPage from './Components/Team/TeamData';
import ContactForm from './Components/Contact/ContactForm';
import EventsAndBlogs from './Components/EventsBlog/EventsAndBlogs';
import Testimonial from './Components/Testimonial/Testimonial';
import Gallery from './Components/Gallery/Gallery';

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Hero />
							<StatsSection />
							<About />
							<Causes />
							<VolunteerForm />
							<TeamPage />
							<EventsAndBlogs />
							<Testimonial />
							<Gallery />
							<ContactForm />
						</>
					}
				/>
				<Route path="/awareness" element={<AwarenessCampaign />} />
				<Route path="/counselling" element={<CounselingSupport />} />
				<Route path="/prison" element={<PrisonRehabilitation />} />
				<Route path="/recovery" element={<RehabilitationRecovery />} />
				<Route path="/skill" element={<SkillDevelopment />} />
			</Routes>
		</div>
	);
};

export default App;
