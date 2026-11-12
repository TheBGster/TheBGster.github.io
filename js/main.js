document.querySelectorAll("[data-demo]").forEach((frame) => {
  const video = frame.querySelector("video");
  const youtubeId = frame.getAttribute("data-youtube");

  if (!video) {
    return;
  }

  const showYouTube = () => {
    if (!youtubeId || frame.querySelector("iframe.demo-frame")) {
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.className = "demo-frame";
    iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`;
    iframe.title = video.getAttribute("aria-label") || "Demo video";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    video.replaceWith(iframe);
  };

  video.addEventListener("error", showYouTube);
  video.querySelectorAll("source").forEach((source) => {
    source.addEventListener("error", showYouTube);
  });
});
