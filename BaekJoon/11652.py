import sys
def card(list):
    if(len(list)==0):
        return list
    else:
        left = [x for x in list[:] if x==list[0]]
        right = [x for x in list[:] if x>list[0]]
        return [left] + card(right)

answer =[]
max_len=0
for i in range(int(sys.stdin.readline())):
    answer.append(int(sys.stdin.readline()))
answer.sort()
for i in card(answer):
    if(max_len<len(i)):
        max_len = len(i)
        max_value = i[0]
    if(max_len==len(i)):
        if(max_value>i[0]):
            max_value = i[0]
print(max_value)
