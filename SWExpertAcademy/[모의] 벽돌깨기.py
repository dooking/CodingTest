import sys
sys.stdout = open('output.txt','w')
import copy

#블록 부수는 함수
def attack(array,x,y):
    dir = 0
    power = array[x][y]
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    while dir <=3:
        nx,ny = x,y
        array[x][y] = 0
        #블록크기 -1만큼 상하좌우 움직이면서 0만들기
        for _ in range(power-1):
            nx = nx + dx[dir]
            ny = ny + dy[dir]
            if(nx <0 or nx >=h):
                continue
            if(ny< 0 or ny >=w):
                continue
            #0이아니라면 재귀 (동시에 부수기)
            if(array[nx][ny] != 0):
                attack(array,nx,ny)
        dir +=1 
    return array

#구슬위치 찾기! (행렬 전치)
def select(array,sel):
    for i in range(w):
        for j in range(h):
            if(array[j][i] != 0):
                sel.append((j,i))
                break
    return sel

#블록 밑으로 내려주기
def sort_array(array):
    print(array)
    for i in range(w):
        for j in range(h-1):
            if(array[j][i] != 0 and array[j+1][i] == 0):
                tmp = 0
                j_tmp = j
                while tmp < j+1:
                    array[j_tmp][i],array[j_tmp+1][i] = array[j_tmp+1][i],array[j_tmp][i]
                    j_tmp -= 1
                    tmp += 1
    return array

def find_answer(array):
    answer = 0
    for i in range(h):
        for j in range(w):
            if(array[i][j] != 0):
                answer += 1
    return answer

t = int(input())
for test_case in range(1,t+1):
    n, w, h = map(int,input().split())
    grid = [list(map(int,input().split())) for _ in range(h)]
    grid1,grid2,grid3,grid4 = [],[],[],[]
    new_grid1,new_grid2,new_grid3,new_grid4=[],[],[],[]
    select1,select2,select3,select4 = [],[],[],[]
    answer = 0
    min_answer = 1000000
    
    #첫번째 구슬위치 후보 찾기
    select1 = select(grid,[])
    for x,y in select1:
        grid1 = copy.deepcopy(grid)
        # 어택! 뿌시기!
        new_grid1 = attack(grid1,x,y)
        # 정렬하기!
        sort_array(new_grid1)
        #두번째 구슬위치 후보 찾기
        select2 = select(new_grid1,[])
        if(n<2):
            #만약 n이 1이라면 정답을 찾고(블록 갯수를 세고) continue!
            answer = find_answer(new_grid1)
            if(answer < min_answer):
                min_answer = answer
            continue
        for x1,y1 in select2:
            grid2 = copy.deepcopy(grid1)
            new_grid2 = attack(grid2,x1,y1)
            sort_array(new_grid2)
            select3 = select(new_grid2,[])
            if(n<3):
                answer = find_answer(new_grid2)
                if(answer < min_answer):
                    min_answer = answer
                continue
            for x2,y2 in select3:
                grid3 = copy.deepcopy(grid2)
                new_grid3 = attack(grid3,x2,y2)
                sort_array(new_grid3)
                select4 = select(new_grid3,[])
                if(n<4):
                    answer = find_answer(new_grid3)
                    if(answer < min_answer):
                        min_answer = answer
                    continue
                for x3,y3 in select4:
                    grid4 = copy.deepcopy(grid3)
                    new_grid4 = attack(grid4,x3,y3)
                    answer = find_answer(new_grid4)
                    if(answer < min_answer):
                        min_answer = answer

    if(min_answer == 1000000):
        min_answer = 0
    print("#{} {}".format(test_case,min_answer))