'''
Задача №341. Количество делителей
Выведите единственное число - количество делителей числа x.
'''
from math import sqrt
a, cnt = int(input()), 0
# for i in range(1, int(sqrt(a)) + 1):
#     if a % i == 0:
#         cnt += 2
cnt = 2 # 1 и само число
for i in range(2, int(a/2)+1): 
    if a % i == 0:
        cnt += 1
print(cnt)