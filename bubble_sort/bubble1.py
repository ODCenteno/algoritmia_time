from random import randint

"""Construction of bubble sort algorithm reading from wikipedia"""


def run(random_list):
    """Function that receives a random list and return a sorted list"""
    n = len(random_list)
    print(f'Len of n: {n}')

    for i in range(2, n - 1):
        for j in range(0, n-i-1):
            if random_list[j] > random_list[j+1]:
                aux = random_list[j]
                random_list[j] = random_list[j + 1]
                random_list[j + 1] = aux
            else:
                continue
    return random_list


if __name__ == '__main__':
    random_list = [randint(1, 200) for x in range(30)]
    print(f'List values before been sorted = {random_list}')
    sorted_list = run(random_list)
    print(f'Sorted = {sorted_list}')

