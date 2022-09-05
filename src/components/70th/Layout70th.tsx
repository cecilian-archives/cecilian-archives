import type { ReactElement } from "react";

import { motion } from "framer-motion";
import Header70th from "src/components/70th/Header70th";
import Footer70th from "src/components/70th/Footer70th";

type Props = {
  children: ReactElement;
};

const Layout70th = ({ children }: Props) => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start items-center">
      <Header70th />
      <motion.main
        animate={{ y: ["4%", "0%"], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="w-screen flex flex-col justify-start items-center"
      >
        {children}
      </motion.main>
      <Footer70th />
    </div>
  );
};

export default Layout70th;
