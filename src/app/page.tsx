"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const popVariants = {
    initial: { backdropFilter: " blur(0px)" },
    animate: { backdropFilter: " blur(12px)" },
    exit: { backdropFilter: " blur(0px)" },
  };

  const buttonCloseVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", bounce: 100 },
  };

  return (
    <main className="w-screen h-screen grid place-items-center bg-[#d6e2f0] relative">
      {/* container */}
      <LayoutGroup>
        <div className=" w-[220px] min-h-52 p-3 bg-white rounded-xl shadow-xl shadow-[#7b879d]/10">
          {/* image */}
          <motion.div
            className="w-full"
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            layoutId="qrImage"
          >
            <Image
              src="/qr.png"
              alt="qr image"
              loading="lazy"
              width={196}
              height={200}
              className=" rounded-lg"
            />
          </motion.div>
          {/* desciption */}
          <div className="my-2 px-2 text-center">
            <h3 className=" text-[#1f3251] text-sm font-bold">
              Improve yor front-end <br /> skills by building projects
            </h3>
            <p className=" text-[#1f3251] text-[12px] py-2 text-balance">
              Scan the QR code to vist Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
        {/* popup container */}
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              className="inset-0 absolute backdrop-blur-md grid place-content-center "
              variants={popVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex flex-col gap-y-5 items-center">
                <motion.div layoutId="qrImage">
                  <Image
                    src="/qr.png"
                    alt="qr image"
                    loading="lazy"
                    width={250}
                    height={400}
                    className=" rounded-lg"
                  />
                </motion.div>
                <motion.button
                  className="h-10 aspect-square rounded-[50%] text-slate-500 grid place-items-center border border-slate-600 hover:bg-slate-700 hover:text-slate-300 transition-all ease-linear"
                  onClick={() => setIsPopupOpen(!isPopupOpen)}
                  variants={buttonCloseVariants}
                >
                  <X size={16} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </main>
  );
}
