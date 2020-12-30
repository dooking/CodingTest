# def solution(food_times, k):
#     plate = -1
#     lenPlate = len(food_times)
#     for time in range(k+1):
#         plate += 1
#         if(plate == lenPlate):
#             plate = 0
#         while food_times[plate] == 0:
#             plate += 1
#             if(plate == lenPlate):
#                 plate = 0
#         food_times[plate] -= 1
#     return plate+1

# def solution(food_times, k):
#     food_list = []
#     plate = 0
#     for i,j in enumerate(food_times):
#         food_list.append([i+1,j])
#     for time in range(k+1):
#         print(time+1,"초 일때 ",plate,food_list)

#         if(plate == len(food_list)):
#             plate = 0

#         if(food_list == []):
#             return -1
#         elif(time == k):
#             return food_list[plate][0]

#         food_list[plate][1] -= 1
#         if(food_list[plate][1] == 0):
#             food_list = [[food_list[i][0],food_list[i][1]] for i in range(len(food_list)) if food_list[i][1] > 0 ]
#             print(food_list)
#         else:
#             plate += 1
#         print("->",plate,food_list)
# import sys
# sys.stdout = open('output.txt','w')

# import copy
# def solution(food_times, k):
#     tmp = copy.deepcopy(food_times)
#     food_list = []
#     time = 0
#     while True:
#         if(len(food_list) > k):
#             while food_list[k] <= 0:
#                 print(k,food_list[k])
#                 k += 1
#                 print("->",k,food_list[k])
#             return k%len(food_times)+1

#         b = []
#         for i in tmp:
#             time += 1
#             print(time,k)
#             if(time > k):
#                 a = i
#             else:
#                 a = i - 1
#                 if(a<0):
#                     k += 1
#             b.extend([a])
#         if(max(b) <= 0):
#             print(b)
#             return -1
#         food_list.extend(b)
#         tmp = b
# #         print("food_list :",food_list,k,time)
import sys
sys.stdout = open('output.txt','w')
# def solution(food_times, k):
#     food_list = []
#     for i,j in enumerate(food_times):
#         food_list.append([i+1,j])
#     food_list.sort(key=lambda x: x[1])
    
#     c= []
#     cnt = 0
#     lenFood = len(food_times)
#     for index,food in food_list:
#         b = []
#         for i in range(food, 1000000):
#             a = lenFood*i +index
#             print(index,food,a)
#             if(a<=k):
#                 cnt += 1
#                 b.extend([a])
#             else:
#                 break
#         c.append(b)
#     d =[]
#     for i in c:
#         if(i == []):
#             d.append(False)
#         else:
#             d.append(True)

#     if all(i for i in d):
#          return -1
#     if(k%lenFood == 0):
#         e = lenFood - 1
#     else:
#         e = k%lenFood - 1
#     print("b,c,d: ",b,c,d)
#     while cnt >= 0:
#         print("e,cnt :",e,cnt)
#         if(d[e] == False):
#             cnt -= 1
#             e += 1
#             if(e == lenFood):
#                 e = 0
#             print("False :",e,cnt)
#         else:
#             cnt -=1
#             while d[e] == True:
#                 e += 1
#                 if(e == lenFood):
#                     e = 0
#             print("True :",e,cnt)
    
#     if(d[e] == False):
#         e += 1
#         if(e == lenFood):
#             e = 1
#     else:
#         while d[e] == True:
#             e += 1
#             if(e == lenFood):
#                 e = 1

#     return e
def solution(food_times, k):
    lenFood = len(food_times)
    while k>= lenFood:
        rotate = k//lenFood
        if(min(food_times) <= rotate):
            



print(solution([1,10,10],7))
