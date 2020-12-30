t = int(input())
for test_case in range(1,t+1):
    n,x = map(int,input().split())
    #Input!
    map_row = [list(map(int,input().split())) for _ in range(n)]
    #Input 전치!
    map_col = list(map(list,zip(*map_row)))
    answer = 0

    #가로가로
    for row in map_row:
        temp = 1
        count = []
        dec = True
        #각 행에 대해 값과 그 값이 얼마나 연속되었는지를 count에 저장
        #EX) [3,3,1,2,2] -> count : [[3,1],[1,1],[2,2]] 3이 한번, 2가 두번, 1이 두번 그려지는군! 
        for i in range(len(row)):
            if(i==len(row)-1):
                count.append([row[i],temp])
                continue
            if(row[i]==row[i+1]):
                temp += 1
            elif(row[i]!=row[i+1]):
                count.append([row[i],temp])
                temp = 1
        #count를 보고 활주로가 가능한지 판단
        for j in range(len(count)-1):
            #count : [[3,1],[1,1],[2,2]] 기준으로
            #3이 2보다 크므로 내리막길이군 !
            if(count[j][0] > count[j+1][0]):
                #경사로의 가로크기가 x보다 작거나 or 경사로의 세로크기가 1이 아니면 dec이 False!!
                if(count[j+1][1] < x or count[j][0] - count[j+1][0] != 1):
                    dec = False
                    break
                #경사로를 만족했을 경우 경사로의 가로크기를 x만큼 빼줌!
                else:
                    count[j+1][1] -= x
            #요기는 오르막길이군! 아래 로직은 위와 같음
            elif(count[j][0] < count[j+1][0]):
                if(count[j][1] < x or count[j+1][0] - count[j][0] != 1):
                    dec = False
                    break
                else:
                    count[j][1] -= x
        if(dec):
            #print("row: ",row," <> count: ",count," // answer: ",answer) 
            answer += 1
    
    #세로세로
    for col in map_col:
        temp = 1
        count = []
        dec = True
        for i in range(len(col)):
            if(i==len(col)-1):
                count.append([col[i],temp])
                continue
            if(col[i]==col[i+1]):
                temp += 1
            elif(col[i]!=col[i+1]):
                count.append([col[i],temp])
                temp = 1
        for j in range(len(count)-1):
            if(count[j][0] > count[j+1][0]):
                if(count[j+1][1] < x or count[j][0] - count[j+1][0] != 1):
                    dec = False
                    break
                else:
                    count[j+1][1] -= x
            elif(count[j][0] < count[j+1][0]):
                if(count[j][1] < x or count[j+1][0] - count[j][0] != 1):
                    dec = False
                    break
                else:
                    count[j][1] -= x
        if(dec):
            #print("col: ",col," <> count: ",count," // answer: ",answer) 
            answer += 1

    print("#{} {}".format(test_case,answer))
