# Given a string, return a string where for every char in the original, there are two chars.
# double_char('AAbb') → 'AAAAbbbb'

def double_char(str):
  res = ""
  for i in str:
    res += i * 2
  return res

