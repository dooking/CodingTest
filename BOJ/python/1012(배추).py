import sys
input = sys.stdin.readline
T = int(input())
def bfs(graph,width,height): 
    queue = []
    visited = []
    dx=[-1,0,1,0]
    dy=[0,-1,0,1]
    for x,y in graph:
        node_x = x
        node_y = y
        queue.append((x,y))
        while queue:
            x,y = queue.pop(0)
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if(nx<0 or nx>=width): 
                    continue
                if(ny<0 or ny>=height):
                    continue
                if((nx,ny) in visited and nx==node_x and ny==node_y):
                    continue
                if((nx,ny) in graph):
                    visited.append((x,y))
                    queue.append((nx,ny))
                    graph.remove((nx,ny))

    return len(graph)


for _ in range(T):
    m,n,k = map(int,input().split())
    vector = []
    for _ in range(k):
        x,y = map(int,input().split())
        vector.append((x,y))
    print(bfs(vector,m,n))