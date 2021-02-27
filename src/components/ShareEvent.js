import React from "react";
import { useClipboard } from "use-clipboard-copy";

const ShareEvent = ({ url }) => {
  const clipboard = useClipboard({
    copiedTimeout: 600, // timeout duration in milliseconds
  });

  return (
    <div>
      <div className="flex form-input shadow max-w-2xl my-5 ">
        <input
          className="w-full bg-card focus:outline-none cursor-pointer"
          onClick={clipboard.copy}
          ref={clipboard.target}
          value={url}
          readOnly
        />
        <button className="flex" onClick={clipboard.copy}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
          </svg>
          {clipboard.copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShareEvent;
