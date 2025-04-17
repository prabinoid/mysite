import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-poppins">
        <span className="text-eerieBlack font-bold">
          🧑‍💻 Backend & GIS Dev | Cloud Survivor | DevOps-ish | PM When Cornered
        </span>
        <br className="sm:block hidden" />
        I’ve spent the last 4+ years building web and GIS backends that (mostly) don’t crash, while simultaneously surviving the emotional rollercoaster of DevOps and cloud engineering. I have a love-hate relationship with AWS, GCP, and all things that claim to be "serverless" but come with 17 config files.
        One minute I’m optimizing PostGIS queries like a wizard, next I’m in a dark corner whispering "why is this container restarting again?"
        Also moonlight as a product manager when no one’s looking — translating vague business ideas into JIRA tickets and pretending I enjoy meetings.
        Powered by caffeine, chaos, stackoverflow and of course a little AI touch here and there 🥲.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
