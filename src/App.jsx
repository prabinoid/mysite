import { avatar } from './assets';
import { personal } from './constants';
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Intro,
  Projects,
  SectionDivider,
  ThemeToggle,
  Toaster,
} from './components';

const App = () => {
  return (
    <>
      <main id="main-content" className="overflow-x-clip">
        <div className="container flex flex-col items-center">
          <Header />
          <div className="relative size-48 shrink-0 overflow-hidden rounded-full shadow-2xl">
            <img
              src={avatar}
              alt={personal.name}
              draggable={false}
              decoding="async"
              className="absolute inset-0 size-full origin-top scale-[1.3] object-cover"
            />
          </div>
          <Intro />
          <SectionDivider />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
      <ThemeToggle className="fixed bottom-5 right-5 hidden md:bottom-8 md:right-8 md:flex" />
      <Toaster />
    </>
  );
};

export default App;
