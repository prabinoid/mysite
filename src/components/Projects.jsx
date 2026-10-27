import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpenText,
  BriefcaseBusiness,
  ExternalLink,
  HeartHandshake,
  Landmark,
  RotateCcw,
  Star,
} from 'lucide-react';
import { projects } from '../constants';
import { useSectionInView } from '../hooks/useSectionInView';
import { cn } from '../utils/cn';
import { Icons } from './Icons';
import SectionHeading from './SectionHeading';
import { buttonVariants } from './ui/button';

const CATEGORIES = {
  outsourcing: {
    label: 'Outsourcing',
    icon: BriefcaseBusiness,
    className: 'bg-violet-500/10 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300',
  },
  ngo: {
    label: 'INGO/NGO',
    icon: HeartHandshake,
    className: 'bg-rose-500/10 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300',
  },
  government: {
    label: 'Government',
    icon: Landmark,
    className: 'bg-sky-500/10 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300',
  },
};

// How long a flipped card waits, once the pointer has left it, before turning back over.
const FLIP_BACK_DELAY = 2000;

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const linkButton = buttonVariants({ variant: 'outline', className: 'mr-2 px-5' });

// Links open in a new tab without flipping the card underneath them.
const stopPropagation = (event) => event.stopPropagation();

const hasMoreBelow = (element) =>
  element.scrollTop + element.clientHeight < element.scrollHeight - 4;

const CategoryBadge = ({ category, className }) => {
  const { label, icon: Icon, className: tone } = CATEGORIES[category];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium',
        tone,
        className,
      )}>
      <Icon className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  );
};

