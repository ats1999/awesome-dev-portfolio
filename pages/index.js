import Greet from '@components/greet/Greet';
import About from '@components/about/About';
import PastExp from '@components/past/PastExp';
import ShowProjects from '@components/projects/show-projects/ShowProjects';
import ViewMoreProjects from '@components/projects/view-more-projects/ViewMoreProjects';
import End from '@components/end/End';

// https://brittanychiang.com
export default function Home() {
    return <div className="portfolio-default">
        <Greet />
        <About />
        <PastExp />
        <ShowProjects />
        <ViewMoreProjects />
        <End />
    </div>
}