import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, publishedAt, author, source } =
    props;
  return (
    <>
      <div className="card my-2" style={{ width: "20rem", margin: "auto" }}>
        <img
          src={imgUrl}
          className="card-img-top"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div className="card-body">
          <span className="position-absolute top-0 start-110 translate-middle badge rounded-pill bg-danger">
            {source.name}
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5
            className="card-title"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              // paddingBottom: "1rem",
            }}
          >
            {title}
          </h5>
          <p
            className="card-text"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              // paddingBottom: "1rem",
            }}
          >
            {description}
          </p>
          <h4 style={{ fontSize: ".7rem" }}>
            By {author} on {publishedAt}
          </h4>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Read Now
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
