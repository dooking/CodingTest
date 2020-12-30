t = int(input())
for test_case in range(1,t+1):
    v,e = map(int,input().split())
    graph = [[]for _ in range(v+1)]
    visited = [False]*(v+1)
    stack = []
    for _ in range(e):
        a,b = map(int,input().split())
        graph[a].append(b)
    start, end = map(int,input().split())
    
    visited[start] = True
    stack.append(start)
    while stack:
        x = stack.pop()
        for nx in graph[x]:
            if(nx not in visited):
                stack.append(nx)
                visited[nx]=True
    
    if(visited[end]):
        answer = 1
    else:
        answer = 0

    print("#{0} {1}".format(test_case,answer))