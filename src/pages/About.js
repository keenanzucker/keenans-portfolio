import React from "react";
import profilePic from "../assets/images/profile-pic.jpg";
import blogs from "../data/blogs.json";
import "./About.css";

function About() {
  return (
    <div className="container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="about-profile" />
        <p>
          Hi, I'm Keenan! I'm a software engineer and tech lead currently
          working at{" "}
          <a
            href="https://www.usekojo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kojo Technologies
          </a>
          . Previously, I worked at{" "}
          <a
            href="https://www.lever.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lever
          </a>
          . I graduated from{" "}
          <a
            href="https://www.olin.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olin College of Engineering
          </a>{" "}
          with a degree in Engineering with a concentration in Human Centered
          Computing.
        </p>
        <p>
          In my free time I like to run, backpack, bake, perform improv, read,
          and write.
        </p>
        <p>
          I wrote this website almost entirely using{" "}
          <a
            href="https://openai.com/blog/chatgpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChatGPT
          </a>
          , with some help of{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://particles.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-tsparticles
          </a>
          , and{" "}
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-router-dom
          </a>
          . I generated the portfolio banner images using{" "}
          <a
            href="https://openai.com/dall-e/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DALL-E
          </a>
          .
        </p>

        <h2 className="about-subtitle">Blog Posts</h2>
        <ul className="about-posts">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </a>
              <span className="about-date">{blog.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
