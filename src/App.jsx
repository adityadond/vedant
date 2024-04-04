import React from "react";
import "./App.css"; // Import the CSS file for styling

const App = () => {
  const data = [
    { title: "Title 1", subtitle: "Subtitle 1" },
    { title: "Title 2", subtitle: "Subtitle 2" },
    { title: "Title 3", subtitle: "Subtitle 3" },
    { title: "Title 4", subtitle: "Subtitle 4" },
    { title: "Title 5", subtitle: "Subtitle 5" },
    { title: "Title 6", subtitle: "Subtitle 6" },
    { title: "Title 7", subtitle: "Subtitle 7" },
    { title: "Title 8", subtitle: "Subtitle 8" },
    { title: "Title 9", subtitle: "Subtitle 9" },
    { title: "Title 10", subtitle: "Subtitle 10" },
    { title: "Title 11", subtitle: "Subtitle 11" },
    { title: "Title 12", subtitle: "Subtitle 12" },
    { title: "Title 13", subtitle: "Subtitle 13" },
    { title: "Title 14", subtitle: "Subtitle 14" },
    { title: "Title 15", subtitle: "Subtitle 15" },
    { title: "Title 16", subtitle: "Subtitle 16" },
    // Add more objects as needed
    // ...
  ];

  return (
    <>
      <h1 className="heading">My Dashboard</h1>
      <div className="container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