const ProjectLinks = ({ title, links }) => (
  <>
    {links.live && (
      <a
        href={links.live}
        aria-label={`Visit ${title}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation}
        className={linkButton}>
        <ExternalLink className="size-5" />
      </a>
    )}
    {links.github && (
      <a
        href={links.github}
        aria-label="GitHub repository"
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation}
        className={linkButton}>
        <Icons.githubOutline className="size-5" />
      </a>
    )}
  </>
);

// Markdown-style links in the details text, e.g. [Right Place Geo](https://www.rightplacegeo.com/).
const LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

const DetailsText = ({ text }) => {
  const parts = [];
  let lastIndex = 0;
  for (const match of text.matchAll(LINK_PATTERN)) {
    parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation}
        className="text-brand font-medium underline-offset-4 hover:underline">
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  parts.push(text.slice(lastIndex));
  return <>{parts}</>;
};

const ProjectDetails = ({ details }) =>
  Array.isArray(details) ? (
    <ul className="marker:text-brand list-disc space-y-2 pl-4">
      {details.map((point) => (
        <li key={point}>
          <DetailsText text={point} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="space-y-3">
      {details.split(/\n\s*\n/).map((paragraph) => (
        <p key={paragraph}>
          <DetailsText text={paragraph} />
        </p>
      ))}
    </div>
  );

const ProjectCard = ({ project }) => {
  const { icon: Icon, title, description, details, tags, links, category, featured } = project;
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [moreBelow, setMoreBelow] = useState(false);
  const pointerType = useRef('mouse');
  const focusAfterFlip = useRef(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const detailsRef = useRef(null);
  const showDetailsRef = useRef(null);

  // Turn back to the front once the card has been left alone (no hover or keyboard focus)
  // for a moment. Touch screens can't hover, so there the card waits for another tap.
  useEffect(() => {
    if (!flipped || hovered || keyboardFocused || pointerType.current === 'touch') return;
    const timer = window.setTimeout(() => setFlipped(false), FLIP_BACK_DELAY);
    return () => window.clearTimeout(timer);
  }, [flipped, hovered, keyboardFocused]);

  // Keep the hidden face out of the tab order and away from clicks. When the flip came from
  // the keyboard, move focus to the face that is now showing.
  useEffect(() => {
    const shown = flipped ? backRef.current : frontRef.current;
    const hidden = flipped ? frontRef.current : backRef.current;
    shown.inert = false;
    if (flipped) {
      detailsRef.current.scrollTop = 0;
      setMoreBelow(hasMoreBelow(detailsRef.current));
    }
    if (focusAfterFlip.current) {
      focusAfterFlip.current = false;
      (flipped ? detailsRef : showDetailsRef).current.focus({ preventScroll: true });
    }
    hidden.inert = true;
  }, [flipped]);

  const handleClick = (event) => {
    // Selecting text on the back shouldn't flip the card.
    if (window.getSelection()?.toString()) return;
    // Keyboard-activated buttons report zero clicks.
    focusAfterFlip.current = event.detail === 0;
    setFlipped((value) => !value);
  };

  const face = cn(
    'backface-hidden rounded-3xl bg-secondary',
    featured && 'ring-1 ring-brand/40',
  );

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={cn(
        'perspective-1200 relative w-full cursor-pointer rounded-3xl transition-shadow hover:shadow-lg',
        featured && 'shadow-brand/20 shadow-lg',
      )}
      onClick={handleClick}
      onPointerDown={(event) => {
        pointerType.current = event.pointerType;
      }}
      onPointerEnter={(event) => event.pointerType !== 'touch' && setHovered(true)}
      onPointerLeave={(event) => event.pointerType !== 'touch' && setHovered(false)}
      onFocus={(event) => event.target.matches(':focus-visible') && setKeyboardFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocused(false);
      }}>
      <div
        className={cn(
          'preserve-3d relative h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none',
          flipped && 'rotate-y-180',
        )}>
        <div
          ref={frontRef}
          className={cn(
            face,
            'relative flex h-full flex-col items-center p-5 text-center',
            featured && 'from-brand/15 via-secondary to-secondary bg-gradient-to-b via-40%',
            flipped && 'pointer-events-none',
          )}>
          <div className="flex w-full items-center justify-between gap-2">
            {featured ? (
              <span className="bg-brand text-brand-foreground inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold shadow-sm">
                <Star className="size-3.5 fill-current" aria-hidden="true" />
                Featured
              </span>
            ) : (
              <span />
            )}
            <CategoryBadge category={category} />
          </div>
          <div
            className={cn(
              'mt-1 w-fit rounded-full p-4',
              featured ? 'bg-brand/15 text-brand' : 'bg-muted',
            )}>
            <Icon className="size-8" aria-hidden="true" />
          </div>
          <h3 className="my-2 text-lg font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-3 text-sm">{description}</p>
          <div className="my-3 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted hover:bg-brand hover:text-brand-foreground rounded-full px-3 py-1 font-mono text-sm transition-colors">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex pt-2">
            <ProjectLinks title={title} links={links} />
            <button
              ref={showDetailsRef}
              type="button"
              aria-label={`Show details for ${title}`}
              title="Show details"
              className={linkButton}>
              <BookOpenText className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={backRef}
          className={cn(
            face,
            'rotate-y-180 absolute inset-0 flex flex-col p-5 text-left',
            !flipped && 'pointer-events-none',
          )}>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-brand font-mono text-xs font-medium uppercase tracking-widest">
                About the project
              </p>
              <h3 className="mt-1 text-lg font-medium leading-snug">{title}</h3>
            </div>
            <CategoryBadge category={category} className="shrink-0" />
          </div>
          <div className="relative mt-3 min-h-0 flex-1">
            <div
              ref={detailsRef}
              tabIndex={0}
              role="region"
              aria-label={`${title} details`}
              onScroll={(event) => setMoreBelow(hasMoreBelow(event.currentTarget))}
              className="text-muted-foreground h-full overflow-y-auto overscroll-contain rounded-md pr-2 text-sm leading-relaxed [scrollbar-width:thin]">
              <ProjectDetails details={details} />
            </div>
            {/* Fades the bottom edge while there is more to scroll. */}
            <div
              aria-hidden="true"
              className={cn(
                'from-secondary pointer-events-none absolute bottom-0 left-0 right-3 h-10 bg-gradient-to-t to-transparent transition-opacity',
                moreBelow ? 'opacity-100' : 'opacity-0',
              )}
            />
          </div>
          <div className="flex items-center pt-4">
            <ProjectLinks title={title} links={links} />
            <button
              type="button"
              aria-label={`Show summary of ${title}`}
              title="Back to summary"
              className={cn(linkButton, 'ml-auto mr-0')}>
              <RotateCcw className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-6 scroll-mt-28 sm:my-8">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}>
        <SectionHeading
          heading="My Projects"
          content="Practical examples of some of my work. Click a card to read more about it."
        />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
