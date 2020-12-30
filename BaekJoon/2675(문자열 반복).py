n = int(input())
for i in range(n):
    answer=[]
    r, s = map(str,input().split())
    r= int(r)
    s = list(s)
    for i in range(len(s)):
        for _ in range(r):
            answer.append(s[i])
    for i in range(len(answer)):
        print("%s" % answer[i],end='')
    print('')