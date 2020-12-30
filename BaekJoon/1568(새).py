#https://www.acmicpc.net/problem/1568
import sys
input = sys.stdin.readline
n = int(input())
cnt = 0
k=0

def sum_n(n):
    return n*(n+1)//2

while n>0:
    if(sum_n(k+1)<=n):
        k += 1
    else:
        cnt += k
        n = n-sum_n(k)
        k=0
print(cnt)
