n = int(input())
answer = []
for _ in range(n):
    (age,name) = map(str,input().split())
    answer.append((int(age),name))

for (i,j) in sorted(answer, key=lambda x:x[0]):
    print(i,j,end='\n')