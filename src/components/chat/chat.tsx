// import React from "react";
// import Sidebar from "./sidebar";
// import Chatting from "./chatting";

// const Chat:React.FC = () => {
//   return (
//     <div className="flex m-5 rounded-xl p-10">
//       <Sidebar />
//       <Chatting />
//     </div>
//   )
// }

// export default Chat;
import React from 'react';
import MessageList from './sidebar';

const Chat: React.FC = () => {
  return (
    <div className="flex h-[625px] m-5 bg-gray-100 rounded-xl">
      {/* <div className="w-1/4 p-4 bg-white border-r">
        <div className="text-lg font-bold">Glare</div>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search people or message"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mt-4">
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <img
                src="https://via.placeholder.com/32"
                alt="Profile"
                className="rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold">Suzana Colin</p>
                <p className="text-sm text-gray-500">Chris Martin vocalist 🎤💖</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      <MessageList />
      <div className="flex-1 p-4 bg-white">
        <div className="flex items-center">
          <div className="font-semibold">Suzana Colin</div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col">
            <div className="self-start max-w-xs p-2 mb-2 text-white bg-gray-300 rounded-lg">
              <p>next time you'll be awake at this hour why not now</p>
            </div>
            <div className="self-start max-w-xs p-2 mb-2 text-white bg-gray-300 rounded-lg">
              <p>Didn’t I tell you not to put your phone on charge just because it’s the weekend?</p>
            </div>
            <div className="self-end max-w-xs p-2 mb-2 text-white bg-green-500 rounded-lg">
              <p>
                i woke up calmmn i put it on the charger the phone was turned off next to me
                I took it out while i was sleeping hasdfkagdhfgasjgf i slept early girl i slept at 3
              </p>
            </div>
            <div className="self-end max-w-xs p-2 mb-2 text-white bg-green-500 rounded-lg">
              <p>While you win in love, you continue to win in other things dhdhhdah</p>
              <div className="flex justify-end mt-1 space-x-1">
                <span>🔥</span><span>🔥</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 w-3/5 p-4 bg-white border-t">
          <input
            type="text"
            placeholder="Start a new message"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
