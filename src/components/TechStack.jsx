import { motion } from 'framer-motion';
import { alsoWorkedWith, technologies } from '../constants';
import { cn } from '../utils/cn';

// Seconds to scroll past 18 cards. Longer loops get proportionally more time,
// so the speed stays the same as tools are added.
const SPEEDS = { fast: 20, normal: 40, slow: 60 };
const CARDS_PER_SPEED = 18;

// Each half of the loop must be wider than the viewport or a gap shows at the
// seam, so short lists are repeated until they have at least this many cards.
const MIN_CARDS_PER_LOOP = 12;

const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const repeats = Math.ceil(MIN_CARDS_PER_LOOP / items.length);
  const loop = Array.from({ length: repeats * 2 }, () => items).flat();
  const duration = (SPEEDS[speed] * repeats * items.length) / CARDS_PER_SPEED;

  return (
    <div
      className={cn(
        'relative max-w-7xl overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] dark:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}>
      <ul
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-6',
          'animate-scroll motion-reduce:animate-none',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
        }}>
        {loop.map(({ name, icon: Icon }, index) => (
          <li
            key={index}
            aria-label={name}
            aria-hidden={index >= items.length || undefined}
            className={cn(
              'relative shrink-0 rounded-3xl p-6 transition-transform hover:scale-105',
              'border border-gray-400 bg-white',
              'dark:border-gray-800 dark:bg-black',
            )}
            style={{ width: 'auto', maxWidth: '150px' }}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="flex flex-col items-center gap-2">
              <span aria-hidden="true">
                <Icon className="size-12" />
              </span>
              <span className="text-muted-foreground font-mono text-xs font-medium">{name}</span>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TechStack = () => (
  <div className="mt-10 flex w-full flex-col items-center gap-8">
    <div className="flex w-full flex-col items-center gap-4">
      <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
        Tools &amp; Technologies
      </span>
      <div className="flex w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 lg:justify-between">
        <InfiniteMovingCards items={technologies} speed="normal" />
      </div>
    </div>
    <div className="flex w-full max-w-3xl flex-col items-center gap-4">
      <span className="text-muted-foreground/70 font-mono text-xs uppercase tracking-widest">
        Also Worked With
      </span>
      {/* Fixed-width items, at most seven per row, keep the rows even. */}
      <div className="text-muted-foreground/60 flex max-w-[584px] flex-wrap justify-center gap-x-2 gap-y-4 px-5 sm:gap-x-4">
        {alsoWorkedWith.map(({ name, icon: Icon }) => (
          <div
            key={name}
            aria-label={name}
            className="hover:text-muted-foreground flex w-16 flex-col items-center gap-1 transition-colors">
            <span aria-hidden="true">
              <Icon className="size-8" />
            </span>
            <span className="font-mono text-[10px]">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TechStack;
