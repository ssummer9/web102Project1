import React from 'react'
import './App.css'

import Card from "./Card";

function App() {
  const items = [
    { title: "React Introduction", description: "Beginner-friendly tutorial", link: "https://react.dev" },
    { title: "Vite Docs", description: "Fast build tool", link: "https://vite.dev" },
    { title: "JavaScript Tips", description: "Learn modern JS", link: "https://javascript.info" },
    { title: "CSS Grid", description: "Master CSS layouts", link: "https://css-tricks.com" },
    { title: "Web APIs", description: "Browser APIs guide", link: "https://developer.mozilla.org" },
    { title: "Python Basics", description: "Learn Python programming", link: "https://python.org" },
    { title: "HTML/CSS Crash Course", description: "Web development fundamentals", link: "https://developer.mozilla.org" },
    { title: "Node.js Guide", description: "Server-side JavaScript", link: "https://nodejs.org" },
    { title: "GitHub Learning Lab", description: "Learn Git and GitHub", link: "https://lab.github.com" },
    { title: "FreeCodeCamp", description: "Comprehensive coding curriculum", link: "https://www.freecodecamp.org" }
  ];

  return (
    <>
      <h1>Coding Resources</h1>
      <div className="grid">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </>
  );
}



export default App
