t = int(input())
for test_case in range(1,t+1):
    e,n = map(int,input().split())
    res = list(map(int,input().split()))
    tree = [[] for _ in range(e+2)]
    answer = 1
    for i in range(0,len(res),2):
        tree[res[i]].append(res[i+1])
    queue = []
    visited = []
    queue.append(n)
    visited.append(n)
    while queue:
        x = queue.pop(0)

        for i in tree[x]:
            if(i not in visited):
                visited.append(i)
                queue.append(i)
                answer += 1


    print("#{} {}".format(test_case,answer))