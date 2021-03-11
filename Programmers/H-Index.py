def solution(citations):
    answer = []
    maxNum = max(citations)
    for h in range(maxNum):
        high = [i for i in citations if i>=h]
        low = [i for i in citations if i<h]
        if(len(high)>=h and len(low)<=h):
            answer.append(h)
    if(len(answer)==1 or maxNum == 0):
        return 0
    else:
        return max(answer)

print(solution([0,0,0]))