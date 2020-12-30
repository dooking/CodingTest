def binary_search(page,target):
    start = 1
    end = page
    cnt = 0
    while start<=end:
        mid = (start+end)//2
        if(mid == target):
            return cnt
        elif(mid > target):
            end = mid
            cnt +=1
        elif(mid < target):
            start = mid
            cnt +=1
    return cnt

t = int(input())
for test_case in range(1,t+1):
    p,a,b = map(int,input().split())
    A = binary_search(p,a)
    B = binary_search(p,b)
    if(A>B):
        winner = 'B'
    elif(A<B):
        winner = 'A'
    else:
        winner = '0'

    print("#{0} {1}".format(test_case,winner))