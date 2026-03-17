import React, { useState, useEffect } from "react";

function ImageCarousel() {

  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1020/800/400"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);

  }, [currentIndex]);

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>✨ Image Carousel ✨</h1>

      <div style={styles.card}>

        <img
          src={images[currentIndex]}
          alt="carousel"
          style={styles.image}
        />

        <div style={styles.buttons}>

          <button style={styles.btn} onClick={prevImage}>
            ◀ Previous
          </button>

          <button style={styles.btn} onClick={nextImage}>
            Next ▶
          </button>

        </div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #141e30, #243b55)",
    color: "white",
    padding: "20px"
  },

  title: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "40px"
  },

  card: {
    width: "90%",
    maxWidth: "900px",
    padding: "20px",
    borderRadius: "15px",
    background: "#1e293b",
    boxShadow: "0 0 15px black",
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    borderRadius: "10px",
    objectFit: "cover",
    boxShadow: "0 0 10px black"
  },

  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },

  btn: {
    padding: "10px 25px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#38bdf8",
    color: "black",
    fontWeight: "bold"
  }

};

export default ImageCarousel;