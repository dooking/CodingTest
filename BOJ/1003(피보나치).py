import sys

def fib(n):
    a=[[1,0],[0,1]]
    for i in (range(2,41)):
        a.append([a[i-2][0]+a[i-1][0],a[i-2][1]+a[i-1][1]])
    x=a[n][0]
    y=a[n][1]
    print(x,y)

T=int(sys.stdin.readline())
for i in range(T):
    n=int(sys.stdin.readline())
    fib(n)