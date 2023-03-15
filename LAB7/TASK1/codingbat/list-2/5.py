'''
Return the sum of the numbers in the array, except ignore sections of 
numbers starting with a 6 and extending to the next 7 (every 6 will 
be followed by at least one 7). Return 0 for no numbers.
'''
def sum67(nums):
  cnt, flag = 0, False
  for i in nums:
    if i == 6:
      flag = True
      continue
    if i == 7 and flag:
      flag = False
      continue
    if not flag:  
      cnt += i
  return cnt


