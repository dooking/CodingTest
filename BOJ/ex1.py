A=[]
for i in range(8):
    A.append(int(input()))
k=0
x=0
y=0
while k<8:
    if(A[k]<A[k+1]):
        x+=1
        k=k+1
    else:
        y+=1
        k=k+1
if(x==7):
    print("ascending")
elif(y==7):
    print("descending")
else:
    print("mixed")