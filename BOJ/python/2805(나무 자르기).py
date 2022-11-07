# https://www.acmicpc.net/problem/2805

n,m = map(int, input().split())
trees = list(map(int, input().split()))
start, end = 1, max(trees) 

while start <= end: 
    mid = (start+end) // 2
    
    log = sum([tree - mid for tree in trees if tree>=mid])
    if log >= m:
        start = mid + 1
    else:
        end = mid - 1
print(end)