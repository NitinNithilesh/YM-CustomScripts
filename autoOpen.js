try {
  setTimeout(function () {
    YellowMessengerPlugin.toggleChat();
  }, 10000);
} catch (e) {
  console.log(e, "Er in custom script :: ");
}
