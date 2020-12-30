t = int(input())
for test_case in range(1,t+1):
    n,m,l = map(int,input().split())
    data = list(map(int,input().split()))
    for _ in range(m):
        index, add_number = map(int,input().split())
        data.insert(index,add_number)
    print("#{} {}".format(test_case,data[l]))