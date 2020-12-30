def solution(heights):
    answer = [0 for _ in range(len(heights))]
    visited = [0 for _ in range(len(heights))]
    for i in range(len(heights)-1,-1,-1):
        j=i   
        while j>=0:
            if(heights[i]<heights[j]):
                answer[i] = j+1
                visited[j] = 1
                break
            else:
                j -= 1
    return answer

print(solution([3,9,9,3,5,7,2]))