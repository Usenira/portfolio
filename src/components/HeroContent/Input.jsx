import { motion } from "framer-motion";
const link = [
  {
    text: "ReactJS",
    link: "#",
  },
  {
    text: "NextJS",
    link: "#",
  },
  {
    text: "NodeJS",
    link: "#",
  },
  {
    text: "MongoDB",
    link: "#",
  },
  {
    text: "Docker",
    link: "#",
  },
  {
    text: "Kubernetes",
    link: "#",
  },
  {
    text: "Microservices",
    link: "#",
  },
];
const Input = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, type: "tween", delay: 1 },
      }}
      className="bg-white rounded-xl pl-5 shadow-2xl  shadow-cyan-700/40 relative z-2 h-16 w-4/5 mt-16 flex justify-between items-center"
    >
      {/*  */}
      <ul className="flex justify-evenly w-full">
        {link.map((item) => (
          <motion.li>
            <a href={item.link}>{item.text}</a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Input;
