import { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "./../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { IoArrowBack } from "react-icons/io5";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //reset when unmounting
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="sm:h-[450px] md:min-w-[550px] flex flex-col w-full">
      {/* Back Button for Mobile */}
      <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
        <IoArrowBack
          className="md:hidden text-white text-xl cursor-pointer mr-2"
          onClick={() => setSelectedConversation(null)}
        />
        <span className="label-text text-gray-300">To: </span>
        <span className="text-gray-200 font-bold">
          {" "}
          {selectedConversation?.fullName}
        </span>
      </div>

      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md-text-mx text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// Starter code

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         {/* Header */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text text-gray-300">To: </span>
//           <span className="text-gray-200 font-bold">Ella Dekel</span>
//         </div>
//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   );
// };

// export default MessageContainer;
