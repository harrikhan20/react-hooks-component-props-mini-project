import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header.js";
import About from "../components/About.js";
import { logDOM } from "@testing-library/dom";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
 
 
 
  return (
    <div className="App">

      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList/>
      <Article title={blogData.title} date={blogData.date} preview={blogData.preview}/>
      
    </div>
  );

  
}

export default App;
