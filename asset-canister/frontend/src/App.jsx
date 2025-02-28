function App() {
    const styles = {
        container: {
            minHeight: "100vh",
            backgroundColor: "#4158D0",
            backgroundImage:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        title: {
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "bold",
            color: "white",
            marginBottom: "2rem",
            textAlign: "center",
        },
        videoContainer: {
            width: "100%",
            maxWidth: "48rem",
            aspectRatio: "16 / 9",
            borderRadius: "0.5rem",
            overflow: "hidden",
            boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
        video: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>on-chain youtube</h1>
            <div style={styles.videoContainer}>
                <video
                    style={styles.video}
                    controls
                    playsInline
                    poster="/coffee.mp4"
                >
                    <source src="/coffee.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div style={styles.videoContainer}>
                <video
                    style={styles.video}
                    controls
                    playsInline
                    poster="/horse.mp4"
                >
                    <source src="/horse.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default App;
