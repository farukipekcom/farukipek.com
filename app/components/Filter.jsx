import React from "react";

export default function Filter() {
  const Tags = ["All", "CSS", "Life", "Next.JS", "United States"];
  return (
    <div className="tags">
      {Tags.map((item) => {
        return (
          <div className="tag" key="id">
            {item}
          </div>
        );
      })}
    </div>
  );
}
