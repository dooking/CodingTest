B=[]
count=0
for i in range(10):
    A=int(input())
    if(i==0):
        B.append(A%42)
    for j in range(len(B)):
        if(B[j]!=A%42):
            count+=1
    if(count==len(B)):
        B.append(A%42)
    count=0
print(B)