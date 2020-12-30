t = int(input())
for test_case in range(1,t+1):
    n = int(input())
    miro = [list(map(int,input())) for _ in range(n)]
    start = [(i,j) for i in range(n) for j in range(n) if miro[i][j]==2]
    end = [(i,j) for i in range(n) for j in range(n) if miro[i][j]==3]
    
    visited = [[False]*(n) for _ in range(n)]
    stack = []
    stack.append(start[0])
    visited[start[0][0]][start[0][1]] = True
    answer_bool = False
    answer = 0
    while stack:
        (x, y) = stack.pop()
        dx = [-1,0,1,0]
        dy = [0,-1,0,1]
        for i in range(4):
            nx = x+ dx[i]
            ny = y+ dy[i]
            if(nx>=n or nx<0):
                continue
            if(ny>=n or ny<0):
                continue
            if(visited[nx][ny]):
                continue
            if(miro[nx][ny]==0):
                stack.append((nx,ny))
                visited[nx][ny] = True
            elif(miro[nx][ny]==1):
                continue
            elif(miro[nx][ny]==3):
                answer = 1
                answer_bool = True
                break
        if(answer_bool):
            break

    print("#{} {}".format(test_case,answer))