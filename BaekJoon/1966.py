import queue
T = int(input())
Q = queue.PriorityQueue()
for i in range(T):
    N,M=(map(int,input().split()))
    A=list(map(int,input().split()))
    key=A[M]
    count=0
    pri=0
    while A!=[]:
        count+=1
        if(A[0]==max(A)):
            pri+=1
            if(A[0]==key):
                if(M==0):
                    print(pri)
                    break
            del A[0]
        else:
            A.append(A[0])
            del A[0]
        M=M-1
        if(M<0):
            M=len(A)-1