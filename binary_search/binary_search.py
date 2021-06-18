"""Binary search algorithm practice"""

from random import randint


def binary_search(full_list, num):
    print(f'The number to search is = {num}')
    high = len(full_list) - 1
    low = 0
    middle = round((low + high) / 2)

    while low <= high:
        print(f'low = {low}, middle = {middle}, high = {high}')
        if num == full_list[middle]:
            return f'The number is in the list ant index = {middle}'
        elif num > full_list[middle]:
            low = middle + 1
            middle = round((low + high) / 2)
        elif num < full_list[middle]:
            high = middle - 1
            middle = round((low + high) / 2)
        else:
            return


if __name__ == '__main__':
    num_list = [x for x in range(1, 101)]
    number_position = binary_search(num_list, randint(1, 100))
    print(number_position)


