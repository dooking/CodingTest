t = int(input())
for test_case in range(1,t+1):
    n,m = map(int,input().split())
    c = list(map(int,input().split()))
    index =[i for i in range(1,m+1)]
    cheese = []
    for i in range(m):
        cheese.append([c[i],i+1])
    left = []
    medium = cheese[:n]
    right = cheese[n:]
    k=0
    while len(left) < m:
    #    print("len(left):",left)
        for i in range(n):
            medium[i][0] = medium[i][0]// 2
    #        print("계산 :",medium[i][0])
            if(medium[i][0]== 0):
                if(medium[i] not in left):
                    left.append(medium[i])
    #            print("추가 :",left,medium[i])
                if(k<len(right)):
                    medium[i] = right[k]
    #                print("복사 :",k,medium[i],right[k])
                    k=k+1
    #print(left,"//",medium,"//",right)
    answer = left[-1][1]
    print("#{} {}".format(test_case,answer))

    