# https://www.acmicpc.net/problem/1484
g = int(input())
end = 2
answer = []
for start in range(1,g+1):
    while(end<= g):
        sub_answer = end**2 - start**2
        if(sub_answer == g):
            answer.append(end)
            break
        elif(sub_answer < g):
            end += 1
        else:
            break
if(len(answer) == 0):
    print(-1)
else:
    for i in answer:
        print(i)

