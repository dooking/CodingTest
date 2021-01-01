# https://www.acmicpc.net/problem/1806

n, m = map(int,input().split())
data = list(map(int,input().split()))

result = 0
summary = 0
end = 0
answer = 999999

# start를 차례대로 증가시키며 반복
for start in range(n):
    while end < n and summary < m:
        summary += data[end]
        end += 1
    if(summary >= m):
        result = end-start
        answer = min(answer, result)
    summary -= data[start] 

if(answer == 999999):
    answer = 0
print(answer)

