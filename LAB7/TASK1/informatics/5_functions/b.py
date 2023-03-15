''' 
Задача №307. Степень
Необходимо вывести  значение an.
'''
def power(a, n):
    return a ** n
# def power(double a, unsigned n){
#   double result = 1;
#   for (double pow_a = a; n != 0; n >>= 1, pow_a *= pow_a)
#     if ((n & 1) != 0)
#       result *= pow_a;
 
#   return result;
# }    
x, y = map(int, input().split())
print(power(x, y))