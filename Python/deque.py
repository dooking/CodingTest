from collections import deque

data = deque([2,3,4])

data.appendleft(1)
data.append(5)
data.popleft()
data.pop()

print(data)
print(list(data))