C = int(input())
t=0
for i in range(C):
    avg=0
    sum=0
    N  = list(map(int,input().split()))
    for j in range(1,N[0]+1):
        sum= sum + N[j]
    avg=sum/N[0]
    t=0
    for k in range (1,N[0]+1):
        if(avg<N[k]):
            t=t+1
    print('%.3f%%' %((t/N[0])*100))     