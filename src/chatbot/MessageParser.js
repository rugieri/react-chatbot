class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
    if (lowercase.includes("python") || lowercase.includes("py")) {
      this.actionProvider.handlePythonQuiz();
    }
  }
}
export default MessageParser;
