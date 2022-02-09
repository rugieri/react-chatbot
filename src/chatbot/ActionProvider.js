class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  greet() {
    const message = this.createChatBotMessage("Hello, friend");
    this.addMessageToState(message);
  }
}

export default ActionProvider;
