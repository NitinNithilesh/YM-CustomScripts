try {
  setTimeout(function () {
    YellowMessengerPlugin.toggleChat();
  }, 5000);
} catch (e) {
  console.log(e, "Er in custom script :: ");
}
