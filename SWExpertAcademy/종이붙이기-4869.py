t = int(input())
def paper(n):
    n = n//10
    a = [0]*31
    a[1] = 1
    a[2] = 3
    for i in range(3,n+1):
        if(i%2==0):
            a[i] = a[i-1]*2 + 1
        else:
            a[i] = a[i-1]*2 - 1
    return a[n]
for test_case in range(1,t+1):
    m = int(input())
    answer = paper(m)
    print("#{0} {1}".format(test_case,answer))                                