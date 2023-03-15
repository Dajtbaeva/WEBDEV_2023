# Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.
# count_code('aaacodebbb') → 1
# count_code('codexxcode') → 2

def count_code(str):
  cnt, i = 0, 0
  while "co" in str[i:]:
    if len(str[i + str[i:].index("co"):]) >= 4 and str[i + 3 + str[i:].index("co")] == "e":
      cnt += 1
    i += str[i:].index("co") + 3
  return cnt

