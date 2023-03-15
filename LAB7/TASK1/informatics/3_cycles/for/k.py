'''
Задача №343. Сумма чисел
Вводится число N, а затем N чисел, сумму которых необходимо вычислить.
'''
n, sumi = int(input()), 0
for i in range(n):
    sumi += int(input())
print(sumi)