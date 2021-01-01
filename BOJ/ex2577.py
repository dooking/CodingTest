A=int(input())
B=int(input())
C=int(input())
re=[0]*10
pro = [int(i) for i in str(A*B*C)]
for i in pro:
    re[i]+=1
for i in range(len(re)):
    print(re[i])