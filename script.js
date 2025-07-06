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

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("messageInput").value.trim();

  if (message) {
    db.ref("messages").push({
      text: message,
      timestamp: Date.now()
    });
    document.getElementById("messageInput").value = "";
    alert("Message sent anonymously!");
  }
});