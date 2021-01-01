T = int(input())
for test_case in range(1,T+1):
    k, n, m = map(int,input().split())
    charge = list(map(int,input().split()))
    cnt = 0
    i=0
    k_temp = k
    check = 0
    while True:
        print(i,cnt,charge[i],k_temp)
        if(charge[i+1]<=k_temp):
            i = i+1
            check += 1
        else:
            if(i==0):
                check +=1
            if(check==0):
                print("1")
                cnt = 0
                break
            k_temp = charge[i]+k
            cnt += 1
            check = 0
        if(i==len(charge)-1):
            print("z")
            if(n < k_temp and charge[i] + k >= n):
                cnt +=1
                print("2")
                break
            elif (n==k_temp):
                cnt += 0
                break
            else:
                cnt = 0
                print("3")
                break
    print('#{0} {1}'.format(test_case,cnt))
    
