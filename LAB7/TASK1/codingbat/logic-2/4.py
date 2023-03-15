'''
Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- 
in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not 
count as a teens. Write a separate helper "def fix_teen(n):"that takes in an int value 
and returns that value fixed for the teen rule. In this way, you avoid repeating the 
teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent 
level as the main no_teen_sum().
'''
def no_teen_sum(a, b, c):
  a1 = a if a not in [13,14,17,18,19] else 0
  b1 = b if b not in [13,14,17,18,19] else 0
  c1 = c if c not in [13,14,17,18,19] else 0

  return a1 + b1 + c1
