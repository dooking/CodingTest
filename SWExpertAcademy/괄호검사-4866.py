t = int(input())
for test_case in range(1,t+1):
    sentence = list(input())
    bracket = ['(',')','{','}']
    word_stack = []
    for word in sentence:
        if(word in bracket):
            if(len(word_stack)==0):
                word_stack.append(word)
            else:
                if(word_stack[-1]=='('):
                    if(word == ')'):
                        word_stack.pop()
                    else:
                        word_stack.append(word)
                elif(word_stack[-1]=='{'):
                    if(word == '}'):
                        word_stack.pop()
                    else:
                        word_stack.append(word)
    if(len(word_stack)==0):
        answer = 1
    else:
        answer = 0

    print("#{0} {1}".format(test_case,answer))