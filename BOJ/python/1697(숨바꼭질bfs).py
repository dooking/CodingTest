import sys
from collections import deque
input = sys.stdin.readline
n,k = map(int,input().split())
time = [0]*(200002)
queue = deque()
queue.append(n)
while queue:
    x = queue.popleft()
    if x==k:
        print(time[x])
        break
    if 0<=x-1<=100000 and time[x-1]==0:
        time[x-1]=time[x]+1
        queue.append(x-1)
    if 0<=x+1<=100000 and time[x+1]==0:
        time[x+1]=time[x]+1
        queue.append(x+1)
    if 0<=x*2<=100000 and time[x*2]==0:
        time[x*2]=time[x]+1
        queue.append(x*2)