
def _divide(data):
    global index
    if(len(data)==2):
        (a,a_index) = data[0]
        (b,b_index) = data[1]
        if(a == 1 and b == 3):
            del data[1]
        elif(a == 3 and b == 1):
            del data[0]
        elif(a < b):
            del data[0]
        elif(a > b):
            del data[1]
        elif(a == b):
            del data[1]
        #print("-> after : ",data)
        return data
    elif(len(data)==1):
        return data
    else:
        mid = (1+len(data))//2
        #print("left : ",data[:mid],"// right : ",data[mid:])
        return _divide(_divide(data[:mid]) + _divide(data[mid:]))

    
t = int(input())
for test_case in range(1,t+1):
    n = int(input())
    data = list(map(int,input().split()))
    people = [i for i in range(1,n+1)]
    new_data = list(zip(data,people))
    [(winner,winner_index)] = _divide(new_data)

    print("#{} {}".format(test_case,winner_index))