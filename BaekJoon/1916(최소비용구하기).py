import sys
import heapq

INF = sys.maxsize
input=sys.stdin.readline
N= int(input())
M= int(input())
graph=[[] for _ in range(N+1)]
queue = []
distances = [INF]*(N+1)
def dijkstrat(graph,start):
    distances[start]=0
    heapq.heappush(queue, (distances[start], start))
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        for weight, adjacent in graph[current_node]:
            distance = current_distance + weight
            if(distance<distances[adjacent]):
                distances[adjacent] = distance
                heapq.heappush(queue, (distance,adjacent))

for _ in range(M):
    a,b,w=map(int,input().split())
    graph[a].append((w,b))
_from, _to = map(int,input().split())
dijkstrat(graph,_from)
print(distances[_to])
