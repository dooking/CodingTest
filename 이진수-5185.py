t = int(input())
for test_case in range(1,t+1):
    n, hex = map(str, input().split())
    answer = ''
    for i in hex:
        if(i=="0"):
            answer += "0000"
        elif(i == "1"):
            answer += "0001"
        elif(i == "2"):
            answer += "0010"
        elif(i == "3"):
            answer += "0011"        
        elif(i == "4"):
            answer += "0100"        
        elif(i == "5"):
            answer += "0101"        
        elif(i == "6"):
            answer += "0110"        
        elif(i == "7"):
            answer += "0111"     
        elif(i == "8"):
            answer += "1000"        
        elif(i == "9"):
            answer += "1001"        
        elif(i == "A"):
            answer += "1010"
        elif(i == "B"):
            answer += "1011"
        elif(i == "C"):
            answer += "1100"
        elif(i == "D"):
            answer += "1101"
        elif(i == "E"):
            answer += "1110"
        elif(i == "F"):
            answer += "0111"


    
    print("#{} {}".format(test_case,answer))