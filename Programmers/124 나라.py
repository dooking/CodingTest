
def solution(n):
    answer = ''
    exp = 19
    while(exp > 0):
        if(n > 3**exp):
            value = n // 3**exp
            value2 = n % 3**exp
            answer += str(value)
            n = n - 3**exp
            print(exp, value, value2, answer, n)

        else:
            exp -= 1
    print(answer)

    return answer

solution(15)
