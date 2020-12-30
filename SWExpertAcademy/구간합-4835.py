#https://swexpertacademy.com/main/learn/course/lectureProblemViewer.do

T = int(input())
for test_case in range(1, T + 1):
    n,m=map(int,input().split())
    a = list(map(int,input().split()))
    min_value = 10**8
    max_value = -1
    for i in range(n-m+1):
        if(max_value < sum(a[i:i+m])):
            max_value = sum(a[i:i+m])
        if(min_value > sum(a[i:i+m])):
            min_value = sum(a[i:i+m])
    print('#{0} {1}'.format(test_case,max_value - min_value))