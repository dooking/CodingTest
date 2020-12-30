import sys
#sys.stdout = open('output.txt','w')
T = int(input())
for test_case in range(1,T+1):
    cnt = 0
    n_input,k_input = map(int,input().split())
    A = [1,2,3,4,5,6,7,8,9,10,11,12]
    A_bit = [0,0,0,0,0,0,0,0,0,0,0,0]
    for a in range(2):
        A_bit[11]=a
        for b in range(2):
            A_bit[10]=b
            for c in range(2):
                A_bit[9]=c
                for d in range(2):
                    A_bit[8]=d
                    for e in range(2):
                        A_bit[7]=e
                        for f in range(2):
                            A_bit[6]=f
                            for g in range(2):
                                A_bit[5]=g
                                for h in range(2):
                                    A_bit[4]=h
                                    for i in range(2):
                                        A_bit[3]=i                                
                                        for j in range(2):
                                            A_bit[2]=j                               
                                            for k in range(2):
                                                A_bit[1]=k    
                                                for l in range(2):
                                                    A_bit[0]=l
                                                    sum = 0
                                                    if(A_bit.count(1)==n_input):
                                                        for i_index in range(len(A_bit)):
                                                            if(A_bit[i_index]==1):
                                                                sum += A[i_index]
                                                                #print(A_bit,sum,A[i_index],k)
                                                        if(sum==k_input):
                                                            cnt += 1
    print("#{0} {1}".format(test_case,cnt))
                                          