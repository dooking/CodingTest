n = int(input())
answer=[]
for a in range(1001):
    for b in range(1667):
        if(5*a+3*b == n):
            answer.append(a+b)
if(answer==[]):
    print(-1)
else:
    print(min(answer))