import './App.css';
import Cursor from './components/cursor/cursor';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'
import { useEffect } from 'react';
import Lenis from 'lenis';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1, // lower = smoother, higher = faster
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="app" data-theme={theme}>
            <Cursor isDesktop={true} />
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Services />
                <Resume />
                <Portfolio />
                {/* <Testimonials /> */}
                <Contact theme={theme} />
            </main>
        </div>
    );
}

export default App;
