(function () {
  "use strict";

  function initVisualizer(host) {
    const path = host.querySelector("[data-flow-path]");
    const packet = host.querySelector("[data-flow-packet]");
    const play = host.querySelector("[data-flow-play]");
    const reset = host.querySelector("[data-flow-reset]");
    const speed = host.querySelector("[data-flow-speed]");
    if (!path || !packet || !play || !reset || !speed) return;

    const length = path.getTotalLength();
    let progress = 0;
    let running = false;
    let frame = 0;
    let previousTime = 0;

    function draw() {
      const point = path.getPointAtLength(length * progress);
      packet.setAttribute("transform", `translate(${point.x} ${point.y})`);
      packet.setAttribute("aria-label", `Data packet at ${Math.round(progress * 100)} percent of the path`);
    }

    function tick(time) {
      if (!running) return;
      const delta = previousTime ? time - previousTime : 0;
      previousTime = time;
      const multiplier = Number(speed.value || 1);
      progress += (delta / 4200) * multiplier;
      if (progress >= 1) progress = 0;
      draw();
      frame = requestAnimationFrame(tick);
    }

    play.addEventListener("click", () => {
      running = !running;
      play.textContent = running ? "Pause" : "Play";
      previousTime = 0;
      if (running) frame = requestAnimationFrame(tick);
      else cancelAnimationFrame(frame);
    });

    reset.addEventListener("click", () => {
      running = false;
      cancelAnimationFrame(frame);
      play.textContent = "Play";
      progress = 0;
      draw();
    });

    speed.addEventListener("change", () => { previousTime = 0; });
    draw();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-flow-visualizer]").forEach(initVisualizer);
  });
})();
