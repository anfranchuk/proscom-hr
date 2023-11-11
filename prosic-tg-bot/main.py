import telegram
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
from transformers import BertForSequenceClassification, BertTokenizer

# Загрузите предобученную модель BERT и токенизатор
model = BertForSequenceClassification.from_pretrained('bert-base-cased')
tokenizer = BertTokenizer.from_pretrained('bert-base-cased')

def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Привет! Я готов отвечать на ваши вопросы.")


def answer_question(update, context):
    question = update.message.text
    
    # Предобработка вопроса
    input_ids = tokenizer.encode(question, return_tensors='pt')
    
    # Получение ответа от модели
    outputs = model.generate(input_ids, max_length=100, num_return_sequences=1)
    
    # Декодирование ответа
    answer = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    # Отправка ответа пользователю
    context.bot.send_message(chat_id=update.effective_chat.id, text=answer)


# Создание экземпляра Updater и передача токена вашего бота
updater = Updater(token='сюда токен', use_context=True)

# Получение диспетчера для регистрации обработчиков
dispatcher = updater.dispatcher

# Регистрация обработчика команды /start
dispatcher.add_handler(CommandHandler('start', start))

# Регистрация обработчика входящих сообщений
dispatcher.add_handler(MessageHandler(Filters.text, answer_question))

# Запуск бота
updater.start_polling()