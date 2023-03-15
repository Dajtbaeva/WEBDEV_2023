def front3(str):
  front = 3
  if len(str) < front:
    front = len(str)
  res = str[:front]
  return res * 3
