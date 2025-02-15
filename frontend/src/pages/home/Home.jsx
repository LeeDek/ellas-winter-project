import Sidebar from "./../../components/Sidebar/Sidebar";
import MessageContainer from "./../../components/messages/MessageContainer";
import useConversation from "./../../zustand/useConversation";
import { useState } from "react";

const Home = () => {
  const { selectedConversation } = useConversation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  window.addEventListener("resize", () => setIsMobile(window.innerWidth < 768));

  return (
    <div className="flex sm:h-[500px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* Show Sidebar on Desktop or when no conversation is selected on mobile */}
      {(!isMobile || !selectedConversation) && <Sidebar />}

      {/* Show chat only when a conversation is selected */}
      {(!isMobile || selectedConversation) && <MessageContainer />}
    </div>
  );
};

export default Home;
