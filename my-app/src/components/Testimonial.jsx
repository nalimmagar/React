import React from 'react';
import { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import likeIcon from "../assets/like.gif";
import trophyIcon from "../assets/trophy.gif";
import smileIcon from "../assets/happy-life.gif";
import likesIcon from "../assets/likes.gif";
import greetingVid from "../assets/handshake.mp4"

const testimonial = [
  {
    name: "Rajesh Dhakal",
    role: "Digital Marketing Student",
    text: `I was amazed and impressed by the course structure as it was distinctly different from other courses in the market. The classes were highly interactive and the instructor was very humble and friendly. Recordings of the classes were provided within a short time after each class, which made revision very easy and beneficial. I have recommended the same course to my data-enthusiast friends."`,
    img: img1,
  }
];

const Testimonial = () => {
  const [hoveredUser, setHoveredUser] = useState(null);

  return (
    <section className="relative w-full h-[700px] flex items-center justify-center bg-white overflow-hidden group">
      <style>{`
        @keyframes float1 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes float2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(12px); } }
        @keyframes float3 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        @keyframes float4 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
        @keyframes float5 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
        @keyframes float6 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(10px); } }

        .group:hover .float1 { animation: float1 3s ease-in-out infinite; }
        .group:hover .float2 { animation: float2 3.2s ease-in-out infinite; }
        .group:hover .float3 { animation: float3 2.8s ease-in-out infinite; }
        .group:hover .float4 { animation: float4 3.5s ease-in-out infinite; }
        .group:hover .float5 { animation: float5 3.1s ease-in-out infinite; }
        .group:hover .float6 { animation: float6 3.3s ease-in-out infinite; }
        .glow {
          box-shadow: 0 0 0 8px #68BFA4, 0 0 32px 8px #68BFA4;
          transition: box-shadow 0.4s;
        }

        @keyframes bubbleFade { 
         0%, 10% { opacity: 0; transform: translateY(0); }
         20%, 60% { opacity: 1; transform: translateY(-8px); } /* visible */
         61%, 100% { opacity: 0; transform: translateY(0); }  /* disappear */
        }

        .bubble-anim { 
          animation: bubbleFade 5s ease-in-out infinite;
        }
        section:hover .bubble-anim {
          animation-play-state: paused;
        }

        @keyframes pulseGap {
         0%, 100% { gap: 0.5rem; }   /* normal gap */
         50% { gap: 0.75rem; }       /* slightly expanded */
        }

        .pulse-gap:hover {
          animation: pulseGap 1s ease-in-out infinite;
        }
      `}</style>

      {/* Background blurred ellipses */}
      <div className="absolute w-[193px] h-[193px] bg-[#68BFA4] blur-[200px] top-[120px] left-[150px] rounded-full"></div>
      <div className="absolute w-[193px] h-[193px] bg-[#68BFA4] blur-[200px] bottom-[50px] right-[40px] rounded-full"></div>
      
      {/* Images (Avatars and gifIcons)*/}
      <div
        className="absolute top-[30%] left-[35%] transition-transform duration-700 
                  group-hover:-translate-x-[100px] group-hover:-translate-y-[95px] z-30"
        onMouseEnter={() => setHoveredUser(1)}
        onMouseLeave={() => setHoveredUser(null)}
      >
        <div className="absolute top-[30%] left-[85%] w-max px-5 py-5 rounded-full bg-white text-xs font-semibold shadow-lg z-20 bubble-anim">
          Amazing ⭐️⭐️⭐️⭐️⭐️
        </div>

        <img
          src={img1}
          alt="user1"
          className={`w-20 h-20 rounded-[24%] float1 ${hoveredUser == 1 ? "glow" : ""}`}
        />

        <div
  className={`
    absolute -top-[50px] -left-[100px] w-[300px] rounded-xl shadow-2xl p-5 bg-white
    ${hoveredUser == 1
      ? "opacity-100 translate-y-[130px] scale-100 transform transition-all duration-[3000ms]"
      : "opacity-0 scale-[0.3]"}
  `}
>
          <p className="text-gray-800 text-sm mb-1 text-left">
            {testimonial[0].text}
          </p>
          <div className="font-bold text-right">{testimonial[0].name}</div>
          <div className="text-gray-500 text-sm text-right">{testimonial[0].role}</div>
        </div>
      </div>
      
      <div className="absolute top-[30%] right-[42%] transition-transform duration-700 group-hover:translate-x-[115px] group-hover:-translate-y-[108px]">
        <img
        src={img1}
        alt="user2"
        className=" w-20 h-20 rounded-[24%] float2 "
      />
      </div>
      
      <img
        src={likeIcon}
        alt="likeIcon"
        className="absolute top-[30%] left-[43%] w-20 h-20 transition-transform duration-700 group-hover:-translate-y-16"
      />
      
      <div className="absolute top-[45%] left-[26%] transition-transform duration-700 group-hover:-translate-x-[175px] group-hover:-translate-y-[70px]">
        <img
        src={img1}
        alt="user3"
        className=" w-20 h-20 rounded-[24%] float3"
      />
      </div>
      
      <div className="absolute top-[42%] right-[30%] transition-transform duration-700 group-hover:translate-x-[160px] group-hover:translate-y-[3px]">
        <img
        src={img2}
        alt="user4"
        className=" w-20 h-20 rounded-[24%] float4 "
      />
      </div>
      
      <div className="absolute bottom-[30%] left-[35%] transition-transform duration-700 group-hover:-translate-x-[69px] group-hover:translate-y-[52px]">
         <img
        src={img1}
        alt="user5"
        className="w-20 h-20 rounded-[24%] float5 "
      />
      </div>
     
      <img
        src={trophyIcon}
        alt="trophyIcon"
        className="absolute bottom-[30%] left-[43%] w-20 h-20 transition-transform duration-700 group-hover:translate-y-[100px]"
      />

      <div
        className="absolute bottom-[30%] right-[42%] transition-transform duration-700 
                  group-hover:translate-x-[110px] group-hover:translate-y-[40px] z-30"
        onMouseEnter={() => setHoveredUser(6)}
        onMouseLeave={() => setHoveredUser(null)}
      >
        <div className="absolute bottom-[10%] left-[90%] w-max px-5 py-5 rounded-full bg-white text-white text-xs shadow-lg z-20 flex items-center gap-1 bubble-anim">
          <span>⭐️⭐️⭐️⭐️⭐️</span>
        </div>

        <img
          src={img1}
          alt="user6"
          className={`w-20 h-20 rounded-[24%] float6 ${hoveredUser == 6 ? "glow" : ""}`}
        />

        <div
          className={`
            absolute -top-[60px] -left-[14px] w-[105px] h-[190px] rounded-xl shadow-2xl bg-white
            items-center justify-center 
            ${hoveredUser == 6
              ? "opacity-100 -translate-y-[140px] scale-100 transform transition-all duration-[3000ms]"
              : "opacity-0 scale-[0.3]"}
          `}
        >
          <video
            src={greetingVid}
            autoPlay
            loop
            muted
            className="p-1 w-[104px] h-[180px] rounded-xl"
          />
        </div>
      </div>
      
      <img
        src={smileIcon}
        alt="smileIcon"
        className="absolute bottom-[32%] left-[28%] w-20 h-20 transition-transform duration-700 group-hover:-translate-x-[110px] group-hover:-translate-y-[50px]"
      />
      <img
        src={likesIcon}
        alt="likesIcon"
        className="absolute bottom-[32%] right-[34%] w-20 h-20 transition-transform duration-700 group-hover:translate-x-[100px] group-hover:-translate-y-[45px]"
      />
      
      {/* Central Texts */}
      <div className="relative flex flex-col items-center text-center gap-2 pr-[60px]">
        <p className="text-gray-700 text-lg">
          Hear How They Level Up Their Game!
        </p>

        <h2 className="text-3xl md:text-2xl font-bold text-gray-900 leading-snug">
          Skill <span className="text-[#68BFA4]">Masters</span> Unite! 🤝
        </h2>

        <button className=" flex items-center gap-2 text-base font-semibold text-gray-800 pulse-gap">
          View all Testimonials <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
