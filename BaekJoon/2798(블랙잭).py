#https://www.acmicpc.net/problem/2798
import sys
input = sys.stdin.readline
n,m = map(int,input().split())
card = list(map(int,input().split()))
answer = 300000
result = 0
for i in range(len(card)-2):
    for j in range(i+1,len(card)-1):
        for k in range(j+1,len(card)):
            result = card[i]+card[j]+card[k]
#            print("card : ",card[i],card[j],card[k],"// result : ",result,answer, abs(m-result), abs(m-answer))
            if(result <= m):
                if(abs(m-result)<abs(m-answer)):
                    answer = result
print(answer)
