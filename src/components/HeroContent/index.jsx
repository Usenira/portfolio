import Input from "./Input";
import Hero from "../../assets/my_image_hd.png";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const parentVariants = {
  before: {
    opacity: 0,
    translateX: -10,
  },
  open: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};
const childVariants = {
  before: {
    opacity: 0,
    translateX: -10,
  },
  open: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 1,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="h-screen w-screen  grid grid-cols-2 items-center justify-items-center">
      <div className="ml-28">
        <motion.div
          variants={parentVariants}
          initial={"before"}
          animate={"open"}
          className="text-7xl font-bold uppercase relative text-indigo-900 tracking-normal text-shadow-md"
        >
          <motion.span
            variants={childVariants}
            initial={"before"}
            animate={"open"}
            className=""
          >
            Hello,
          </motion.span>{" "}
          <motion.span
            variants={childVariants}
            initial={"before"}
            animate={"open"}
            className="text-yellow-400 underline"
          >
            I am Nimish
          </motion.span>{" "}
          <br />{" "}
          <motion.span
            variants={childVariants}
            initial={"before"}
            animate={"open"}
          >
            Web Developer from India
          </motion.span>
        </motion.div>
        <Input />
      </div>

      <div className="flex h-full justify-center relative">
        <img src={Hero} alt="Hero" className="object-contain image h-screen" />
        <div className="absolute inset-28 bg-blue-800 rounded-full blur-[80px] opacity-40" />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 1,
              duration: 1,
            },
          }}
          whileHover={{
            cursor: "pointer",
            scale: 1.05,
            transition: {
              duration: 0.2,
            },
          }}
          className="absolute bottom-[15rem] right-[10rem] z-40 bg-white rounded-xl p-5 shadow-xl shadow-cyan-700/30"
        >
          <FaThumbsUp size={80} className="text-blue-700" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 1,
              duration: 1,
            },
          }}
          whileHover={{
            cursor: "pointer",
            scale: 1.05,
            transition: {
              duration: 0.2,
            },
          }}
          className="absolute bottom-[18rem] left-[10rem] z-40 bg-white p-5 rounded-xl shadow-xl shadow-cyan-900/30"
        >
          <FaHeart size={80} className="text-blue-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
