# https://programmers.co.kr/learn/courses/30/lessons/68644
def solution(numbers):
    answer = []
    for i in range(len(numbers)):
        for j in range(i+1,len(numbers)):
            answer.append(numbers[i]+numbers[j])
    answer.sort()
    return list(set(answer))

print(solution([5,1]))

print(list(set([5,3,1,2,3])))