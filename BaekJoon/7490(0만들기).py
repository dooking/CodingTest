test_case = int(input())

def Zero(result,print_result, i,n,temp):
    if(i==n+1):
        if(result == 0):
            print("zz")
            return print_result
        else:
            return "bb"
    else:
        if(temp=='+'):
            "hh"
            result += i
            return '+' + str(i)
        elif(temp=='-'):
            result -= i
            return '-'+ str(i)
        print(print_result,result)
        print_result += Zero(result,print_result,i+1,n,'+')
        print_result += Zero(result,print_result,i+1,n,'-')
        print("zz",print_result,result)
        return print_result

def _Zero(result,print_result, i,n,temp):
    Zero(result,print_result,i+1,n,'+')
    Zero(result,print_result,i+1,n,'-')

for _ in range(test_case):
    n = int(input())
    a = Zero(1,'1',1,n,'*')
    print(a)