import csv

addresses = []
amounts = []

file_reader= open('RewardList.csv', "rt", encoding='utf-8')
read = csv.reader(file_reader)

for row in read :
    addresses.append(row[0])
    amounts.append(row[1])

addresses.pop(0)
amounts.pop(0)

print(addresses)
print(list(map(int, amounts)))

print(len(addresses))
print(len(amounts))
