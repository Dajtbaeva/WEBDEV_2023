'''
Задача №341. Количество делителей
Выведите единственное число - количество делителей числа a.
'''
from math import sqrt

a, res = int(input()), 0

for i in range(1, int(sqrt(a)) + 1):
    if a % i == 0:
        res += 1
        if i != a // i:
            res += 1

print(res)