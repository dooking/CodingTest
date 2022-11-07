# https://www.acmicpc.net/problem/2003

n, m = map(int,input().split())
data = list(map(int,input().split()))

result = 0
summary = 0
end = 0

# start를 차례대로 증가시키며 반복
for start in range(n):
	# end를 가능한 만큼 이동시키기
	while summary < m and end < n:
		summary += data[end]
		end +=1 
	# 부분 합이 m일 때 카운트 증가
	if summary == m:
		result += 1
	sumamry -= data[start]

print(result)

