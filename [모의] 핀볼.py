t = int(input())
for test_case in range(1,t+1):
    n = int(input())
    graph = [list(map(int,input().split())) for _ in range(n)]
    startList = []
    block = [[] for _ in range(6)]
    blackHall=[]
    warmHall=[[]for _ in range(6)]
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    max_answer= -10000
    for i in range(n):
        for j in range(n):
            if(graph[i][j]==0):
                startList.append([i,j])
            elif(graph[i][j] == -1):
                blackHall.append([i,j])
            elif(graph[i][j] <= 5):
                block[graph[i][j]].append([i,j])
            elif(graph[i][j] > 5):
                warmHall[graph[i][j]-6].append((i,j))

    for x,y in startList:
        #print("첫번째 포문 >",x,y)
        for dir in range(4):
            #print("두번째 포문 > ",dir )
            nx = x + dx[dir]
            ny = y + dy[dir]
            answer = 0
            while True:
                #print("시작위치 :",x,y,"->",nx,ny,"// 방향 :",dir)
                if(nx<0 or nx>=n):
                    answer += 1
                    if(dir == 0):
                        nx = 0
                        dir = 1 
                    elif(dir == 1):
                        nx = n-1
                        dir = 0
                if(ny<0 or ny>=n):
                    answer += 1
                    if(dir==3):
                        ny = n-1
                        dir = 2
                    elif(dir==2):
                        ny = 0
                        dir = 3
                if(graph[nx][ny] == -1 or (nx==x and ny==y)):
                    break
                elif(graph[nx][ny] == 1):
                    answer += 1
                    if(dir == 0):
                        dir = 1
                    elif(dir == 1):
                        dir = 3
                    elif(dir == 2):
                        dir = 0
                    elif(dir ==3):
                        dir = 2
                elif(graph[nx][ny] == 2):
                    answer +=1
                    if(dir == 0):
                        dir = 3
                    elif(dir == 1):
                        dir = 0
                    elif(dir == 2):
                        dir = 1
                    elif(dir ==3):
                        dir = 2
                elif(graph[nx][ny] == 3):
                    answer +=1 
                    if(dir == 0):
                        dir = 2
                    elif(dir == 1):
                        dir = 0
                    elif(dir == 2):
                        dir = 3
                    elif(dir == 3):
                        dir = 1
                elif(graph[nx][ny] == 4):
                    answer += 1
                    if(dir==0):
                        dir = 1
                    elif(dir == 1):
                        dir = 2
                    elif(dir == 2):
                        dir = 3
                    elif(dir == 3):
                        dir = 0
                elif(graph[nx][ny] == 5):
                    answer += 1
                    if(dir==0):
                        dir = 1
                    elif(dir==1):
                        dir = 0
                    elif(dir==2):
                        dir = 3
                    elif(dir==3):
                        dir = 2
                elif(graph[nx][ny] >= 6):
                    for qx,qy in warmHall[graph[nx][ny]-6]:
                        if((nx,ny) != (qx,qy)):
                            #print("요기이이이",nx,ny,qx,qy,warmHall[graph[nx][ny]-6])
                            nx,ny = qx,qy
                            break
                nx = nx + dx[dir]
                ny = ny + dy[dir]
                #print("점수 :",answer , max_answer)
            if(answer >= max_answer):
                max_answer = answer

    print("#{} {}".format(test_case,max_answer))