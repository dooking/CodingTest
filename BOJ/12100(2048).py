#https://www.acmicpc.net/problem/12100
from collections import deque 
from copy import deepcopy
import sys
input = sys.stdin.readline
n = int(input())
board =[]

for _ in range(n):
    board.append(list(map(int,input().split())))

def game(board,n,di):
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
    for i in range(1,n):
        for j in range(1):
            print("1 >> i,j: ",i,j)
            print("2 >> board: ",board)
            # 자기자신이 0일 때
            if(new_board[i][j] == 0 ):
                key_temp = i
                for _ in range(n-1-i):
                    new_board[key_temp][j] = new_board[key_temp+1][j]
                    key_temp += 1
                new_board[n-1][j]=0
                break
            # 자기자신이 0이 아닐 때
            elif(new_board[i][j] != 0):   
                # 윗 칸이 0일 때 -> 0이 아닐때까지 올라가기
                if(new_board[i-1][j] == 0):
                    
                # 윗 칸이랑 같을 때 -> x2
                elif(new_board[i-1][j] == new_board[i][j]):
                    if(new_board[key-1][j] !=0 and new_board[key-1][j] == new_board[key][j]):
                    print("2배되는 곳 > i,j,key :",i,j,key)
                    new_board[key-1][j] = 2*new_board[key][j]
                    #채워주기
                    key_temp = key
                    for _ in range(n-1-key):
                        new_board[key_temp][j] = new_board[key_temp+1][j]
                        key_temp += 1
                    new_board[n-1][j]=0
                    break
                # 윗 칸이랑 다를 때 -> break
                elif(new_board[i-1][j] != new_board[i][j]):
                    continue
                
                
                
                
                
                
                
                
                
                # 자기자신이 0이면 종료
                if(new_board[key][j] == 0 ):
                    key_temp = key
                    for _ in range(n-1-key):
                        new_board[key_temp][j] = new_board[key_temp+1][j]
                        key_temp += 1
                    new_board[n-1][j]=0
                    break    
                # 자기자신은 0이아니지만 윗칸이 0인경우
                if(new_board[key][j] !=0 and new_board[key-1][j] == 0):
                    print("0이 되는 곳 > i,j,key :",i,j,key)
                    new_board[key-1][j] = new_board[key][j]
                    key_temp = key
                    for _ in range(n-1-key):
                        new_board[key_temp][j] = new_board[key_temp+1][j]
                        key_temp += 1
                    new_board[n-1][j]=0
                # 윗칸이 나랑 다른 숫자일 경우
                if(new_board[key-1][j] !=0 and new_board[key-1][j] != new_board[key][j]):
                    break

                # 윗칸이 나랑 같은 숫자일 경우
                if(new_board[key-1][j] !=0 and new_board[key-1][j] == new_board[key][j]):
                    print("2배되는 곳 > i,j,key :",i,j,key)
                    new_board[key-1][j] = 2*new_board[key][j]
                    #채워주기
                    key_temp = key
                    for _ in range(n-1-key):
                        new_board[key_temp][j] = new_board[key_temp+1][j]
                        key_temp += 1
                    new_board[n-1][j]=0
                    break
                key -= 1
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
                next_board = game(deepcopy(board),n,0)
                queue.append(next_board)
                #print(step,dir,": 스텝,방향  // board -> next_board")
                #print(board)
                #print(next_board)
                for i in range(n):
                    for j in range(n):
                        if(next_board[i][j]>max_value):
                            max_value = next_board[i][j]
        step += 1
        if(step == 1):
            return max_value

def move_left(board):
    new_board = []
    for x in range(len(board)):
        temp_board=[]
        for y in range(len(board)):
            temp_board.append(board[len(board)-y-1][x])
        new_board.append(temp_board)
    #print("좌 board : ",new_board)
    return new_board

def move_right(board):
    new_board = []
    for x in range(len(board)):
        temp_board=[]
        for y in range(len(board)):
            temp_board.append(board[y][len(board)-x-1])
        new_board.append(temp_board)    
    #print("우 board : ",new_board)
    return new_board

def move_down(board):
    new_board = []
    for x in range(len(board)):
        temp_board = []
        for y in range(len(board)):
            temp_board.append(board[len(board)-x-1][len(board)-y-1])
        new_board.append(temp_board)
    #print("하 board : ",new_board)
    return new_board

def move_up(board):
    return board

print(bfs(board))