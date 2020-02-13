t = int(input())
for test_case in range(1,t+1):
    n = int(input())
    miro = [list(map(int,input())) for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if(miro[i][j]==2):
                start_x,start_y = i, j
            if(miro[i][j]==3):
                end_x,end_y = i, j
    queue = []
    visited =[[0]*(n) for _ in range(n)]
    queue.append((start_x,start_y))
    while queue:
        (x,y) = queue.pop(0)
        dx = [-1,0,1,0]
        dy = [0,-1,0,1]
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if(nx>=n or nx<0):
                continue
            if(ny>=n or ny<0):
                continue
            if(miro[nx][ny]==3):
                visited[nx][ny] = visited[x][y] + 1
            if(visited[nx][ny] == 0 and miro[nx][ny] == 0):
                queue.append((nx,ny))
                visited[nx][ny] = visited[x][y] + 1
    answer = visited[end_x][end_y] - 1
    if(answer == -1):
        answer = 0
    print("#{} {}".format(test_case,answer))

