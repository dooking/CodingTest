def solution(n):
    answer = ''
    answer_list = []
    cnt = 0
    for i in range(10):
        if(n>(3**i-1)//2):
            print(n,i,cnt)
            cnt+=1
        else:
            break
    print(cnt)
    return answer

print(solution(18))