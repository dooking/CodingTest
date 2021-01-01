import sys
from itertools import combinations
n= int(input())
stat = [list(map(int,input().split())) for _ in range(n)]
listTeam = [i for i in range(1,n+1)]
canTeam = list(combinations(listTeam,n//2))

minGap = 100000

for can in canTeam:
    canStart = list(combinations(can,2))
    tmp = [i for i in listTeam if i not in can]
    canList = list(combinations(tmp,2))
    startTeam = 0
    linkTeam = 0
    for (i,j),(x,y) in list(zip(canStart,canList)):
        startTeam = startTeam + stat[i-1][j-1] + stat[j-1][i-1]
        linkTeam = linkTeam + stat[x-1][y-1] + stat[y-1][x-1]
    gap = abs(startTeam - linkTeam)
    if(gap < minGap):
        minGap = gap
print(minGap)
