N=int(input())
A=list(map(int,input().split()))
max = A[0]
sum= 0
for i in range(N):
    if(A[i]>max):
        max = A[i]
for i in range(N):
    A[i]=(A[i]/max)*100
    sum = sum + A[i]
print(sum/N)