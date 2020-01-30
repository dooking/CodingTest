t = int(input())
for test_case in range(1,t+1):
    str1 = list(input())
    str2 = list(input())
    str1 = set(str1)
    answer = -1
    alpha = {
        'A' : 0,'B' : 0,'C' : 0,'D' : 0,'E': 0,'F': 0,'G' : 0,'H' : 0,'I' : 0,'J' : 0,'K' : 0,'L' : 0,'M' : 0,'N': 0,'O' : 0,'P' : 0,'Q' : 0,'R' : 0,'S' : 0,'T' : 0,'U' : 0,'V' : 0,'W' : 0,'X': 0,'Y': 0,'Z' : 0
    }
    for i in str2:
        for j in str1:
            if(i == j):
                alpha[j] += 1
    for values in alpha.values():
        if(answer < values):
            answer = values

    print("#{0} {1}".format(test_case,answer))