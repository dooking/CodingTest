t = int(input())
for test_case in range(1,t+1):
    sentence = list(input())
    stack = []
    for i in range(len(sentence)):
        print(i,sentence[i],stack)
        if(len(stack)==0):
            stack.append(sentence[i])
        else:
            if(sentence[i] == stack[-1]):
                stack.pop()
            else:
                stack.append(sentence[i])
        
    print("#{0} {1}".format(test_case,len(stack)))