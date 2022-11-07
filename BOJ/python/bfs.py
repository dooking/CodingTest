
def _DFS(A,N,M,V):
    visited=list()
    need_visited=list()
    need_visited.append(V)
    while need_visited:
        temp = need_visited.pop()
        if(temp not in  visited):
            visited.append(temp)
            need_visited.extend(A[temp])
    for i in visited:
        print(i)
def _BFS(A,N,M,V):
    visited=list()
    need_visited=list()
    need_visited.append(V) 
    while need_visited:
        temp = need_visited.pop(0)
        for i in A[temp]:
            if(i not in  visited and i not in need_visited):
                need_visited.append(i) 
        visited.append(temp)
    for i in visited:
        print(i)
     
N,M,V = map(int,input().split())
A=[list() for _ in range(N+1)]
for _ in range(M):
    x,y = map(int,input().split())
    A[x].append(y)
    A[y].append(x)
for x in A:
       x.sort(reverse=True)
_DFS(A,N,M,V)
for x in A:
       x.sort()
_BFS(A,N,M,V)
