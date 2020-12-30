import sys
sys.stdout = open('output.txt','w')
t = int(input())
for test_case in range(1,t+1):
    M, a = map(int,input().split())
    walkA = list(map(int,input().split()))
    walkB = list(map(int,input().split()))
    walkA.insert(0,0)
    walkB.insert(0,0)
    AP = []
    grid = [[[] for _ in range(20)] for _ in range(20)]
    for BC_index in range(a):
        tmp = list(map(int,input().split()))
        AP.append(tmp)
        x,y = tmp[0],tmp[1]
        C = tmp[2]
        y = y-C
        for q in range(1,2*C+2):
        #    print("q일때 :",q,x,y)
            if(q<=C+1):
                for up in range(2*q-1):
                    if(y<=0 or y>=11):
                        x += 1
                        if(up == 2*q - 2):
                            if(q == C+1):
                                x -= 1
                                continue
                            y += 1
                            x = x - (2*q)
                        continue
        #            print("x,y :",x,y)
                    grid[y][x].extend([BC_index])
                    x += 1
                    if(up == 2*q - 2):
                        if(q == C+1):
                            x -= 1
                            continue
                        y += 1
                        x = x - (2*q)
            else:
                y += 1
                x = x - (4*C-2*q+3)
                for down in range(4*C-2*q+3):
        #            print("x,y :",x,y)
                    grid[y][x].extend([BC_index])
                    x += 1
                    if(down == 4*C-2*q+2):
                        x -= 1
    #print(grid)
    dx = [0,0,1,0,-1]
    dy = [0,-1,0,1,0]
    A = [1,1]
    B = [10,10]
    ax,ay = A
    bx,by = B
    answer = 0
    for time in range(M+1):
        charge = 0
        res_charge = 0
        ax = ax + dx[walkA[time]]
        ay = ay + dy[walkA[time]]
        bx = bx + dx[walkB[time]]
        by = by + dy[walkB[time]]
        
        if(len(grid[ay][ax]) >= 1 and len(grid[by][bx]) == 0):
        #    print("1/0일때 :", grid[ay][ax])
            for res in grid[ay][ax]:
                if(res_charge < AP[res][3]):
                    res_charge = AP[res][3]
            charge += res_charge
        elif(len(grid[ay][ax]) == 0 and len(grid[by][bx]) >= 1):
        #    print("0/1일때 :", grid[by][bx])
            for res in grid[by][bx]:
                if(res_charge < AP[res][3]):
                    res_charge = AP[res][3]
            charge += res_charge
        elif(len(grid[ay][ax]) == 1 and len(grid[by][bx]) == 1):
        #    print("1/1일때 :", grid[ay][ax],grid[by][bx])
            if(grid[ay][ax] == grid[by][bx]):
                charge += AP[grid[ay][ax][0]][3] 
            else:
                charge += AP[grid[ay][ax][0]][3] + AP[grid[by][bx][0]][3]
        elif(len(grid[ay][ax]) == 1 and len(grid[by][bx]) >= 2):
        #    print("1/2일때 :", grid[ay][ax],grid[by][bx])
            charge += AP[grid[ay][ax][0]][3]
            for res in grid[by][bx]:
                if(grid[ay][ax] == [res]):
                    continue
                if(res_charge < AP[res][3]):
                    res_charge = AP[res][3]
            charge += res_charge

        elif(len(grid[ay][ax]) >= 2 and len(grid[by][bx]) == 1):
        #    print("2/1일때 :", grid[ay][ax],grid[by][bx])
            charge += AP[grid[by][bx][0]][3]
            for res in grid[ay][ax]:
                if(grid[by][bx] == [res]):
                    continue
                if(res_charge < AP[res][3]):
                    res_charge = AP[res][3]
            charge += res_charge

        elif(len(grid[ay][ax]) >= 2 and len(grid[by][bx]) >= 2):
        #    print("2/2일때 :",grid[ay][ax],grid[by][bx])
            for res1 in grid[ay][ax]:
                for res2 in grid[by][bx]:
                    if(res1==res2):
                        continue
                    else:
                        if(res_charge < AP[res1][3] + AP[res2][3]):
                            res_charge = AP[res1][3] + AP[res2][3]
            charge += res_charge
        answer += charge
        #print("안걸리는 이유 :",grid[ay][ax],ax,ay,grid[by][bx],bx,by)
        #print("time : ",time, "// charge :",charge, "// answer :",answer)

    print("#{} {}".format(test_case,answer))