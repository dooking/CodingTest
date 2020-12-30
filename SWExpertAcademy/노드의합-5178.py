t = int(input())
def sum_tree(i):
    if(i>=len(tree)):
        return 0
    if(tree[i] != 0):
        return tree[i]
    else:
        #print("변화 전 : ",tree,i)
        tree[i] = sum_tree(i*2) + sum_tree(i*2+1)
        #print("변화 후 : ",tree,i)
        return tree[i]
        
for test_case in range(1,t+1):
    n,m,l = map(int,input().split())
    tree = [0]*(n+1)
    for _ in range(m):
        a,b = map(int,input().split())
        tree[a] = b

    h=sum_tree(1)
    print("#{} {}".format(test_case,tree[l]))