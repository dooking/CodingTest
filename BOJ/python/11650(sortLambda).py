N = int(input())
answer = []
for i in range(N):
    answer.append(list(map(int,input().split())))
answer.sort(key=lambda x:(x[0],x[1]))
for [i,j] in answer:
    print(i,j)