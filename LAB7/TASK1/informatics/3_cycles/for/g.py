'''
Задача №339. Минимальный делитель
Выведите наименьший делитель числа x, отличный от 1.
'''

a = int(input())
for i in range(2, a + 1):
    if a % i == 0:
        print(i)
        break