def solution(N, stages):
    answer = []
    user = [0 for i in range(N+2)]
    failure = []
    sumUser = len(stages)
    for stage in stages:
        user[stage] += 1
    
    for stage in range(1,N+1):
        a = user[stage]
        b = sumUser
        if(b==0):
            failure.append([stage,0])
        else:
            failure.append([stage,a/b])
        sumUser -= user[stage]

    failure.sort(key=lambda x: (-x[1],x[0]))
    for index in failure:
         answer.append(index[0])
    return answer
