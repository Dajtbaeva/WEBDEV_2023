def pow2(a, b, m):
    return pow(a, b) % m
a, b, m = int(input()), int(input()), int(input())
print(pow(a, b), pow2(a, b, m), sep='\n')