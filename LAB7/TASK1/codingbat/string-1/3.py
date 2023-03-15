# make_tags('i', 'Yay') → '<i>Yay</i>'

def make_tags(tag, word):
  return '<{tag}>{word}</{tag}>'.format(tag=tag, word=word)
