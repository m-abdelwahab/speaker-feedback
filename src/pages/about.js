import React from "react";

const About = () => {
  return (
    <div className="h-screen">
      <div className="pt-24 container px-12 md:px-24 mx-auto prose prose-sm sm:prose lg:prose-lg">
        <h1>About This Project</h1>
        <h2>Tech Stack:</h2>
        <ul>
          <li>React.js</li>
          <li>TailwindCSS</li>
          <li>AWS Amplify (GraphQL API + Authentication)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
