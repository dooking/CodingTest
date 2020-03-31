t = int(input())
for test_case in range(1,t+1):
    n,k = map(int,input().split())
    number = list(str(input()))
    pw = 0
    number_list = []
    rotate = len(number)//4

    for i in range(len(number)):
        if(number[i] == 'A'):
            number[i] = 10
        elif(number[i] == 'B'):
            number[i] = 11
        elif(number[i] == 'C'):
            number[i] = 12        
        elif(number[i] == 'D'):
            number[i] = 13       
        elif(number[i] == 'E'):
            number[i] = 14        
        elif(number[i] == 'F'):
            number[i] = 15
        elif(number[i] == '1'):
            number[i] = 1        
        elif(number[i] == '2'):
            number[i] = 2        
        elif(number[i] == '3'):
            number[i] = 3        
        elif(number[i] == '4'):
            number[i] = 4        
        elif(number[i] == '5'):
            number[i] = 5        
        elif(number[i] == '6'):
            number[i] = 6        
        elif(number[i] == '7'):
            number[i] = 7        
        elif(number[i] == '8'):
            number[i] = 8 
        elif(number[i] == '9'):
            number[i] = 9        
        elif(number[i] == '0'):
            number[i] = 0      
 

    for i in range(rotate):
        a = number[0:rotate]
        b = number[rotate:rotate*2]
        c = number[rotate*2:rotate*3]
        d = number[rotate*3:rotate*4]
        decimal_A = 0
        decimal_B = 0
        decimal_C = 0
        decimal_D = 0

        j = len(a)-1
        for index in a:
            decimal_A += (16**j)*int(index)
            j -= 1
        if(decimal_A not in number_list):
            number_list.append(decimal_A)
        j = len(b)-1
        for index in b:
            decimal_B += (16**j)*int(index)
            j -= 1
        if(decimal_B not in number_list):
            number_list.append(decimal_B)
        j = len(c)-1
        for index in c:
            decimal_C += (16**j)*int(index)
            j -= 1 
        if(decimal_C not in number_list):
            number_list.append(decimal_C)
        j = len(d)-1
        for index in d:
            decimal_D += (16**j)*int(index)
            j -= 1
        if(decimal_D not in number_list):
            number_list.append(decimal_D)
        
        tmp = number.pop()
        number = [tmp] + number

    number_list.sort(reverse=True)
    print("#{} {}".format(test_case,number_list[k-1]))