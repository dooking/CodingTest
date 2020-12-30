import heapq
import sys
input = sys.stdin.readline
v,e = map(int,input().split())
start = int(input())
graph=[[] for _ in range(e)]
table = [float('inf') for _ in range(v+1)]

def dijkstra(graph,start):
    queue=[]
    table[start]=0
    heapq.heappush(queue,[table[start],start])
    while queue:
        current_distance,current_node = heapq.heappop(queue)   
        for weight, adjacent in graph[current_node]:
            distance = weight + current_distance
            if distance<table[adjacent]:
                table[adjacent]=distance
                heapq.heappush(queue, [weight,adjacent])
    
for _ in range(e):
    a,b,w = map(int,input().split())
    graph[a].append([w,b])
dijkstra(graph,start)
for i in range(1,v+1):
    print("INF" if table[i]==float('inf') else table[i] )