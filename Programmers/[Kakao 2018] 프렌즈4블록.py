def solution(m, n, board):
    board = [list(b) for b in board]
    answer = 0
    while True:
        visited = []
        for row in range(m-1):
            for col in range(n-1):
                if(board[row][col] == board[row][col+1] == board[row+1][col] == board[row+1][col+1]):
                    if((row,col) not in visited):
                        visited.append((row,col))
                    if((row+1,col) not in visited):
                        visited.append((row+1,col))
                    if((row,col+1) not in visited):
                        visited.append((row,col+1))
                    if((row+1,col+1) not in visited):
                        visited.append((row+1,col+1))
        if(len(visited)==0):
            break
        answer += len(visited)
        for (x,y) in visited:
            if(x==0):
                board[x][y] = 0
            else:
                k=x
                while k!=0 :
                    board[k][y] = board[k-1][y]
                    k -= 1
    
    return answer

print(solution(6,6,["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))