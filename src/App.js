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
import MainGallery from './Components/Gallery/MainGallery';
import Footer from './Components/Footer/Footer';
import ScrollToTopButton from './Components/ScrollToTop/ScrollToTopButton';
import Partners from './Components/Partners/Partners';
import MentalHealth from './Components/Blog/MentalHealth';
import Rehab from './Components/Blog/Rehab';
import Education from './Components/Blog/Education';
import Drugabuse from './Components/Blog/Drugabuse';
import Crime from './Components/Blog/Crime';
import ClimateAction from './Components/ProgramsInfo/ClimateAction';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

const App = () => {
	return (
		<div>
			<Navbar />
			<ScrollToTop />
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
							<Partners />
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
				<Route path="/maingallery" element={<MainGallery />} />
				<Route path="/mental" element={<MentalHealth />} />
				<Route path="/rehab" element={<Rehab />} />
				<Route path="/education" element={<Education />} />
				<Route path="/drugabuse" element={<Drugabuse />} />
				<Route path="/crime" element={<Crime />} />
				<Route path="/climate" element={<ClimateAction />} />
			</Routes>
			<ScrollToTopButton />
			<Footer />
		</div>
	);
};

export default App;
