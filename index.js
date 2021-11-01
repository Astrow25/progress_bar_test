function startProgressBar() {
    const progress = document.getElementById("progress");
    const indicator = document.getElementById("indicator");
  
    progress.style.width = "";
  
    const progressInterval = setInterval(() => {
      const width = progress.style.width;
      if (!width) {
        progress.style.width = "1%";
        indicator.innerText = "1%";
        return;
      }
      if (width === "100%") {
        clearInterval(progressInterval);
        return;
      }
  
      const numericWidth = parseInt(width.split("%")[0], 0);
      progress.style.width = `${numericWidth + 1}%`;
      indicator.innerText = `${numericWidth + 1}%`;
    }, 20);
  }
  
  document.getElementById("start").addEventListener("click", startProgressBar);