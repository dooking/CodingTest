def inorder(n, last):
    global cnt
    if n <= last:
        inorder(n * 2, last)
        tree[n] = cnt
        cnt += 1
        inorder(n * 2 + 1, last)


for tc in range(int(input())):
    N = int(input())
    tree = [0] * (N + 1)
    cnt = 1
    inorder(1, N)
    print('#{} {} {}'.format(tc+1, tree[1], tree[N // 2]))