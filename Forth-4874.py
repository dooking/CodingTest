t = int(input())
for test_case in range(1,t+1):
    cal = list(map(str,input().split()))
    cal_stack = []
    for word in cal:
        if(word == '+'):
            if(len(cal_stack)<=1):
                answer = "error"
                break
            else:
                a=cal_stack.pop()
                b=cal_stack.pop()
                cal_stack.append(b+a)
        elif(word == '*'):
            if(len(cal_stack)<=1):
                answer = "error"
                break
            else:
                a=cal_stack.pop()
                b=cal_stack.pop()
                cal_stack.append(b*a)
        elif(word == '-'):
            if(len(cal_stack)<=1):
                answer = "error"
                break
            else:
                a=cal_stack.pop()
                b=cal_stack.pop()
                cal_stack.append(b-a)        
        elif(word == '/'):
            if(len(cal_stack)<=1):
                answer = "error"
                break
            else:
                a=cal_stack.pop()
                b=cal_stack.pop()
                cal_stack.append(b//a)
        elif(word == '.'):
            print(cal_stack)
            if(len(cal_stack)==1):
                answer = cal_stack[0]
            else:
                answer = "error"
        else:
            cal_stack.append(int(word))
    print("#{} {}".format(test_case,answer))