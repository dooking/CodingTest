def solution(food_times, k):
    k = k+1
    answer = 0
    food_length = len(food_times)
    new_food = []
    if(sum(food_times) < k):
        return -1
    elif(food_length >= k):
        return k
    else:
        for i in range(len(food_times)):
            new_food.append(food_length*(food_times[i]-1)+(i+1))
        max_num = max(new_food) // food_length
        food_list = []
        for food in new_food:
            for j in range(max_num):
                food_list.append(food+(j+1)*food_length)
        min_num = min(food_list)
        if(min_num > k):
            answer = k%food_length
            return answer
        food_list.sort()
        # print(new_food)
        # print(max(new_food))
        while True:
            for food in food_list:
                # print("Dd",food,k,max(new_food))
                if(max(new_food)<k):
                    return -1
                if(food <= k):
                    k += 1
                else:
                    break
            # print(k,food_length)
            answer = k % food_length
            break
    return answer

# print(solution([3,1,2],5)) # 1
# print(solution([3,1,1,1,2,4,3],12)) # 6
# print(solution([4,1,1,5],4)) # 1
# print(solution([1,1,1,1,1,1],1)) #2
# print(solution([4,2,3,6,7,1,5,8],27)) #5
# print(solution([4, 3, 5, 6, 2],7)) # 3
# print(solution([1, 1, 1, 1, 1],1)) # 2
# print(solution([1, 1, 1, 1],4)) # -1
# print(solution([1, 5, 5, 5, 5, 6, 7], 31)) # 6
# print(solution([7,8,3,3,2,2,2,2,2,2,2,2] , 35)) # 2
