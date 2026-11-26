const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatLog = document.getElementById("chat-log");

// База знань ШІ-консультанта Volkswagen
function getVolkswagenAiReply(userText) {
  const q = userText.toLowerCase();

  if (q.includes("golf") || q.includes("гольф")) {
    return "Volkswagen Golf — компактний та динамічний хетчбек. Оснащується двигуном 1.5 TSI (150 к.с.), витрата пального близько 5.4 л/100 км. Стартова ціна — від 1 180 000 грн.";
  }

  if (q.includes("tiguan") || q.includes("тігуан") || q.includes("кросовер") || q.includes("сім")) {
    return "Для сім'ї та подорожей найкраще підійде Volkswagen Tiguan: повний привід 4MOTION, великий багажник на 652 л, системи безпеки IQ.DRIVE та ціна від 1 650 000 грн.";
  }

  if (q.includes("passat") || q.includes("пасат")) {
    return "Volkswagen Passat — місткий універсал бізнес-класу з двигунами 2.0 TDI або 2.0 TSI, адаптивною підвіскою DCC та багажником 690 л. Ціна — від 1 790 000 грн.";
  }

  if (q.includes("id.4") || q.includes("id4") || q.includes("електро") || q.includes("заряд")) {
    return "Volkswagen ID.4 має батарею 77 кВт·год та запас ходу до 520 км за циклом WLTP. На швидкій станції DC зарядка з 10% до 80% займає приблизно 30 хвилин. Ціна — від 1 490 000 грн.";
  }

  if (q.includes("гарант") || q.includes("сервіс") || q.includes("то")) {
    return "На нові автомобілі Volkswagen діє офіційна гарантія 2 роки без обмеження пробігу (з можливістю продовження до 4 років) та 8 років або 160 000 км на високовольтну батарею електромобілів ID.";
  }

  if (q.includes("тест-драйв") || q.includes("тест драйв") || q.includes("запис")) {
    return "Щоб записатися на тест-драйв Volkswagen, оберіть бажану модель (Golf, Tiguan, Passat або ID.4) та зверніться до найближчого офіційного дилерського центру з водійським посвідченням категорії B.";
  }

  if (q.includes("tdi") || q.includes("дизель") || q.includes("краще")) {
    return "Якщо ви часто їздите на далекі відстані між містами — обирайте економічний дизель 2.0 TDI (Passat або Tiguan). Для щоденних поїздок містом із мінімальними витратами на паливо ідеально підійде електричний ID.4.";
  }

  return "Дякую за запитання! У лінійці Volkswagen представлені міський хетчбек Golf, сімейний кросовер Tiguan, бізнес-універсал Passat та електрокросовер ID.4. Уточніть, яка саме модель або характеристика вас цікавить?";
}

function appendMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `msg ${sender === "user" ? "user-msg" : "ai-msg"}`;
  div.textContent = text;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function handleUserQuery(question) {
  if (!question.trim()) return;
  appendMessage(question, "user");

  setTimeout(() => {
    const reply = getVolkswagenAiReply(question);
    appendMessage(reply, "ai");
  }, 350);
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const question = chatInput.value;
  chatInput.value = "";
  handleUserQuery(question);
});

// Кнопки швидких запитань та кнопки під картками моделей
document.querySelectorAll(".quick-q, .ask-ai-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const question = btn.dataset.question || btn.textContent;
    document.getElementById("ai-consultant").scrollIntoView({ behavior: "smooth" });
    handleUserQuery(question);
  });
});