import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personal, socials } from '../constants';
import { useSectionInView } from '../hooks/useSectionInView';
import { buttonVariants } from './ui/button';

const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="mb-3 mt-5 flex scroll-mt-96 flex-col items-center gap-4 text-center sm:mt-8">
      {personal.status && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="bg-muted inline-flex items-center gap-2 rounded px-3 py-1 text-sm font-medium">
          <span aria-hidden="true" className="bg-brand size-2 animate-pulse rounded-full" />
          {personal.status}
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl">
        {personal.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground -mt-2 max-w-lg text-lg">
        {/* Each half stays whole, so narrow screens break the line between them. */}
        <span className="text-foreground whitespace-nowrap font-medium">{personal.role}</span>
        {personal.location && (
          <>
            {' '}
            <span className="whitespace-nowrap">based in {personal.location}</span>
          </>
        )}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2">
        <a href="#contact" className={buttonVariants({ size: 'lg' })}>
          Get in touch <ArrowRight className="ml-2 size-4" />
        </a>
        {personal.cv && (
          <>
            <a
              href={personal.cv}
              download
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'hidden sm:flex',
              })}>
              Download CV <Download className="ml-2 size-4" />
            </a>
            <a
              href={personal.cv}
              download
              aria-label="Download CV"
              className={buttonVariants({ variant: 'secondary', size: 'icon', className: 'sm:hidden' })}>
              <Download className="size-6" />
            </a>
          </>
        )}
        {socials.map(({ label, href, icon: Icon }) => {
          const external = href.startsWith('http');
          return (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={buttonVariants({ variant: 'secondary', size: 'icon' })}>
              <Icon className="size-6" />
            </a>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Intro;
