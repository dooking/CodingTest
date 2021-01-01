import sys
input = sys.stdin.readline
sys.stdout = open('output.txt','w')
n,m = map(int,input().split())
r,c,d = map(int,input().split())
room = [list(map(int,input().split())) for _ in range(n)]
dx,dy = [-1,0,1,0], [0,1,0,-1]
queue = [(r,c,d)]
room[r][c] = 2
count = 1
check = False
while queue:
    x,y,dir = queue.pop()
    for _ in range(4):
        if(dir == 0):
            dir = 3
        else:
            dir -= 1
        nx,ny = x + dx[dir],y + dy[dir]
        if(1<=nx<n-1 and 1<=ny<m-1 and room[nx][ny] == 0):
            queue.append((nx,ny,dir))
            room[nx][ny] = 2
            count+=1
            check = True
            break
    if(check):
        check = False
        continue
    if(1<=x-dx[dir]<n-1 and 1<=y-dy[dir]<m-1 and room[x-dx[dir]][y-dy[dir]]!=1):
        queue.append((x-dx[dir],y-dy[dir],dir))
print(count)        
