'''
Given a number n, return True if n is in the range 1..10, inclusive. 
Unless outside_mode is True, in which case return True if the number 
is less or equal to 1, or greater or equal to 10.
'''
def in1to10(n, outside_mode):
  if n == 10 or n == 1:
    return True
  return (n in range(1,11)) ^ outside_mode

