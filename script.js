document.getElementById("telegramForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
  
    const token = "7792998616:AAFmqhMJri8rJpflwP7cTXrIc7USYbSI-QY";
    const chat_id = "1756985609";
    const message = `💬 Кохання, нова заявка з сайту:\n\n👩 Ім'я: ${name}\n📱 Телефон: ${phone}`;
  
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message
      })
    })
    .then(response => {
      if (response.ok) {
        document.getElementById("resultMessage").textContent = "✅ Заявка надіслана!";
      } else {
        document.getElementById("resultMessage").textContent = "❌ Сталася помилка. Спробуйте ще раз.";
      }
    });
  });
  
  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
