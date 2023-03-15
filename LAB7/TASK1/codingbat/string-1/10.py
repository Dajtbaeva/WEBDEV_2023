'''
non_start('Hello', 'There') → 'ellohere'
non_start('java', 'code') → 'avaode'
non_start('shotl', 'java') → 'hotlava'
'''

def non_start(a, b):
  return a[1:] + b[1:]