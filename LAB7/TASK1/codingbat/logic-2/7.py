'''
We want make a package of goal kilos of chocolate. We have small 
bars (1 kilo each) and big bars (5 kilos each). Return the number 
of small bars to use, assuming we always use big bars before small 
bars. Return -1 if it can't be done.
'''
def make_chocolate(small, big, goal):
  rem = goal % 5
 
  if (small + (big*5) < goal):
    return -1
  elif (rem <= small and goal - big*5 > 4):
    return rem + 5
  elif (rem <= small):
    return rem
  else:
    return -1


