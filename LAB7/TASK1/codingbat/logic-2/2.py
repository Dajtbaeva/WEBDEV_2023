'''
Given 3 int values, a b c, return their sum. However, if one of the values 
is the same as another of the values, it does not count towards the sum.
'''

def lone_sum(a, b, c):
  sumi = 0
  sumi += a if a not in [b,c] else 0
  sumi += b if b not in [a,c] else 0
  sumi += c if c not in [a,b] else 0
  return sumi

