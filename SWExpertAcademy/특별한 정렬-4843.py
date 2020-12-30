t = int(input())
for test_case in range(1,t+1):
    n= int(input())
    n_list = list(map(int,input().split()))
    n_up = sorted(n_list)
    n_down = sorted(n_list,reverse=True)
    answer = ''
    j,k = 0,0
    for i in range(10):
        if(i%2==0):
            answer += str(n_down[j])+' '
            j += 1
        else:
            answer += str(n_up[k])+' '
            k += 1
    print("#{0} {1}".format(test_case,answer))