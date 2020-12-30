N = int(input())
count=0
for i in range(N):
    boo=True
    answer=[]
    word = list(input())
    answer.append(word[0])
    for j in range(len(word)-1):
        if(word[j]==word[j+1]):
            answer.append(word[j+1])
        else:
            for k in answer:
                if(k==word[j+1]):
                    boo=False
                    break;
            answer.append(word[j+1])
    if(boo==True):
        count+=1
print(count)