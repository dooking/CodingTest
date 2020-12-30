t = int(input())
for test_case in range(1,t+1):
    n = int(input())
    data = list(map(int,input().split()))
    tree = [0]
    index = 1
    answer = 0
    for i in range(len(data)):
        tree.append(data[i])
        j=len(tree)-1
        while j!=0:
            if(tree[j] < tree[j//2]):
                tree[j],tree[j//2] = tree[j//2],tree[j]
            j=j//2
    j=n

    while j != 0:
        j=j//2
        answer += tree[j]
    print("#{} {}".format(test_case,answer))