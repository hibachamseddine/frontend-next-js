
import ControlledCarousel from './components/client/CarouselHome';
import MainGridHome from './components/client/mainGridHome';
import MeilleuresOffres from './components/client/meilleuresOffres';
import Footer from './components/client/footer';
export default function Home() {
return (
<>

<ControlledCarousel />
<MainGridHome />
<MeilleuresOffres />
<Footer/>
</>
)
}