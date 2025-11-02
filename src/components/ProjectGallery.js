function ProjectGallery() {
    const images = [
        "/Assets/about.png",
        "/Assets/ZIYAD_MOUSA_ASIRI.pdf",
        "/Assets/avatar.svg",
        "/Assets/home-main.svg",
        "/Assets/pre.svg",
        "/Assets/home-bg.jpg",
        "/Assets/Projects/44.png",
        "/Assets/Projects/22.png",
        "/Assets/Projects/6.png",
        "/Assets/Projects/3.png",
        "/Assets/Projects/1.png",
        "/Assets/Projects/0.png",
    ];

    return (
        <div>
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Project ${index}`} style={{ width: "200px", margin: "10px" }} />
            ))}
        </div>
    );
}

export default ProjectGallery;
