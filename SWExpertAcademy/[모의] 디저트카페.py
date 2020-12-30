import sys
sys.stdout = open('output.txt','w')

def desert(x,y,visited,check,dir):
    tmp1,tmp2 = True,True
    if(dir>3):
        print("요기?")
        sub_answer.append(visited)
        return sub_answer
    nx,ny = x+dx[dir],y+dy[dir]
    print("x,y,dir: ",x,y,dir,"->nx,ny,dir: ",nx,ny,dir)
    if(nx<0 or nx>=n):
        return False
    if(ny<0 or ny>=n):
        return False
    if(cafe[nx][ny] not in visited):
        visited.append(cafe[nx][ny])
        print("첫 번째 재귀 <전> : ",nx,ny,visited,check,dir)
        tmp1 = desert(nx,ny,visited,check,dir)
        print("중간 : ",nx,ny,visited,check,dir)
        tmp2 = desert(nx,ny,visited,check,dir+1)
        if(tmp1 == False and tmp2 == False):
            if(cafe[nx][ny] in visited):
                visited.remove(cafe[nx][ny])
        print("두 번째 재귀 <후> : ",nx,ny,visited,check,dir+1)
    else:
        return False

t = int(input())
for test_case in range(1,t+1):
    n = int(input())
    cafe = [list(map(int,input().split())) for _ in range(n)]
    dx = [1,1,-1,-1]
    dy = [1,-1,-1,1]
    sub_cafe = []
    answer = 0
    for i in range(n-2):
        for j in range(1,n-1):
            sub_cafe.append((i,j))
    
    for sub_xy in sub_cafe:
        x,y = sub_xy
        queue = []
        queue.append((x,y,0))
        visited = []
        visited.append(cafe[x][y])
        check = [[0 for _ in range(n)] for _ in range(n)]
        check[x][y] = 1
        sub_answer = []
        desert(x,y,visited,check,0)
        print("---------------------------------------",sub_xy,sub_answer)

                
            

    print("#{} {}".format(test_case,answer))