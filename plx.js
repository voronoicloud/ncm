const parallax = document.getElementById('parallax');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

const maxMovement = 5; // 5% maximal

document.addEventListener('mousemove', (e) => {
  const percentX = (e.clientX / window.innerWidth - 0.5) * -2 * maxMovement;
  const percentY = (e.clientY / window.innerHeight - 0.5) * -2 * maxMovement;

  targetX = percentX;
  targetY = percentY;
});

function animate() {
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  parallax.style.transform = `translate(calc(-50% + ${currentX}%), calc(-50% + ${currentY}%))`;

  requestAnimationFrame(animate);
}

animate();
