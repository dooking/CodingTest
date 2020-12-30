#https://www.acmicpc.net/problem/1939

import heapq
import sys

INF = sys.maxsize
n,m = map(int,input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
    a,b,c = map(int,input().split())
    graph[min(a,b)].append((max(a,b),c))
start,end = map(int,input().split())
answer = []
def dikstra(graph, start,end):
    queue = []
    distances = [-INF]*(n+1)
    heapq.heappush(queue,(1000000,start))
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        for adjacent,weight in graph[current_node]:
            if(current_distance<weight):
                current_weight = current_distance
            else:
                current_weight = weight
            
            if(distances[adjacent] < current_weight):
                distances[adjacent] = current_weight 
                heapq.heappush(queue,(weight,adjacent))
    return distances
answer = dikstra(graph,start,end)
print(answer[end])

