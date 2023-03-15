'''
Задача №306. Минимум 4 чисел
Необходимо вывести  наименьшее из 4-х данных чисел.
'''
def mini(x):
    return min(list(map(int, x.split())))
print(mini(input()))
