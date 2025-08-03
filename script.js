let moveCount = 0;

    function moveButton() {
      const btn = document.getElementById('noBtn');

      const offset = 100; // khoảng cách di chuyển
      const x = (Math.random() - 0.5) * offset * 2;
      const y = (Math.random() - 0.5) * offset * 2;

      btn.style.transform = `translate(${x}px, ${y}px)`;

      moveCount++;
      if (moveCount > 5) {
        btn.innerText = "Ai cho chọn không 😢";
      }
    }

    function replyYes() {
  const yesBtn = document.getElementById("yesBtn");
  const rect = yesBtn.getBoundingClientRect();

  // Hiệu ứng nổ trái tim
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.innerText = "💖";

    const angle = Math.random() * 2 * Math.PI;
    const distance = 80 + Math.random() * 40;
    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    heart.style.setProperty('--x', x);
    heart.style.setProperty('--y', y);
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + rect.height / 2 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 800);
  }

  // Hiển thị dòng chữ tỏ tình thành công
  const message = document.getElementById("loveMessage");
  message.style.display = "block";
}



    // Hiệu ứng trái tim rơi
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💖";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.fontSize = Math.random() * 10 + 16 + "px";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);