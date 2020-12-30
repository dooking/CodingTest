#https://programmers.co.kr/learn/courses/30/lessons/42587
def solution(priorities, location):
    answer = 0
    index = [i for i in range(len(priorities))]
    index_priorities = list(zip(priorities,index))
    now = 0
    work = 1
    while 1:
        if(priorities[now] == max(priorities)):
            temp=index_priorities.pop(0)
            priorities.pop(0)
            if(temp[1] == location):
                answer = work
                break
            else:
                work += 1
        else:
            temp = index_priorities.pop(0)
            temp2 = priorities.pop(0)
            priorities.append(temp2)
            index_priorities.append(temp)
    return answer

print(solution([1, 1, 9, 1, 1, 1],0))