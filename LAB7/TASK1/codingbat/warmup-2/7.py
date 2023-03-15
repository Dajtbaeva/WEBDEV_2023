def array_front9(nums):
  n = 4 if len(nums) > 4 else len(nums)
  for i in range(n):  
    if nums[i] == 9:
      return True
  return False
