import React, { useState } from "react";
import { BrowserRouter as Link, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  // apiKey = process.env.REACT_API_KEY
  let apiKey = "65ccb928a6d54072b14c236b6fe20754";

  let category = [
    { title: "Business", path: "business" },
    { title: "Entertainment", path: "entertainment" },
    { title: "General", path: "general" },
    { title: "Health", path: "health" },
    { title: "Science", path: "science" },
    { title: "Sports", path: "sports" },
    { title: "Technology", path: "technology" },
  ];
  return (
    <div
      className="font-Comfortaa  bg-gray-300 h-fit  w-full"
      // style={{
      //   backgroundSize: "cover",
      //   overflow: "hidden",
      // }}
    >
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route
          path="/"
          element={<News  setProgress={setProgress}  apikey={apiKey} pageSize={6} country="in" category="general" />}
        />
        {category.map((elem, index) => {
          return (
            <Route
              exact
              key={index}
              path={`/${elem.path}`}
              element={
                <News setProgress={setProgress} apikey={apiKey} pageSize={6} key={index} country="in" category={elem.title} />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
