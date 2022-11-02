#while loop
'''i = 1
while i < 6:
    # comment: 
    print(i)
    i += 1
# end while
print("Done")

i=0
while i<5:
    print("Merwin"+str(int(i)))#and here we can only concatenate a string  with a string thats why we ave to take that 
    #int i value can convert it into a string .
    i=i+1
print("finished")#remember the indentattion  here if we write print wit the previous print than issue willl be created

#break condition
i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1

#continue conition
i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)
  
  #else statement in while loop
  i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")'''
  
  
  
#FOR LOOOOOPS
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  
  
  #LOOPING THROUGH A STRING
for x in "banana":
  print(x)
  
  #break statement in foor loop
  fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    break 
  print(x)
  
 ############################# 
  fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
  if x == "banana":
    
 #continue statement in for loop
   fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)
  
  
  #RANGE FUNCTION
  for x in range(6):  #range fnction by deffault starts  from 0 to n-1
   print(x)
   
   #we can tell from where to start the range 
   for x in range(2, 6):
    print(x)
    
    
    #  by defauult the sequence will  increase by 1 but we can definne by hw much we can increase  thw sequence here it is3
    for x in range(2, 30, 3):
      print(x)