'''
Задача №2959. Знак числа
Для данного числа x выведите значение sign(x).
'''
n = int(input())
if n > 0:
    print(1)
elif n < 0:
    print(-1)
else:
    print(0)