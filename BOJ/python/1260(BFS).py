N,M,V = map(int,input().split())
A=[list() for _ in range(N+1)]
visited=list()
need_visited=list()
for _ in range(M):
   x,y = map(int,input().split())
   A[x].append(y)
   A[y].append(x)
for x in A:
   x.sort()
need_visited.append(V)
while need_visited:
    temp = need_visited.pop(0)
    for i in A[temp]:
        if(i not in  visited and i not in need_visited):
            need_visited.append(i)
    visited.append(temp)
print(visited)
        
