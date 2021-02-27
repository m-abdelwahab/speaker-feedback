import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center absolute bottom-0 pb-5 flex-shrink-0">
      Built using{" "}
      <a
        className="text-red-600 hover:text-red-700"
        href="https://aws.amazon.com/amplify/"
      >
        {" "}
        AWS Amplify
      </a>
      ,{" "}
      <a
        className="text-red-600 hover:text-red-700"
        href="https://reactjs.org/"
      >
        React{" "}
      </a>{" "}
      and{" "}
      <a
        className="text-red-600 hover:text-red-700"
        href="https://tailwindcss.com/"
      >
        TailwindCSS
      </a>
    </footer>
  );
};

export default Footer;
