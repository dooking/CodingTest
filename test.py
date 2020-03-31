from sys import stdin
from _collections import deque

_input = stdin.readline
n, m = map(int, _input().split())
paper = [list(map(int, _input().split())) for _ in range(n)]

ans = -10000000
queue = deque([])
check = []
dir = [(1, -1, 0, 0), (0, 0, 1, -1)]


def dfs(i, j, val, arr, num):
    ans = -100
    if num == 4:
        return val
    if num == 2:
        special = []
    for d in range(4):
        ni = i + dir[0][d]
        nj = j + dir[1][d]
        if -1 < ni < n and -1 < nj < m and not ((ni, nj) in arr):
            if num == 2:
                special.append(paper[ni][nj])
            tmp_list = arr + [(ni, nj)]
            if num == 2 and len(special) > 1:
                special.sort()
                ans = max(ans, val + special[-1] + special[-2])
            ans = max(ans, dfs(ni, nj, val + paper[ni][nj], tmp_list, num + 1))
            check.append(tmp_list)
    return ans

for i in range(n):
    for j in range(m):
        res = dfs(i, j, paper[i][j], [(i, j)], 1)
        if ans < res:
            ans = res

print(ans)