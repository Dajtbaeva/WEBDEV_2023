'''
Задача №63. A[0], A[2], A[4], ...
Необходимо вывести все элементы массива с чётными номерами.
'''
n = int(input())
a = list(map(int, input().split()))
for i in range(n):
    if i % 2 == 0:
        print(a[i], end=' ')
