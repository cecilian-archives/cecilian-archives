import type { ReactElement } from "react";

import { useRouter } from "next/router";
import DashHeader from "src/components/DashHeader";
import DashFooter from "src/components/DashFooter";

type Props = {
  children: ReactElement;
};

const DashLayout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start items-center">
      <DashHeader />
      <main
        key={router.asPath}
        className="w-screen flex-1 bg-archiveBlue-50 flex flex-col justify-start items-center"
      >
        {children}
      </main>
      <DashFooter />
    </div>
  );
};

export default DashLayout;
