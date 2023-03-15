'''
first_two('Hello') → 'He'
first_two('abcdefg') → 'ab'
first_two('ab') → 'ab'
'''

def first_two(str):
  res = str if len(str) <= 2 else str[:2]
  return res
