n, k = map(int,input().split())
coins = [int(input()) for _ in range(n)]
result = 0
for coin in coins[::-1]:
    if(coin<=k):
        result += k//coin
        k=k%coin 

print(result)