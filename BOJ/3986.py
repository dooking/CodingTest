n=int(input())
b=[]
count=0
for i in range(n):
    a=list(input())
    b=[]
    b.append(a[0])
    for j in range(1,len(a)):
        if(len(b)==0):
            b.append(a[j])    
        else:
            if(b[-1]==a[j]):
                del b[-1]
            else:
                b.append(a[j])
    if(len(b)==0):
        count+=1
print(count)