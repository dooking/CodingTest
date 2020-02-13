from itertools import product
t = int(input())
for test_case in range(1,t+1):
    n = int(input())
    graph = [list(map(int,input().split())) for _ in range(n)]
    people = []
    stair = []
    distances = [[0]*2 for _ in range(10)]
    times = [[0]*2 for _ in range(10)]
    index = 0
    min_time = 100000
    for i in range(n):
        for j in range(n):
            if(graph[i][j] == 1):
                people.append([i,j])
            elif(graph[i][j] > 1):
                stair.append([graph[i][j],i,j])
    for x,y in people:
        distances[index][0] = abs(x-stair[0][1]) + abs(y-stair[0][2])
        distances[index][1] = abs(x-stair[1][1]) + abs(y-stair[1][2])
        times[index][0] = abs(x-stair[0][1]) + abs(y-stair[0][2]) +stair[0][0]
        times[index][1] = abs(x-stair[1][1]) + abs(y-stair[1][2]) +stair[1][0]

        index +=1
    for case in list(product([0,1],repeat=len(people))):
        case_A = []
        case_B = []
        time_A = 0
        time_B = 0
        for i in range(len(case)):
            if(case[i] == 0):
                case_A.append([times[i][0],i])
                #A로 이동
            else:
                case_B.append([times[i][1],i])
                #B로 이동
        case_A = sorted(case_A,key=lambda x: x[0])
        case_B = sorted(case_B,key=lambda x: x[0])
        print("Times > ",times)
        print("Case A : ",case_A,"// Case B :",case_B)

        if(len(case_A)>=4):
            if(distances[case_A[-1][1]][0] >= case_A[len(case_A)-4][0]+1):
                time_A = case_A[-1][0] + 1
            else:
                time_A = case_A[len(case_A)-4][0] + stair[0][0] + 1
        elif(len(case_A)<4):
            if(len(case_A)!=0):
                time_A = case_A[-1][0]+1
        
        if(len(case_B)>=4):
            if(distances[case_B[-1][1]][1] >= case_B[len(case_B)-4][0]+1):
                time_B = case_B[-1][0] + 1
            else:
                time_B = case_B[len(case_B)-4][0] + stair[1][0] + 1
        elif(len(case_B)<4):
            if(len(case_B)!=0):
                time_B = case_B[-1][0]+1

        if(min_time > max(time_A,time_B)):
            min_time = max(time_A,time_B)
        print("Time A : ",time_A,"// Time B : ",time_B, "/// ", min_time)
  
    print("#{} {}".format(test_case,min_time))