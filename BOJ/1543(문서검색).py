from copy import deepcopy
sentence = list(input())
word = list(input())
temp = deepcopy(sentence)
answer=0
i_temp = 0
cnt_temp = 0
for i in range(len(temp)):
    cnt = 0
    i = i_temp
    key = i_temp
    for j in range(len(word)):
        #print(temp,sentence,word,i,j,key,cnt)
        if(key >= len(temp)):
            break
        if(temp[key]==word[j]):
            cnt +=1
            key +=1
        else:
            key +=1
    
    if(cnt == len(word)):
        for k in range(len(word)):
            #print(sentence,cnt_temp)
            sentence.pop(0 + cnt_temp)
        answer +=1
        i_temp += len(word)
    else:
        i_temp += 1
        cnt_temp +=1
print(answer)