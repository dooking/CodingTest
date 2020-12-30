import sys
import copy
input = sys.stdin.readline
#sys.stdout = open('output.txt','w')
moveDx = [ [(-1,0)],[(1,0)],[(0,-1)],[(0,1)],[(-1,0),(1,0)],[(0,-1),(0,1)],[(-1,0),(0,1)],[(1,0),(0,1)],[(-1,0),(0,-1)],[(1,0),(0,-1)],[(0,-1),(-1,0),(0,1)],[(-1,0),(0,1),(1,0)],[(0,1),(1,0),(0,-1)],[(1,0),(0,-1),(-1,0)],[(-1,0),(1,0),(0,-1),(0,1)]]
def move(array,zx,zy,index):
    visited = [[False for _ in range(m)] for _ in range(n)]
    visited[zx][zy] = True
    for (dx,dy) in moveDx[index]:
        queue = [(zx,zy,index)]
        while queue:
            x,y,index = queue.pop()
            nx = x + dx
            ny = y + dy
            #print("x,y: ",x,y,"->nx,ny: ",nx,ny,"//",dx,dy,moveDx[index],index)
            if(0<=nx<n and 0<=ny<m and array[nx][ny]<6):
                array[nx][ny] = -1
                queue.append((nx,ny,index))

def find(array):
    cnt = 0
    for i in range(n):
        for j in range(m):
            if(array[i][j]==0):
                cnt +=1
    return cnt

n,m = map(int,input().split())
office = [list(map(int,input().split())) for _ in range(n)]
_case = []
minAnswer = 100000
for i in range(n):
    for j in range(m):
        if(office[i][j] == 1):
            tmp = [[0,1,2,3]]
            tmp.extend((1,i,j))           
            _case.append(tmp)
        elif(office[i][j] == 2):
            tmp = [[4,5]]
            tmp.extend((2,i,j))        
            _case.append(tmp)
        elif(office[i][j] == 3):
            tmp = [[6,7,8,9]]
            tmp.extend((3,i,j))
            _case.append(tmp)
        elif(office[i][j] == 4):
            tmp = [[10,11,12,13]]
            tmp.extend((4,i,j))
            _case.append(tmp)
        elif(office[i][j] == 5):
            tmp = [[14]]
            tmp.extend((5,i,j))
            _case.append(tmp)

check = False
if(len(_case)==0):
    _case = [[[0,1],[3]],[2]]
    check = True
for _a in _case[0][0]:
    if(check):
        minAnswer = find(office)
        break
    if(len(_case) == 1):
        office1 = copy.deepcopy(office)
        move(office1,_case[0][2],_case[0][3],_a)
        answer = find(office1)
        if(answer < minAnswer):
            minAnswer = answer
    else:
        for _b in _case[1][0]:
            if(len(_case) == 2):
                office2 = copy.deepcopy(office)
                move(office2,_case[0][2],_case[0][3],_a)
                move(office2,_case[1][2],_case[1][3],_b)
                answer = find(office2)
                if(answer < minAnswer):
                    minAnswer = answer
            else:
                for _c in _case[2][0]:
                    if(len(_case) == 3):
                        office3 = copy.deepcopy(office)
                        move(office3,_case[0][2],_case[0][3],_a)
                        move(office3,_case[1][2],_case[1][3],_b)
                        move(office3,_case[2][2],_case[2][3],_c)
                        answer = find(office3)
                        if(answer < minAnswer):
                            minAnswer = answer
                    else:
                        for _d in _case[3][0]:
                            if(len(_case) == 4):
                                office4 = copy.deepcopy(office)
                                move(office4,_case[0][2],_case[0][3],_a)
                                move(office4,_case[1][2],_case[1][3],_b)
                                move(office4,_case[2][2],_case[2][3],_c)
                                move(office4,_case[3][2],_case[3][3],_d)
                                answer = find(office4)
                                if(answer < minAnswer):
                                    minAnswer = answer 
                            else:
                                for _e in _case[4][0]:
                                    if(len(_case) == 5):
                                        office5 = copy.deepcopy(office)
                                        move(office5,_case[0][2],_case[0][3],_a)
                                        move(office5,_case[1][2],_case[1][3],_b)
                                        move(office5,_case[2][2],_case[2][3],_c)
                                        move(office5,_case[3][2],_case[3][3],_d)
                                        move(office5,_case[4][2],_case[4][3],_e)
                                        answer = find(office5)
                                        if(answer < minAnswer):
                                            minAnswer = answer
                                    else:
                                        for _f in _case[5][0]:
                                            if(len(_case) == 6):
                                                office6 = copy.deepcopy(office)
                                                move(office6,_case[0][2],_case[0][3],_a)
                                                move(office6,_case[1][2],_case[1][3],_b)
                                                move(office6,_case[2][2],_case[2][3],_c)
                                                move(office6,_case[3][2],_case[3][3],_d)
                                                move(office6,_case[4][2],_case[4][3],_e)
                                                move(office6,_case[5][2],_case[5][3],_f)
                                                answer = find(office6)
                                                if(answer < minAnswer):
                                                    minAnswer = answer
                                            else:
                                                for _g in _case[6][0]:
                                                    if(len(_case) == 7):
                                                        office7 = copy.deepcopy(office)
                                                        move(office7,_case[0][2],_case[0][3],_a)
                                                        move(office7,_case[1][2],_case[1][3],_b)
                                                        move(office7,_case[2][2],_case[2][3],_c)
                                                        move(office7,_case[3][2],_case[3][3],_d)
                                                        move(office7,_case[4][2],_case[4][3],_e)
                                                        move(office7,_case[5][2],_case[5][3],_f)
                                                        move(office7,_case[6][2],_case[6][3],_g)
                                                        answer = find(office7)
                                                        if(answer < minAnswer):
                                                            minAnswer = answer
                                                    else:
                                                        for _h in _case[7][0]:
                                                            if(len(_case) == 8):
                                                                office8 = copy.deepcopy(office)
                                                                move(office8,_case[0][2],_case[0][3],_a)
                                                                move(office8,_case[1][2],_case[1][3],_b)
                                                                move(office8,_case[2][2],_case[2][3],_c)
                                                                move(office8,_case[3][2],_case[3][3],_d)
                                                                move(office8,_case[4][2],_case[4][3],_e)
                                                                move(office8,_case[5][2],_case[5][3],_f)
                                                                move(office8,_case[6][2],_case[6][3],_g)
                                                                move(office8,_case[7][2],_case[7][3],_h)
                                                                answer = find(office8)
                                                                if(answer < minAnswer):
                                                                    minAnswer = answer
print(minAnswer)