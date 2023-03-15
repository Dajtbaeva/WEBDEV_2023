# Return True if the given string contains an appearance of "xyz" where the xyz 
# is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.
# xyz_there('abcxyz') → True
# xyz_there('abc.xyz') → False


def xyz_there(str):
  j = 0
  while "xyz" in str[j:]:
    if str[j - 1 + str[j:].index("xyz")] != ".":
        return True
    j += str[j:].index("xyz") + 2
  return False


