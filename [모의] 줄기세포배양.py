#import sys
#sys.stdout = open('output.txt','w')

t = int(input())
for test_case in range(1,t+1):
    n,m,k = map(int,input().split())
    input_grid = [list(map(int,input().split())) for _ in range(n)]
    grid = [[[-2,-2,0] for _ in range(m+k)] for _ in range(n+k)]
    answer = 0 
    for i in range(n):
        for j in range(m):
            x = int(k//2 + i)
            y = int(k//2 + j)
            if(input_grid[i][j]== 0):
                input_grid[i][j] = -2
            grid[x][y][0] = input_grid[i][j]
            grid[x][y][1] = grid[x][y][0]
            grid[x][y][2] = 0
    
    t = 1
    activate = 0
    deactivate = 0
    di = [-1,1,0,0]
    dj = [0,0,-1,1]
    while t <= k:
        for i in range(n+k):
            for j in range(m+k):
                #print("i, j : ",i,j,"//",grid[i][j][0],grid[i][j][1],"//",activate,deactivate)
                if(grid[i][j][1] == 0):     
                    for dir in range(4):
                        #print("분해!! ",dir)
                        ni = i + di[dir]
                        nj = j + dj[dir]
                        if(ni < 0 or ni >= n+k):
                            continue
                        if(nj < 0 or nj >=m+k):
                            continue
                        if(grid[ni][nj][1] == -2):
                            #print("생성",grid[i][j][0],dir, grid[ni][nj][1], ni,nj)
                            grid[ni][nj][0] = grid[i][j][0]
                            grid[ni][nj][1] = grid[ni][nj][0]
                            grid[ni][nj][2] = t 
                            deactivate += 1
                        elif(grid[ni][nj][2] == t):
                            #print("경쟁 ",grid[ni][nj][2],grid[ni][nj][0],grid[i][j][0])
                            if(grid[ni][nj][0] < grid[i][j][0]):
                                grid[ni][nj][0] = grid[i][j][0]
                                grid[ni][nj][1] = grid[ni][nj][0]
                                grid[ni][nj][2] = t
                                deactivate += 1
                                
                    grid[i][j][1] -= 1
                if(grid[i][j][1] <= 0 and grid[i][j][0] != grid[i][j][1]):
                    #print("활성화 :",grid[i][j][0])
                    if(grid[i][j][0] > 1):
                        activate += 1
                        grid[i][j][0] -= 1
                if(grid[i][j][1] == 1 and grid[i][j][2] != t):
                    activate += 1
                    #print("1일때 :",activate)
                    grid[i][j][1] -= 1
                elif(grid[i][j][1] > 1 and grid[i][j][2] != t):
                    deactivate += 1
                    #print("1이넘을때 :",deactivate)
                    grid[i][j][1] -= 1

        t += 1
        answer = activate + deactivate
        #print("time :",t-1," // answer : ",activate, deactivate)
        activate = 0
        deactivate = 0


    print("#{} {}".format(test_case,answer))