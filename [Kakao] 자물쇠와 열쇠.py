import sys
sys.stdout = open('output.txt','w')
a = [list(map(int,input().split())) for _ in range(2)]
b = [list(map(int,input().split())) for _ in range(4)]


def solution(key, lock):
    n,m = len(key), len(lock)
    #key의 1인 값들 좌표
    key_value = [(i,j) for i in range(len(key)) for j in range(len(key)) if(key[i][j] == 1)]
    #lock의 1인 값들 좌표
    lock_value = [(i,j) for i in range(len(lock)) for j in range(len(lock)) if(lock[i][j] == 0)]
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    answer = False
 
    # 90도 180도 270도 회전
    key_one = [(j,n-1-i) for i,j in key_value]
    key_two = [(n-1-i,n-1-j) for i,j in key_value]
    key_three = [(n-1-j,i) for i,j in key_value]

    #4방향 다 queue, visited에 넣고 dfs 시작
    queue = []
    queue.append(key_value)
    queue.append(key_one)
    queue.append(key_two)
    queue.append(key_three)
    visited = []
    visited.append(key_value)
    visited.append(key_one)
    visited.append(key_two)
    visited.append(key_three)

    #dfs 시작
    while queue:
        # canKey는 queue의 값들. key의 좌표 리스트
        canKey = queue.pop()
        #만약 둘의 돌기와 홈 개수가 서로 같을때 정답인지 확인
        if(len(canKey) == len(lock_value)):
            cnt = 0
            #일치하는가 !? 일치하면 True
            for i,j in canKey:
                if(lock[i][j] == 0):
                    cnt += 1
                    if(cnt == len(canKey)):
                        return True
        #상 하 좌 우 한칸씩 이동
        for dir in range(4):
            newKey = []
            #key의 좌표 리스트 하나하나씩 꺼내서 움직여주기
            for x,y in canKey:
                nx,ny = x + dx[dir], y+dy[dir]
                if(nx<0): nx=0
                if(nx>=m): nx=m-1
                if(ny<0): ny=0
                if(ny>=m): ny=m-1
                #nx,ny가 조건을 만족한다면 newKey라는 새로운 리스트에 추가. newKey는 nx,ny 좌표 리스트.
                if(0<=nx<m and 0<=ny<m):
                    if((nx,ny) not in newKey):
                        newKey.append((nx,ny))
            #newKey의 길이가 자물쇠 길이보다 크거나 같고, visited에 해당사항 없어야 queue 추가
            if(len(newKey) >= len(lock_value) and newKey not in visited):
                queue.append(newKey)
                visited.append(newKey)
                
    return answer
result = solution(a,b)