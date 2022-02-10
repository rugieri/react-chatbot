class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet() {
    const message = this.createChatBotMessage("Hello, friend");
    this.addMessageToState(message);
  }

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Here is your quiz, good luck!!!",
      {
        widget: "javascriptQuiz",
      }
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
