import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div>{console.log(isOpen)}</div>
      <Sidebar />
      <Navbar toggle={() => toggle} />
    </div>
  );
};

export default Home;
