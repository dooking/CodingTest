import sys
N=int(input())
item=[]
for i in range(N):
    A=sys.stdin.readline().split()
    if(A[0]=="push"):
        item.append(A[1])
    elif(A[0]=="pop"):
        if(len(item)==0):
            print(-1)
        else:
            print(item[0])
            del item[0]
    elif(A[0]=="size"):
        print(len(item))
    elif(A[0]=="empty"):
        if(len(item)==0):
            print(1)
        else:
            print(0)
    elif(A[0]=="front"):
        if(len(item)==0):
            print(-1)
        else:
            print(item[0])    
    elif(A[0]=="back"):
        if(len(item)==0):
            print(-1)
        else:
            print(item[-1])       