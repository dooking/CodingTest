T = int(input())

for test_case in range(1,T+1):
    card_test = [0]*10
    card_index = 0
    card_max = -1
    n = int(input())
    card = list(map(int,input()))
    for i in card:
        card_test[i] += 1
    for j in range(len(card_test)):
        if(card_test[j]>card_max):
            card_max = card_test[j]
            card_index = j
        if(card_test[j] == card_max):
            if(card_index<j):
                card_index = j    

    print('#{0} {1} {2}'.format(test_case,card_index, card_max))