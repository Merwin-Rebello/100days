#Using the | Operator
 dict_1 = {1: 'a', 2: 'b'}
 dict_2 = {3: 'c', 4: 'd'}

# print(dict_1 | dict_2)

#Using the ** Operator
 dict_1 = {1: 'a', 2: 'b'}
 dict_2 = {2: 'c', 4: 'd'}

 print({**dict_1, **dict_2})#we have used ** to unpack dictionaries dict_1 and dict_2

#Using copy() and update()

dict_1={5:'20',10:'89'}
dict_2={140:'25',546:'1000'}

dict3= dict_2.copy()
dict3.update(dict_2)
print(dict3)
