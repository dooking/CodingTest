
def dfs(current_row):
    global min_value
    global graph
    global candidate
    if min_value < candidate:
        return
    if(current_row == n):
        if(candidate < min_value):
            min_value = candidate
        return
    for current_col in range(n):
        if(not visited[current_col]):
            visited[current_col] = True
            candidate += graph[current_row][current_col]
            dfs(current_row+1)
            candidate -= graph[current_row][current_col]
            visited[current_col] = False

t = int(input())
for test_case in range(1,t+1):
    n  = int(input())
    min_value = 100000
    graph = [list(map(int,input().split())) for _ in range(n)]
    visited = [0]*n
    min_value = 987654321
    candidate = 0
    dfs(0)
    print("#{} {}".format(test_case,min_value))