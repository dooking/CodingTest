n,m = map(int,input().split())
miro = [list(map(int,input())) for _ in range(n)]
check = [[0]*m for _ in range(n)]
dx=[-1,0,1,0]
dy=[0,-1,0,1]
visited=[(0,0)]
check[0][0]=1
while visited:
    x,y = visited.pop(0)
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        # 벽을 넘길경우
        if(nx<0 or nx>=n):            
            continue
        if(ny<0 or ny>=m):            
            continue
        # check 되어잇는 경우
        if(check[nx][ny]!=0):
            continue
        #다음 곳이 0인경우
        if(miro[nx][ny]==0):
            continue
        check[nx][ny]=check[x][y]+1
        visited.append([nx,ny])

print(check[n-1][m-1])
