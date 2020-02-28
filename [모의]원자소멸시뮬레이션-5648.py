t = int(input())
for test_case in range(1,t+1):
    n = int(input())
    data=[]
    meet=[]
    answer = 0
    visited = []

    for _ in range(n):
        x, y, di, energy = map(int,input().split())
        data.append([x,y,di,energy])

    for i in range(len(data)-1):
        for j in range(i+1,len(data)):
            x1,y1,di1,energy1 = data[i][0],data[i][1],data[i][2],data[i][3]
            x2,y2,di2,energy2 = data[j][0],data[j][1],data[j][2],data[j][3]
            if(di1==0):
                if(di2==1):
                    if(x1==x2 and y1<y2):
                        meet.append([x1,y1,x2,y2,abs(y1-y2)/2,energy1,energy2])
                elif(di2==2):
                    if((x1<x2 and y1<y2) and abs(x1-x2)==abs(y1-y2)):
                        meet.append([x1,y1,x2,y2,abs(x1-x2),energy1,energy2])
                elif(di2==3):
                    if((x1>x2 and y1<y2) and abs(x1-x2)==abs(y1-y2)):
                        meet.append([x1,y1,x2,y2,abs(x1-x2),energy1,energy2])
            if(di1==1):
                if(di2==0):
                    if(x1==x2 and y1>y2):
                        meet.append([x1,y1,x2,y2,abs(y1-y2)/2,energy1,energy2])
                elif(di2==2):
                    if((x1<x2 and y1>y2) and abs(x1-x2)==abs(y1-y2)):
                        meet.append([x1,y1,x2,y2,abs(x1-x2),energy1,energy2])
                elif(di2==3):
                    if((x1>x2 and y1>y2) and abs(x1-x2)==abs(y1-y2)):
                        meet.append([x1,y1,x2,y2,abs(x1-x2),energy1,energy2])
            if(di1==2):
                if(di2==0):
                    if((x1>x2 and y1>y2) and abs(x1-x2)==abs(y1-y2)):
                        meet.append([x1,y1,x2,y2,abs(x1-x2),energy1,energy2])
                elif(di2==1):
                    if((x1>x2 and y1<y2) and abs(x1-x2)==abs(y1-y2)):
                        meet.append([x1,y1,x2,y2,abs(x1-x2),energy1,energy2])
                elif(di2==3):
                    if(x1>x2 and y1==y2):
                        meet.append([x1,y1,x2,y2,abs(x1-x2)/2,energy1,energy2])
            if(di1==3):
                if(di2==0):
                    if((x1<x2 and y1>y2) and abs(x1-x2)==abs(y1-y2)):
                        meet.append([x1,y1,x2,y2,abs(x1-x2),energy1,energy2])
                elif(di2==1):
                    if((x1<x2 and y1<y2) and abs(x1-x2)==abs(y1-y2)):
                        meet.append([x1,y1,x2,y2,abs(x1-x2),energy1,energy2])   
                elif(di2==2):
                    if(x1<x2 and y1==y2):
                        meet.append([x1,y1,x2,y2,abs(x1-x2)/2,energy1,energy2])
    meet.sort(key=lambda x: x[4])
    pre_time = 0
    pre_success = False
    for x1,y1,x2,y2,time,energy1,energy2 in meet:
        if(pre_time == time and pre_success == True):
            if([x1,y1] in visited and [x2,y2] not in visited):
                answer += energy2
                visited.append([x2,y2])
                pre_success = True
            elif([x1,y1] not in visited and [x2,y2] in visited):
                answer += energy1
                visited.append([x1,y1])
                pre_success = True
            elif([x1,y1] not in visited and [x2,y2] not in visited):
                answer += energy1 + energy2
                visited.append([x1,y1])
                visited.append([x2,y2])
                pre_success = True
            else:
                pre_success = False
        else:
            if([x1,y1] not in visited and [x2,y2] not in visited):
                visited.append([x1,y1])
                visited.append([x2,y2])
                answer += energy1 + energy2
                pre_success = True
            else:
                pre_success = False
        pre_time = time
        

        

    print("#{} {}".format(test_case,answer))