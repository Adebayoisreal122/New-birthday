"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function BirthdayStorybook() {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  // Personalized messages for your girlfriend
  const pages = [
    {
      title: "Welcome to your Storybook",
      text: "Happy Birthday, Oluwakemisola! Tap the next button to reveal all the surprises and memories we've shared.",
      img: "/image 1.jpg",
    },
    {
      title: "Our First Memory",
      text: "Remember our first picture together? I knew then that my heart was yours.",
      img: "/first-date.jpg",
    },
  {
    title: "A Funny Moment",
    text: "That time we want to do video and you changed your mind, but i did like i don't care, then my reaction made us both laughed during the video 😂 — still one of my favorites!",
    video: "/funny-moment.mp4"  
  },
    {
      title: "Mi corazon",
      text: "I know we fight a lot, but i still can't stop loving you, and despite my bad character, be both know how we understand each other,  !",
      img: "/just.jpg",
    },
        {
      title: "You are Amazing",
      text: " Oluwakemisola, you are an incredible person, and I am so grateful to have you in my life. Your kindness, strength, and beauty inspire me every day. Happy Birthday, my love!",
      img: "/amazing.jpg",
    },
        {
      title: "From Me to You",
      text: "Olowakemisola, Alajike mi, I pray that this year brings you endless joy, success, and all the love your heart can hold. You deserve the world and more. Happy Birthday, my dearest!",
      img: "/cover.jpg",
    },
        {
      title: "Conclusion",
      text: " So in conclusion, Oluwakemisola, you make every day brighter. I love you endlessly ❤️ And I can't wait to create more memories with you. Happy Birthday once again!",
      img: "/happy.jpg",
    },
  ];

  const toggleOpen = () => {
    setOpen(!open);
    if (!open) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-violet-500 to-indigo-700 text-white flex items-center justify-center p-6">
      {showConfetti && <Confetti />}

      <div className="max-w-3xl w-full">
        {!open ? (
          <motion.div
            className="bg-white/10 p-8 rounded-3xl shadow-2xl text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={toggleOpen}
          >
            <div className=" flex flex-col items-center">

              <img
    src="/final-page.jpg"
    alt="Birthday Cover"
    className="rounded-2xl mb-6 shadow-lg w-66 h-90 object-fit"
    />
    </div>
            <h1 className="text-3xl font-bold mb-4">
              For My Love – Happy Birthday, Grace ❤️
            </h1>
            <p className="text-lg">Tap here to open our storybook!</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={pageIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="bg-white/20 p-8 rounded-3xl shadow-2xl text-slate-900 flex flex-col items-center"
            >
{pages[pageIndex].video ? (
  <video
    src={pages[pageIndex].video}
    autoPlay
    loop
    muted
    playsInline
    className="rounded-2xl mb-6 shadow-lg w-66 h-90 object-fit"
  />
) : pages[pageIndex].img ? (
  <img
    src={pages[pageIndex].img}
    alt={pages[pageIndex].title}
    className="rounded-2xl mb-6 shadow-lg w-66 h-90 object-fit"
  />
) : null}
              <h2 className="text-2xl font-bold mb-2">
                {pages[pageIndex].title}
              </h2>
              <p className="text-lg text-slate-900/90 text-center">
                {pages[pageIndex].text}
              </p>

              <div className="mt-6 flex w-full justify-between">
                <button
                  onClick={() => setPageIndex(Math.max(pageIndex - 1, 0))}
                  className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (pageIndex < pages.length - 1)
                      setPageIndex(pageIndex + 1);
                    else setShowConfetti(true);
                  }}
                  className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
                >
                  {pageIndex === pages.length - 1 ? "Celebrate 🎉" : "Next"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
