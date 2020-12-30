def make_palindrome(array,n,m):
    for i in range(n):
        for j in range(n-m+1):
            j_temp = 0
            palindrome=''
            #print(i,j,j_temp,palindrome)
            while j_temp<=m//2:
                if(array[i][j+j_temp]==array[i][j+m-j_temp-1]):
                    palindrome += array[i][j+j_temp]
                    j_temp += 1
                    #print("성공: ",i,j,j_temp,"//",j+j_temp,array[i][j+j_temp],j+m-j_temp-1,array[i][j+m-j_temp-1])
                    #print("성공 아래: ",palindrome)
                    if(j_temp==m//2):
                        if(m%2==0):
                            return palindrome
                        else:
                            palindrome += array[i][j+j_temp]
                            return palindrome
                else:
                    break
    return palindrome

t = int(input())
for test_case in range(1,t+1):
    n,m = map(int,input().split())
    str1 = [list(input()) for _ in range(n)]
    str2 = list(zip(*str1))
    answer = ''
    palindrome = make_palindrome(str1,n,m)
    if(palindrome == ''):
        palindrome = make_palindrome(str2,n,m)

    if(m%2==0):
        for i in range(len(palindrome)*2):
            if(i>=len(palindrome)):
                answer += palindrome[len(palindrome)*2-1-i]
            else:
                answer += palindrome[i]  
    else:
        for i in range(len(palindrome)*2 - 1):
            if(i>=len(palindrome)):
                answer += palindrome[len(palindrome)*2-2-i]
            else:
                answer += palindrome[i]  
    print("#{0} {1}".format(test_case,answer))