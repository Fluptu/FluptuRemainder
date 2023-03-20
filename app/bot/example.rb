include Facebook::Messenger
module Example
  Facebook::Messenger::Bot.on :message do |message|
    message.reply(text: 'Hello, human!')
  end
end