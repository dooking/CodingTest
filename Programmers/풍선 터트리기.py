# https://programmers.co.kr/learn/courses/30/lessons/68646?language=python3
def solution(a):
    answer = 0
    
    for i in range(len(a)):
        if(i==0 or i==len(a)-1):
            answer += 1
            continue
        left = i-1
        right = i+1
        leftMin = a[left]
        rightMin = a[right]
        while max(leftMin, a[i], rightMin) != a[i] :
            if(left == 0 and right == len(a)-1):
                break
            elif(left == 0):
                right += 1
                rightMin = min(a[right],rightMin)
            elif(right == len(a)-1):
                left -= 1
                leftMin = min(a[left],leftMin)
            else:
                left -= 1
                right += 1
                leftMin = min(a[left],leftMin)
                rightMin = min(a[right],rightMin) 
        if(left+right == len(a)-1):
            answer +=1 

    return answer


print(solution([-16,27,65,-2,58,-92,-71,-68,-61,-33]))
print(solution([9,-1,-5]))