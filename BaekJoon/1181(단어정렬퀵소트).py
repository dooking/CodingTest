def quick_sort(word):
    left,right = list(),list()
    if(len(word)<2):
        return word
    else:
        pivot = word[0]
        for index in range(1, len(word)):
            if len(pivot) > len(word[index]):
                left.append(word[index])
            elif len(pivot) < len(word[index]):
                right.append(word[index])
            else:
                if pivot > word[index]:
                    left.append(word[index])
                elif pivot < word[index]:
                    right.append(word[index])
    return quick_sort(left) + [pivot] + quick_sort(right)
n = int(input())
word_list=[]
for i in range(n):
    word = str(input())
    word_list.append(word)
word_list=list(set(word_list))
for j in quick_sort(word_list):
    print(j)