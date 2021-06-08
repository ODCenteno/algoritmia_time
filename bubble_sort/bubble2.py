from random import randint
from time import time

"""Construction of bubble sort algorithm reading from watch Platzi's class"""


def run(random_list):
    """Function that receives a random list and return a sorted list using Bubble Sort algorithm"""
    n = len(random_list)

    for i in range(n):
        for j in range(n-i-1):
            if random_list[j] > random_list[j+1]:
                random_list[j], random_list[j+1] = random_list[j+1], random_list[j]
    return random_list


if __name__ == '__main__':
    random_list = [randint(1, 200) for x in range(100)]
    print(random_list)
    sorted_list = run(random_list)
    print(sorted_list)
