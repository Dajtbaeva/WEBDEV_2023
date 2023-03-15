# Given two strings, return True if either of the strings appears at the very 
# end of the other string, ignoring upper/lower case differences (in other 
# words, the computation should not be "case sensitive"). Note: s.lower() 
# returns the lowercase version of a string.
# end_other('Hiabc', 'abc') → True

def end_other(a, b):
  l, s = (a,b) if len(a) >= len(b) else (b,a)
  return l.lower().endswith(s.lower())

