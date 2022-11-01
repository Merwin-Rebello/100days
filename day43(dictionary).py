from typing import Dict


myDict = {
    "Fast":"in a quick manner ",
    "Merwin":"a happy person",
    "prince":"a fantabulous youth",
    "Marks" :[17,18.17],
    "dict2": {'merwin':'i am rich'},#nested dictionary .e dict inside a dictionary
     

    
}
print(myDict['Fast'])
print(myDict['Merwin'])
print(myDict['prince'])
myDict['Marks']=[70,89.98]
print(myDict['Marks'])
myDict['Marks']=[70,89.98]
print(myDict['dict2']['merwin'])#retreving the value of the nested dictionary ...
#methods of dictionary functions
print(myDict.keys())
print(list(myDict.keys()))
print(list(myDict.values()))
print(list(myDict.items()))#prints  the keys and items of all the contentens of the dictionary
print(myDict)
updateDict={
    "MERWIN":"FIREHFFHF",    #updation of a list ka syntax
}
myDict.update(updateDict)#use this function  to update the dictionary
print(myDict)
print(myDict.get("Merwin2"))#returns none when get function is used as Merwin2 is not present int he dictionary 
print(myDict["Merwin2"])#returns error as Merwin2 is not present #{check the }
