def insert_sort(A):
    for i in range(len(A)-1):
        for j in range(i+1,0,-1):
            print(i,j)
            if(A[j]<A[j-1]):
                A[j],A[j-1]=A[j-1],A[j]
            else:
                break;

def select_sort(A):
    for i in range(len(A)-1):
        min_index=i
        for j in range(i+1,len(A)):
            if(A[i]>A[j]):
                min_index=j
                A[min_index],A[i]=A[i],A[min_index]

def bubble_sort(A):
    for i in range(len(A)-1):
        for j in range(len(A)-i-1):
            if(A[j]>A[j+1]):
                A[j],A[j+1]=A[j+1],A[j]

def Quick_Sort(data):
    if(len(data)<2):
        return data
    else:
        pivot = data[0]
        left = [i for i in data[1:] if i<data[0]]
        right = [i for i in data[1:] if i>=data[0]]
        return Quick_Sort(left) + [pivot]+Quick_Sort(right)

def merge_sort(array):
    if(len(array)<=1):
         return array
    mid = len(array)//2
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])
    i,j,k = 0 , 0 , 0

    while i<len(left) and j <len(right):
        if left[i] < right[j]:
            array[k] = left[i]
            i += 1
        else:
            array[k] = right[j]
            j += 1
        k += 1
    if i==len(left):
        while j< len(right):
            array[k] = right[j]
            j += 1
            k += 1
    elif j==len(right):
        while i< len(left):
            array[k] = left[i]
            i += 1
            k += 1
    return array