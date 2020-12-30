T = int(input())
for test_case in range(1,T+1):
    n = int(input())
    color = [0 for _ in range(n)]
    graph = [[0 for _ in range(10)] for _ in range(10)]
    cnt = 0
    for i in range(n):
        color[i] = list(map(int,input().split()))
        for a in range(color[i][0],color[i][2]+1):
            for b in range(color[i][1],color[i][3]+1):
                if(graph[a][b] != color[i][4] and graph[a][b] != 0):
                    cnt += 1
                graph[a][b] = color[i][4]
    print('#{0} {1}'.format(test_case,cnt))
T = int(input())
for test_case in range(1,T+1):
    n = int(input())
    color = [0 for _ in range(n)]
    graph = [[0 for _ in range(10)] for _ in range(10)]
    cnt = 0
    for i in range(n):
        color[i] = list(map(int,input().split()))
        for a in range(color[i][0],color[i][2]+1):
            for b in range(color[i][1],color[i][3]+1):
                if(graph[a][b] != color[i][4] and graph[a][b] != 0):
                    cnt += 1
                graph[a][b] = color[i][4]
    print('#{0} {1}'.format(test_case,cnt))
