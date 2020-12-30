max=-1
max_num=0
for i in range(9):
    A=int(input())
    if(A>max):
        max=A
        max_num=i+1
print(max)
print(max_num)