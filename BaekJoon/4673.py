def d(n):
    a=int(n/1000)
    b=int((n/100)%10)
    c=int((n%100)/10)
    d=int(n%10)
    return (1001*a)+(101*b)+(11*c)+(2*d)
a=[]
b=[i for i in range(10000)]
for x in range(0,10):
    for y in range(0,10):
        for z in range(0,10):
            for w in range(0,10):
                a.append(d(1000*x+100*y+10*z+w))
a.sort()
a1=list(set(a))
for i in range(1,9017):
    del b[a1[i]+1-i]
del b[0]
for i in b:
    print(i)