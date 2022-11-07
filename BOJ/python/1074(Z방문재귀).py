#https://www.acmicpc.net/problem/1074

import sys
global count=0
input = sys.stdin.readline
n, r, c = map(int,input().split())

def answer(2**n, x, y)
    temp = 0
    if(dx == r and dy == c)
    if(temp==0):
        (dx,dy)= (x,y+1)
        count += 1
        temp += 1
    elif(temp==1):
        (dx,dy)=(x+1,y)
        count += 1
        temp += 1
    elif(temp==2):
        (dx,dy)=(x+1,y)
        count += 1
        temp += 1
    elif(temp==3):
        (dx,dy)=(x+1,y)
        count += 1
        temp += 1
    else:
        answer(n/2,x,y+n/2)
        answer(n/2,x+n/2,y)
        answer(n/2,x+n/2,y+n/2)
    return count