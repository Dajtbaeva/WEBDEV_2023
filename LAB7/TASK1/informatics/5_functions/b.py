''' 
Задача №307. Степень
Необходимо вывести  значение an.
'''
def power(a, n):
    return pow(a, n)

a = power(*list(map(float, input().split())))
print(a)