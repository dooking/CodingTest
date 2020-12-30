def han(A,B):
    return A-B

n=int(input())
A=[int(i) for i in str(n)]
key = A[0]-A[1]
count=0
x=0
while key==han(A[x],A[x+1]):
    if(x==4):
        break;
    x=x+1
    count+=0
print(count)
            
