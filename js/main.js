const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-video-frame]").forEach((frame) => {
  const video = frame.querySelector("video");
  const playButton = frame.querySelector("[data-play]");
  const muteButton = frame.querySelector("[data-mute]");

  if (!video || !playButton || !muteButton) {
    return;
  }

  video.muted = true;

  const showControls = () => {
    playButton.hidden = false;
    muteButton.hidden = false;
  };

  let revealed = false;

  const syncPlayLabel = () => {
    const paused = video.paused;
    playButton.textContent = paused ? "Play" : "Pause";
    playButton.setAttribute("aria-pressed", paused ? "false" : "true");
  };

  const syncMuteLabel = () => {
    muteButton.textContent = video.muted ? "Sound on" : "Sound off";
    muteButton.setAttribute("aria-pressed", video.muted ? "false" : "true");
  };

  const reveal = () => {
    if (revealed || video.error) {
      return;
    }

    revealed = true;
    frame.classList.add("is-ready");
    showControls();
    syncMuteLabel();

    if (prefersReducedMotion) {
      video.pause();
      syncPlayLabel();
      return;
    }

    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt
        .then(syncPlayLabel)
        .catch(() => {
          video.pause();
          syncPlayLabel();
        });
    } else {
      syncPlayLabel();
    }
  };

  // A cached clip can finish loading before this script runs, so check now as well as later.
  video.addEventListener("loadeddata", reveal);
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    reveal();
  }

  video.addEventListener("error", () => {
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      return;
    }

    revealed = false;
    frame.classList.remove("is-ready");
    playButton.hidden = true;
    muteButton.hidden = true;
  });

  video.addEventListener("play", syncPlayLabel);
  video.addEventListener("pause", syncPlayLabel);

  playButton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    syncMuteLabel();
  });
});
