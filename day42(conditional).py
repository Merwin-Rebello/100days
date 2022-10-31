'''num=5
if(num>1):
  print("true") 
elif(num<1):
    print("false")
else:
    {
        print("chill")
    } '''
  
'''a=int(input("enter the number "))
if(a>3):
    print(a+"the value is greater than 3")
elif(a>23):
    print(a+"he number is greter than 23")
else:
    print(a+"nothing can be done enjoy")'''    
    
a = 2
b = 330
print("A") if a > b else print("B")#short hand if in a single line we can give bothh the conditiions

#logical operators  using and both the condition should be true 
a = 200
b = 33
c = 500
if a > b and c > a:
  print("Both conditions are True")
  
  
  #logical or condition and one of the conditon should be true  
  a = 200
b = 33
c = 500
if a > b or a > c:
  print("At least one of the conditions is True")
   
