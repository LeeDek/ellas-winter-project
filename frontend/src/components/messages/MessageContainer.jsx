import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/* Header */}
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="label-text text-gray-300">To: </span>
          <span className="text-gray-200 font-bold">Ella Dekel</span>
        </div>
        <Messages />
        {/* <Message/> */}
      </>
    </div>
  );
};

export default MessageContainer;
