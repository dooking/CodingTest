#https://www.acmicpc.net/problem/12100
from collections import deque 
from copy import deepcopy
import sys
#sys.stdout = open('output.txt','w')
input = sys.stdin.readline
n = int(input())
board =[]

for _ in range(n):
    board.append(list(map(int,input().split())))

def game(board,n,di):
    #상
    if(di==0):
        new_board = move_up(board)
    #하    
    elif(di==1):
        new_board = move_down(board)
    #좌
    elif(di==2):
        new_board = move_left(board)
    #우
    elif(di==3):
        new_board = move_right(board)

    # 위로 이동
    for j in range(n):
        added = -1
        changed = 1
        for i in range(1,n):
                # 자기자신은 0
                if(new_board[changed][j] == 0):
                    if(changed == n-1):
                        continue
                    new_board[changed][j] = new_board[changed+1][j]
                    replace_cnt = changed
                    for _ in range(n-1-replace_cnt):
                        new_board[replace_cnt][j] = new_board[replace_cnt+1][j]
                        replace_cnt += 1
                    new_board[n-1][j]=0

                # 자기자신은 0이아니지만 윗칸은 0이다 !
                elif(new_board[changed][j] != 0 and new_board[changed-1][j] == 0):
                    new_board[changed-1][j] = new_board[changed][j]
                    replace_cnt = changed
                    for _ in range(n-1-replace_cnt):
                        new_board[replace_cnt][j] = new_board[replace_cnt+1][j]
                        replace_cnt += 1
                    new_board[n-1][j]=0

                # 자기자신은 0이아니지만 윗칸은 나랑 같은 숫자이다 !
                elif(new_board[changed][j] != 0 and new_board[changed-1][j] == new_board[changed][j]):
                    if(added == changed-1):
                        changed += 1
                        continue
                    else:
                        new_board[changed-1][j] = 2 * new_board[changed][j]
                        added = changed - 1
                        replace_cnt = changed
                        for _ in range(n-1-replace_cnt): 
                            new_board[replace_cnt][j] = new_board[replace_cnt+1][j]
                            replace_cnt += 1
                        new_board[n-1][j]=0
                        
                # 자기자신은 0이아니지만 윗칸은 나랑 다른 숫자이다 !
                elif(new_board[changed][j] != 0 and new_board[changed-1][j] != new_board[changed][j]):
                    changed += 1


    if(di==0):
        new_board = deepcopy(move_up(new_board))
    #하    
    elif(di==1):
        new_board = deepcopy(move_down(new_board))
    #좌
    elif(di==2):
        new_board = deepcopy(move_right(new_board))
    #우
    elif(di==3):
        new_board = deepcopy(move_left(new_board))
    return new_board

def bfs(board):
    queue = deque([board])
    max_value = -1
    step = 0

    while queue:
        for _ in range(len(queue)):
            board = queue.popleft()

            for dir in range(4):
                next_board = game(deepcopy(board),n,dir)
                queue.append(next_board)
                for i in range(n):
                    for j in range(n):
                        if(next_board[i][j]>max_value):
                            max_value = next_board[i][j]
        step += 1
        if(step == 5):
            return max_value

def move_left(board):
    new_board = []
    for x in range(len(board)):
        temp_board=[]
        for y in range(len(board)):
            temp_board.append(board[len(board)-y-1][x])
        new_board.append(temp_board)
    return new_board

def move_right(board):
    new_board = []
    for x in range(len(board)):
        temp_board=[]
        for y in range(len(board)):
            temp_board.append(board[y][len(board)-x-1])
        new_board.append(temp_board)    
    return new_board

def move_down(board):
    new_board = []
    for x in range(len(board)):
        temp_board = []
        for y in range(len(board)):
            temp_board.append(board[len(board)-x-1][len(board)-y-1])
        new_board.append(temp_board)
    return new_board

def move_up(board):
    return board

print(bfs(board))