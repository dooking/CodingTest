#https://www.acmicpc.net/problem/2110

import sys
input = sys.stdin.readline
n,c = map(int,input().split())
x = list()
for _ in range(n):
    x.append(int(input()))
x = sorted(x)
start = x[1]-x[0]
end = x[-1]-x[0]
result = 0
while start<=end :
    mid = (start+end)//2
    value = x[0]
    cnt = 1
    for i in range(1,len(x)):
        if(mid <= x[i]-value):
            value = x[i]
            cnt +=1
    if(cnt>=c):
        start = mid+1
        result = mid
    else:
        end = mid -1
print(result)
        