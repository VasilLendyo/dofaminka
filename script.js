document.getElementById("telegramForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
  
    const token = "7792998616:AAFmqhMJri8rJpflwP7cTXrIc7USYbSI-QY";
    const chat_id = "40585373";
    const message = `Кохання, нова заявка! Ім'я: ${name}, Телефон: ${phone}`;
  
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
        document.getElementById("resultMessage").textContent = "Заявка надіслана!";
      } else {
        response.text().then(text => {
          document.getElementById("resultMessage").textContent = `Помилка: ${text}`;
          console.error("Помилка:", text);
        });
      }
    });
  });
  