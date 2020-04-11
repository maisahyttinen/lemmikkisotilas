import React, { useEffect, useState } from "react";

export const Instagram = () => {
  const [images, setImages] = useState(undefined);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://www.instagram.com/maisahyttinen/?__a=1"
      );
      const data = await response.json();
      const images = data.graphql.user.edge_owner_to_timeline_media.edges
        .map((node) => {
          return node.node.thumbnail_resources[2].src;
        })
        .slice(0, 9);
      setImages(images);
    } catch (err) {
      setImages(undefined);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (!images) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "460px",
          display: "grid",
          gridGap: "5px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {images.map((image) => (
          <img key={image} src={image} alt="instagram-image" />
        ))}
      </div>
    </div>
  );
};
