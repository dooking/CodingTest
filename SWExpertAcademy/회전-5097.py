t = int(input())
for test_case in range(1,t+1):
    n , m = map(int,input().split())
    data = list(map(int,input().split()))
    answer = data[m%n]

    print("#{} {}".format(test_case,answer))