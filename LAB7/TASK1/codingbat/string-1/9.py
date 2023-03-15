'''
combo_string('Hello', 'hi') → 'hiHellohi'
combo_string('hi', 'Hello') → 'hiHellohi'
combo_string('aaa', 'b') → 'baaab'
'''

def combo_string(a, b):
  return a + b + a if len(a) < len(b) else b + a + b

