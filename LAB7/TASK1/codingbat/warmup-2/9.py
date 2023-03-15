def string_match(a, b):
  s = min(len(a), len(b))
  cnt = 0
  for i in range(s - 1):
    a_s = a[i : i + 2]
    b_s = b[i : i + 2]
    if a_s == b_s:
      cnt += 1
  return cnt
