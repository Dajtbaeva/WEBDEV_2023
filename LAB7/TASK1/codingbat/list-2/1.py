'''
Return the number of even ints in the given array. 
Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.
count_evens([2, 1, 2, 3, 4]) → 3
'''
def count_evens(nums):
  cnt = 0
  for i in nums:
    cnt -= i % 2 - 1
  return cnt

