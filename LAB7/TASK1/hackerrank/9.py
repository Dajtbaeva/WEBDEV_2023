def split_and_join(line):
    a = list(line.split())
    return '-'.join(a)

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)