from random import randint


RANDOM_NUMS = [randint(1, 50) for x in range(30)]
print(f"Unsorted list: {RANDOM_NUMS}")

def selection_sort(list_to_order=RANDOM_NUMS):

    for i in range(len(list_to_order)):
        for j in range(i + 1, len(list_to_order)):
            if list_to_order[j] < list_to_order[i]:
                list_to_order[j], list_to_order[i] = list_to_order[i], list_to_order[j]
    print(f"Sorted list: {list_to_order}")

selection_sort()
