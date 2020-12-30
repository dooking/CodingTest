#https://www.acmicpc.net/problem/13460
import sys
from collections import deque 
n,m = map(int,input().split())
global graph
graph = list()
for _ in range(n):
    graph.append(list(input()))
for i in range(n):
    for j in range(m):
        if(graph[i][j] == "R"):
            red_x,red_y=i,j
        elif(graph[i][j] == "B"):
            blue_x,blue_y=i,j
        elif(graph[i][j] == "O"):
            goal=i,j

def bfs(red_x,red_y,blue_x,blue_y,goal):
    queue = deque()
    visited = [[[[False]*m for _ in range(n)] for _ in range(m)] for _ in range(n)]
    count = 0
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    queue.append((red_x,red_y,blue_x,blue_y,0))
    visited[red_x][red_y][blue_x][blue_y] = True
    while queue:
        red_x,red_y,blue_x,blue_y,count=queue.popleft()
        if(count>=10):
            break
        for i in range(4):
            red_nx, red_ny,rc = move(red_x,red_y,dx[i],dy[i],0)
            blue_nx,blue_ny,bc = move(blue_x,blue_y,dx[i],dy[i],0)
            if((blue_nx,blue_ny) == goal):
                continue
            if((red_nx,red_ny) == goal):
                #print("요기서 끝나나? ",(red_nx,red_ny))
                return count+1
            if(red_nx == blue_nx and red_ny == blue_ny):
                if(rc>bc):
                    red_nx,red_ny = red_nx-dx[i], red_ny-dy[i]
                else:
                    blue_nx,blue_ny = blue_nx-dx[i], blue_ny-dy[i]
            #print("di: ",i,"RED : ",red_nx,red_ny,"// BLUE : ",blue_nx,blue_ny)
            if not visited[red_nx][red_ny][blue_nx][blue_ny]:
                queue.append((red_nx,red_ny,blue_nx,blue_ny,count+1))
                visited[red_nx][red_ny][blue_nx][blue_ny] = True
                #print("visited 추가 : ","RED : ",red_nx,red_ny,"// BLUE : ",blue_nx,blue_ny)
    count = -1
    return count

def move(x,y,dx,dy,c):
    while graph[x+dx][y+dy] != "#" and graph[x][y] != 'O':
        x += dx
        y += dy
        c += 1
    return x,y,c

print(bfs(red_x,red_y,blue_x,blue_y,goal))