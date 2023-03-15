'''
Задача №67. Есть ли два элемента с одинаковыми знаками
Необходимо вывести слово YES, если существует пара соседних элементов 
с одинаковыми знаками. В противном случае следует вывести слово NO.
'''
n, flag = int(input()), False
a = list(map(int, input().split()))
for i in range(1, n):
    if a[i] * a[i - 1] > 0:
        flag = True
        break
print("YES" if flag else "NO")
