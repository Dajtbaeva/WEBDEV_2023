'''
Задача №345. Нули
Подсчитайте и выведите, сколько среди данных N чисел нулей.
'''
n, cnt = int(input()), 0
for i in range(n):
    a = int(input())
    if a == 0:
        cnt += 1
print(cnt)
