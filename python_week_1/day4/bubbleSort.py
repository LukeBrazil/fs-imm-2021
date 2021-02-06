array = [1, 3, 6, 90, 74, 3, 61, 42, 99]

def bubbleSort(array):
    for i in range(0, len(array)):
        for j in range(0, len(array)):
            if array[i] < array[j]:
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
    print(array)

bubbleSort(array)