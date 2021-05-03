# Emoji Converter
def split_text(text, separator=" "):
    if not text:
        return
    return text.split(separator)


def get_converted_text(text):
    emoji_dictionary = {
        ':)': '😀',
        ':(': '🙁',
    }
    message_list = split_text(text)
    for item in message_list:
        element = emoji_dictionary.get(item, item)
        index = message_list.index(item)
        message_list[index] = element
    return ' '.join(message_list)


message = input('> ')
result = get_converted_text(message)
print(result)
