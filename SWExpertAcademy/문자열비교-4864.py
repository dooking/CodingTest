t = int(input())
for test_case in range(1,t+1):
    str1 = str(input())
    str2 = str(input())
    if(str1 in str2):
        answer = 1
    else:
        answer = 0
    print("#{0} {1}".format(test_case,answer))