import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import reactIcon from '../assets/react-icon.png'
import socialIcon from '../assets/social-icon.png'
import vueIcon from '../assets/vue-icon.png'
import designIcon from '../assets/design-icon.png'

const CourseCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [prevCard, setPrevCard] = useState(0);

  const cards = [
    {
      titleRotated: <>All Courses</>,
      titleActive: "All Courses",
      number: "23",
      subtitleRotated: <>Courses you're powering <br /> through right now</>,
      subtitleActive: <>Courses you're powering <br /> through right now</>,
    },
    {
      titleRotated: (
        <>
          Upcoming <br /> Courses
        </>
      ),
      titleActive: "Upcoming Courses",
      number: "05",
      subtitleRotated: (
        <>Exciting new courses <br /> waiting to boost your skill</>
      ),
      subtitleActive: (
        <>Exciting new courses waiting to <br /> boost your skill</>
      ),
    },
    {
      titleRotated: (
        <>
          Ongoing <br /> Courses
        </>
      ),
      titleActive: "Ongoing Courses",
      number: "12",
      subtitleRotated: (
        <>Currently happening - don't <br /> miss out on the action</>
      ),
      subtitleActive: (
        <>Currently happening - don't <br /> miss out on the action</>
      ),
    },
  ];

  {/* Specific color code where taken from the figma */}
  const red = "#C33241";
  const lightRed = "#F9EBEC";
  const activeText = "#F9EBEC";
  const inactiveText = "#C33241";

  const handleClick = (index) => {
    if (index !== activeCard) {
      setPrevCard(activeCard);
      setActiveCard(index);
    }
  };

  const getScale = (width, height) =>
    Math.sqrt(width ** 2 + height ** 2) / width;

  const direction = activeCard > prevCard ? 1 : -1;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl">
      {cards.map((card, i) => {
        const isActive = activeCard === i;
        const width = isActive ? 592 : 280;
        const height = 461;
        const circleScale = isActive ? 0.01 : getScale(width, height);

        return (
          <motion.div
            key={i}
            onClick={() => handleClick(i)}
            initial={false}
            animate={{
              width,
              height,
              borderRadius: 32,
              transition: { duration: 1, ease: [0.7, -0.4, 0.4, 1.4] },
            }}
            className="relative cursor-pointer shadow-lg overflow-hidden"
            style={{ backgroundColor: red }}
          >
            {/* Recreating Circle Animation */}
            <motion.div
              initial={false}
              animate={{ scale: circleScale }}
              transition={{ duration: 1.2, ease: [0.7, -0.4, 0.4, 1.4] }}
              className="absolute -bottom-[100px] -left-20 rounded-full w-full h-full"
              style={{
                backgroundColor: lightRed,
                transformOrigin: "bottom left",
              }}
            />

            {/* For View Courses Button */}
            <AnimatePresence>
              {isActive && (
                <motion.button
                  className="absolute top-7 right-9 px-4 py-2 font-outfit text-white font-medium"
                  initial={{ x: 220 }}
                  animate={{ x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: [0.7, -0.4, 0.4, 1.4] }}
                >
                  View all Courses →
                </motion.button>
              )}
            </AnimatePresence>

            {/* For ImageIvcons */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key={`icons-${i}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: -550 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 150 * direction }}
                  transition={{
                    duration: 1,
                    ease: [0.7, -0.4, 0.4, 1.4],
                  }}
                >
                  {[
                    { src: reactIcon, top: "25%", left: "10%", size: "80px", rotate: -10 },
                    { src: socialIcon, top: "25%", left: "34%", size: "70px", rotate: 15 },
                    { src: vueIcon, top: "25%", left: "56%", size: "75px", rotate: -20 },
                    { src: designIcon, top: "25%", left: "78%", size: "85px", rotate: 5 },
                  ].map((icon, idx) => (
                    <motion.img
                      key={idx}
                      src={icon.src}
                      alt="icon"
                      className="absolute"
                      style={{
                        top: icon.top,
                        left: icon.left,
                        width: icon.size,
                        height: icon.size,
                      }}
                      animate={{ rotate: icon.rotate, scale: 1 }}
                      transition={{
                        duration: 0.1,
                        ease: [0.7, -0.4, 0.4, 1.4],
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative w-full h-full">
              {/* Recreating Animation For Inactive(Rectangle*/}
              {!isActive && (
                <motion.div
                  initial={{ rotate: 360, y: 170, x: 270 }}
                  animate={{ rotate: 270, y: -80, x: 0 }}
                  transition={{ duration: 1, ease: [0.7, -0.4, 0.4, 1.4] }}
                  className="absolute inset-0 flex flex-col items-start justify-center text-left"
                  style={{
                    transformOrigin: "center",
                    bottom: 90,
                    maxWidth: "500px",
                    maxHeight: "500px",
                  }}
                >
                  <motion.p
                    initial={{ color: activeText }}
                    animate={{ color: inactiveText }}
                    transition={{ duration: 1 }}
                    className="font-outfit font-bold text-[30px]"
                  >
                    {card.titleRotated}
                  </motion.p>
                  <motion.p
                    initial={{ color: activeText }}
                    animate={{ color: inactiveText }}
                    transition={{ duration: 1 }}
                    className="font-outfit text-[18px] text-left"
                    style={{ marginTop: "4px", paddingLeft: 0 }}
                  >
                    {card.subtitleRotated}
                  </motion.p>
                </motion.div>
              )}

              {/* For Number */}
              <motion.h2
                className="absolute font-nohemi text-[190px] font-bold leading-none"
                style={{
                  bottom: 24,
                  left: 24,
                  margin: 0,
                  pointerEvents: "none",
                }}
                initial={{ color: inactiveText, x: 0 }}
                animate={{
                  color: isActive ? activeText : inactiveText,
                  x: isActive ? 20 : 0,
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {card.number}
              </motion.h2>

              {/* Recreating animation For Active (Square) */}
              {isActive && (
                <motion.div
                  initial={{ rotate: -90, x: -220, y: -200 }}
                  animate={{ rotate: 0, x: 20, y: 0 }}
                  transition={{ duration: 1, ease: [0.7, -0.4, 0.4, 1.4] }}
                  className="absolute flex flex-col items-start"
                  style={{ bottom: 65, left: 250 }}
                >
                  <motion.p
                    initial={{ color: inactiveText }}
                    animate={{ color: activeText }}
                    transition={{ duration: 1 }}
                    className="font-outfit font-bold text-[31px] text-left whitespace-nowrap"
                  >
                    {card.titleActive}
                  </motion.p>
                  <motion.p
                    initial={{ color: inactiveText }}
                    animate={{ color: activeText }}
                    transition={{ duration: 1 }}
                    className="font-outfit text-[18px] text-left whitespace-nowrap"
                  >
                    {card.subtitleActive}
                  </motion.p>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CourseCards;
