T=int(input())
for i in range(T):
    A = list(map(int,input().split()))
    d = ((A[3]-A[0])**2+(A[4]-A[1])**2)**0.5
    r1 = abs(A[5]+A[2])
    r2= abs(A[5]-A[2])
    if(d==0):
        if(r2==0):
            print(-1)
        else:
            print(0)
    elif(r1<d):
        print(0)
    elif(d<r2):
        print(0)
    elif(r1==d):
        print(1)
    elif(r2==d):
        print(1)
    elif(d<r1):
        if(r2<d):
            print(2)