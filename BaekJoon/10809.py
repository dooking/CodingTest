S=list(input())
alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
answer=[-1]*26
count=0
for i in S:
    count+=1
    for j in range(len(alpha)):
        if(i==alpha[j]):
            if(answer[j]==-1):
                answer[j]+=count
for i in answer:
    print(i)            