import sys
import heapq

input = sys.stdin.readline
INF = sys.maxsize
N, M, X = map(int,input().split())
graph = [[] for _ in range(N+1)]
queue=[]
answer=[]
def dijkstra(graph,start,distances):
    distances[start]=0
    heapq.heappush(queue, (distances[start], start))
    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if(current_distance>distances[current_node]):
            continue
        for weight, adjacent in graph[current_node]:
            distance = current_distance + weight
            if(distance<distances[adjacent]):
                distances[adjacent] = distance
                heapq.heappush(queue, (distance,adjacent))
    return distances

max_answer = 0
for _ in range(M):
    a,b,w = map(int,input().split())
    graph[a].append((w,b))
for i in range(1,N+1):
    distances = [INF]*(N+1)
    answer.append(dijkstra(graph,i,distances))
for j in range(N):
    temp = answer[j][X]+answer[X-1][j+1]
    if(max_answer<temp):
        max_answer = temp
print(max_answer)