'''
Given three ints, a b c, return True if one of b or c is "close" 
(differing from a by at most 1), while the other is "far", differing 
from both other values by 2 or more. Note: abs(num) computes the 
absolute value of a number.
'''
def close_far(a, b, c):
  return (abs(abs(b) - abs(c)) >= 2) and \
  ((abs(abs(b) - abs(a)) <= 1 and abs(abs(c) - abs(a)) >= 2) \
  or (abs(abs(c) - abs(a)) <= 1 and abs(abs(b) - abs(a)) >= 2))

