import sys
sys.stdout = open('output.txt','w')
coni, brown = map(int,input().split())
answer =0
queue =[]
visited = []
queue.append((coni,brown,1,0))
visited.append((coni,brown,1,0))
while queue:
    x,y,acc,time = queue.pop(0)
    if(y<0 or y>200000):
        continue
    if(x<0 or X >200000):
        answer = -1
        break
    if(x==y):
        answer = time
        break
    if(y-1==x+acc or y+1==x+acc or y*2==x+acc):
        answer = time + 1
        break
    x = x + acc
    for m in range(3):
        if(m==0):
            dy = y-1
        elif(m==1):
            dy = y+1
        elif(m==2):
            dy= y*2
        if((x,dy,acc+1,time+1) not in visited):
            queue.append((x,dy,acc+1,time+1))
            visited.append((x,dy,acc+1,time+1))
        

print("정답은 :",answer)