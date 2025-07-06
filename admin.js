const firebaseConfig = {
  apiKey: "AIzaSyDOC48BkVsFSJQa0M-qmaqG-z4FWO-_D2o",
  authDomain: "ace-anonymous-messages.firebaseapp.com",
  projectId: "ace-anonymous-messages",
  storageBucket: "ace-anonymous-messages.firebasestorage.app",
  messagingSenderId: "84774449539",
  appId: "1:84774449539:web:57032544cb908f0ff0c6b6",
  measurementId: "G-EL66WYXBXW",
  databaseURL: "https://ace-anonymous-messages-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const messagesDiv = document.getElementById("messages");

db.ref("messages").on("value", function (snapshot) {
  messagesDiv.innerHTML = "";
  const messages = snapshot.val();
  if (!messages) {
    messagesDiv.innerHTML = "<p>No messages yet.</p>";
    return;
  }

  const entries = Object.entries(messages).reverse();
  for (let [id, msgObj] of entries) {
    const div = document.createElement("div");
    div.className = "message";
    div.textContent = msgObj.text;
    messagesDiv.appendChild(div);
  }
});