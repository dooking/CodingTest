import sys
#sys.stdout = open('output.txt','w')
input = sys.stdin.readline
n, m = map(int,input().split())
paper = [list(map(int,input().split())) for _ in range(n)]

def tetromino(x,y,visited,cnt,value):
    global sub_res
    check = visited[:]
    tmp = value[:]
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    if(cnt == 4):
        if(sum(tmp) > sub_res):
            sub_res = sum(tmp)
        return sub_res
    else:
        for dir in range(4):
            nx = x + dx[dir]
            ny = y + dy[dir]
            if(cnt==1):
                if((nx,ny) not in visited):
                    if(dir==1): 
                        if(0<=nx+1<n and 0<=ny-1<m):
                            value_tmp = value[:]
                            value_tmp.extend([paper[nx][ny],paper[nx][ny-1],paper[nx+1][ny]])
                            sub_res = tetromino(nx,ny,visited,4,value_tmp)
                        if(0<=nx+1<n and 0<=ny+1<m):
                            value_tmp = value[:]
                            value_tmp.extend([paper[nx][ny],paper[nx][ny+1],paper[nx+1][ny]])
                            sub_res = tetromino(nx,ny,visited,4,value_tmp)        
                    if(dir==3): 
                        if(0<=nx-1<n and 0<=ny+1<m):
                            value_tmp = value[:]
                            value_tmp.extend([paper[nx][ny],paper[nx][ny+1],paper[nx-1][ny]])
                            sub_res = tetromino(nx,ny,visited,4,value_tmp)
                        if(0<=nx+1<n and 0<=ny+1<m):
                            value_tmp = value[:]
                            value_tmp.extend([paper[nx][ny],paper[nx][ny+1],paper[nx+1][ny]])
                            sub_res = tetromino(nx,ny,visited,4,value_tmp)
            if(nx>=0 and nx+1 <n and ny>=0 and ny+1 <m and (nx,ny) not in visited and cnt==1):
                if(dir==1):
                    value_tmp = value[:]
                    value_tmp.extend([paper[nx][ny],paper[nx][ny+1],paper[nx+1][ny]])
                    sub_res = tetromino(nx,ny,visited,4,value_tmp)
            if( 0<= nx <n and 0<= ny <m and (nx,ny) not in visited):
                check.append((nx,ny))
                tmp.append(paper[nx][ny])
                sub_res = tetromino(nx,ny,check,cnt+1,tmp)
                check.pop()
                tmp.pop()
    return sub_res
sub_res = - 1
answer = 0
for i in range(n):
    for j in range(m):
        sub_answer = tetromino(i,j,[(i,j)],1,[paper[i][j]])
        if(sub_answer > answer):
            answer = sub_answer
print(answer)