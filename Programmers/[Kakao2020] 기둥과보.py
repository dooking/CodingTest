import sys
sys.stdout = open('output.txt','w')

def solution(n, build_frame):
    answer = []
    board = [[[-1 for _ in range(4)] for _ in range(n+1)] for _ in range(n+1)]
    for x,y,a,b in build_frame:
        zx,zy = n-y,x
        up, down = False,False
        print("x,y,a,b: ", x,y,a,b,answer)
        #삭제
        if(b==0):
            #기둥
            if(a==0):
                if(zx-1>=0):
                    if(board[zx][zy][1] == 0 or y==0):
                        down = True
                    elif(board[zx][zy][2] == 1 and board[zx][zy][3] == 1):
                        down = True
                    elif(zy-1>=0 and board[zx][zy][2] == 1 and board[zx][zy-1] != [-1,-1,1,-1]):
                        down = True
                    elif(zy+1<=n and board[zx][zy][3] == 1 and board[zx][zy+1] != [-1,-1,-1,1]):
                        down = True
                    
                    if(board[zx-1][zy][2] == 1 and board[zx-1][zy][3] == 1):
                        up = True
                    elif(zy-1>=0 and board[zx-1][zy][2] == 1 and board[zx-1][zy-1] != [-1,-1,1,-1]):
                        up = True
                    elif(zy+1<=n and board[zx-1][zy][3] == 1 and board[zx-1][zy+1] != [-1,-1,-1,1]):
                        up = True
                    if(up and down):
                        board[zx][zy][0] = -1
                        board[zx-1][zy][1] = -1
                        answer.remove([x,y,a])
                        print("삭제완료",[x,y,a])
            elif(a==1):
                if(zy+1<=n):
                    if(board[zx][zy][1] == 0):
                        up = True
                    elif(zy-1>=0 and board[zx][zy-1][3] == 1 and board[zx][zy-1][1] == 0):
                        up = True
                    
                    if(board[zx][zy+1][1] == 0):
                        down = True
                    elif(zy+2<=n and board[zx][zy+2][2] == 1 and board[zx][zy+2][1] == 0):
                        down = True
                    if(up and down):
                        board[zx][zy][3] = -1
                        board[zx][zy+1][2] = -1
                        answer.remove([x,y,a])
                        print("삭제완료",[x,y,a])
        #설치
        elif(b==1):
            #기둥
            if(a==0):
                print("기둥설치")
                if(y==0 or board[zx][zy][2]==1 or board[zx][zy][3]==1 or board[zx][zy][1]==0):
                    board[zx][zy][0] = 0
                    if(zx-1>=0):
                        board[zx-1][zy][1] = 0
                    answer.append([x,y,a])
                    print("설치완료",[x,y,a])
            #보
            elif(a==1):
                if(zy+1 <= n):
                    if(board[zx][zy][1] == 0 or board[zx][zy+1][1] == 0):
                        board[zx][zy][3] = 1
                        board[zx][zy+1][2] = 1
                        answer.append([x,y,a])
                    if(board[zx][zy][2] == 1 and board[zx][zy+1][3] == 1):
                        board[zx][zy][3] = 1
                        board[zx][zy+1][2] = 1
                        answer.append([x,y,a])
                        print("설치완료",[x,y,a])
                        
    answer.sort(key=lambda x: (x[0],x[1],x[2]))
    return answer

                    
                    
a = solution(5,	[[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1],[0,0,0,0]])
print(a)