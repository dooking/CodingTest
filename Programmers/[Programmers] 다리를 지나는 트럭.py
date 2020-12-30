def solution(bridge_length, weight, truck_weights):
    answer = 0
    index = 0
    head = 0
    multi = 0

    while index != len(truck_weights):
        print(index,multi,truck_weights)
        if(multi == 0):
            answer += 1
        elif(multi == 1):
            answer += bridge_length-1
        else:
            answer += bridge_length
        if(index != len(truck_weights) -1):
            if(truck_weights[index] + truck_weights[index+1] <= weight):
                multi = 0
            elif(sum(truck_weights[head:index]) + truck_weights[index+1] <= weight):
                multi = 1
            else:
                multi = 2
        index += 1

    return answer+1

print(solution(4,2,[1,1,1,1]))