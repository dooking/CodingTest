def solution(answers):
    answer = []
    p1 = [1,2,3,4,5]
    p2 = [2,1,2,3,2,4,2,5]
    p3 = [3,3,1,1,2,2,4,4,5,5]
    p1_point,p2_point,p3_point = 0,0,0,
    
    for i in range(len(answers)):
        print(i,i%5,i%8,i%10)
        if(p1[i%5-1] == answers[i]):
            p1_point += 1
        if(p2[i%8-1] == answers[i]):
            p2_point += 1
        if(p3[i%10-1] == answers[i]):
            p3_point += 1
    max_point = max(p1_point,p2_point,p3_point)
    if(max_point == p1_point):
        answer.append(1)
    if(max_point == p2_point):
        answer.append(2)    
    if(max_point == p3_point):
        answer.append(3)
    return answer

print(solution([1,3,2,4,2]))