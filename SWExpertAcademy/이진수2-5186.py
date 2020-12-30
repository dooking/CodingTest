t = int(input())
for test_case in range(1,t+1):
    n = float(input())
    answer = ''
    res = 0
    p = -1
    cnt = 1
    while n != 0:
        if(cnt == 13):
            answer = "overflow"
            break
        if(n>=2**p):
            res = int(n/(2**p))
            n = n % (2**p)
            answer += str(res)
        else:
            answer += '0'
        cnt += 1
        p -= 1
        #print(cnt, n,res, answer)

    print("#{} {}".format(test_case,answer))