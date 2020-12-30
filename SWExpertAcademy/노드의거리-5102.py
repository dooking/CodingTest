t = int(input())
for test_case in range(1,t+1):
    v,e = map(int,input().split())
    graph = [[] for _ in range(v+1)]
    for _ in range(e):
        a,b = map(int,input().split())
        graph[a].append(b)
        graph[b].append(a)
    s,g = map(int,input().split())
    queue = []
    visited = [False]*(v+1)
    checked = [0]*(v+1)
    queue.append(s)
    visited[s] = True
    while queue:
        x = queue.pop(0)
        for nx in graph[x]:
            if(not visited[nx]):
                visited[nx] = True
                checked[nx] = checked[x] + 1
                queue.append(nx)
    if(visited[g]):
        answer =checked[g]
    else:
        answer = 0

    print("#{} {}".format(test_case,answer))