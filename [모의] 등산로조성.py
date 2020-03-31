def climb(x,y,chance,check,visited):
    global height
    while queue:
        x,y = queue.pop()
        for dir in range(4):
            nx = x + dx[dir]
            ny = y + dy[dir]
            if(nx<0 or nx>=n):
                continue
            if(ny<0 or ny>=n):
                continue   
            if(mount[nx][ny] < mount[x][y]): 
                queue.append((nx,ny))
                height = climb(nx,ny,chance,check+1,(x,y))
                if(height < check + 1):
                    height = check + 1
            elif(chance == True and (nx,ny) != visited ):
                if(mount[nx][ny] - k < mount[x][y]):
                    chance = False
                    tmp = mount[nx][ny]
                    mount[nx][ny] = mount[x][y] - 1
                    queue.append((nx,ny))
                    height = climb(nx,ny,chance,check+1, (x,y))
                    if(height < check + 1):
                        height = check + 1
                    mount[nx][ny] = tmp
                    chance = True
    return height

def find(array):
    tmp = []
    for row in array:
        tmp.append(max(row))
    return max(tmp)

t = int(input())
for test_case in range(1,t+1):
    n, k = map(int,input().split())
    mount = [list(map(int,input().split())) for _ in range(n)]
    answer = 0
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    sub = []
    check = []
    max_height = find(mount)
    for i in range(n):
        for j in range(n):
            if(mount[i][j] == max_height):
                sub.append((i,j))
    
    for sub_xy in sub:
        x,y = sub_xy
        visited = [[-1 for _ in range(n)] for _ in range(n)]
        checked = [[False for _ in range(n)] for _ in range(n)]
        queue = []
        queue.append((x,y))
        height = 0
        sub_answer =climb(x,y,True,1,(x,y))
        if(sub_answer > answer):
            answer = sub_answer
    print("#{} {}".format(test_case,answer))