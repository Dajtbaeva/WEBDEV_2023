def missing_char(str, n):
  first, last = str[:n], str[n + 1:]
  return first + last
