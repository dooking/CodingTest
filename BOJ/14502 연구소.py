import sys
from itertools import combinations
input = sys.stdin.readline
n,m = map(int,input().split())
grid = [list(map(int,input().split())) for _ in range(n)]
virus = [(i,j) for i in range(n) for j in range(m) if(grid[i][j] == 2)]
wall = [(i,j) for i in range(n) for j in range(m) if(grid[i][j] == 1)]
block = [(i,j) for i in range(n) for j in range(m) if(grid[i][j] == 0)]
canBlock = list(combinations(block,3))
minCountVirus = 100000
#canBlock은 맵에서 벽 3개가 될 수 있는 후보들
for bb in canBlock:
    countVirus = len(virus)
    queue = []
    visited = [[0 for _ in range(m)] for _ in range(n)]
    #벽 후보 3개들은 1로 바꿔줌으로써 실제 벽처럼 보임
    for bx,by in bb:
        grid[bx][by] = 1
    #각각의 바이러스 가지구 BFS 시작!
    for vx,vy in virus:
        queue.append((vx,vy))
        visited[vx][vy] = 1
        dx,dy = [-1,1,0,0], [0,0,-1,1]
        while queue:
            x,y = queue.pop(0)
            for dir in range(4):
                nx,ny = x+dx[dir],y+dy[dir]
                if(0<=nx<n and 0<=ny<m and visited[nx][ny] == 0 and grid[nx][ny] == 0):
                    queue.append((nx,ny))
                    visited[nx][ny] = visited[x][y] + 1
                    countVirus += 1
    
    #벽 후보 3개들은 1로 바꿔줌으로써 실제 벽처럼 보임했으니 다시 원상복구
    for bx,by in bb:
        grid[bx][by] = 0
    if(countVirus < minCountVirus):
        minCountVirus = countVirus
#정답은 m*n = 원소 총 갯수 , mincountvirus = 바이러스 갯수, len(wall)- 3 = 맵에서 벽 갯수
print(m*n - minCountVirus - len(wall) - 3)