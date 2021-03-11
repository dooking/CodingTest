from collections import Counter

array = ['red','blue','red','green','blue','blue']
counter = Counter(array)

print(counter['blue'])
print(counter['red'])
print(counter)
print(dict(counter)) # 사전 자료형으로 변환
