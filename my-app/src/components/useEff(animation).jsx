import { useEffect, useState } from "react";

function FadeInExample() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // triggers CSS class change
  }, []);

  return (
    <div>
      <style>{`
        .fade-in {
          animation: fadeIn 1s ease-in forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className={visible ? "fade-in" : ""}>
        <h2>Hello, I fade in on mount!</h2>
      </div>
    </div>
  );
}

export default FadeInExample;


{/*same animation using framer motion*/ }
// export default FadeInExample;

// import { motion } from "framer-motion";

// function MotionExample() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }} // start hidden and moved up
//       animate={{ opacity: 1, y: 0 }}   // animate to visible at normal position
//       transition={{ duration: 1 }}      // 1 second
//     >
//       <h2>Hello, I animate on mount!</h2>
//     </motion.div>
//   );
// }

// export default MotionExample;
