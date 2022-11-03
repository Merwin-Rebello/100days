from ctypes import Union


a={1,2,3,1,4}
print(type(a))
print(a)

b={1,2,3,4,5}#his creates an empty dictionary thiss is tthe syntax of  to create empty dictionary
print(type(b))

c= set()#this creates an empty set wee have to tell python compiler that its a set
print(type(c))
c.add(55)
c.add(45)
c.add(45)   #EVEN IF WE ADD SAME ELEMNTS MANY TIMES IT  WILL  TAKE IT ONLY ONCE KEEP THAT IN MIND
c.add(45)
c.add(45)
c.add(45)
print(c)
#b.add([4,5,6])#llists cannot be included in the sets cause it can be changed so that may create a problem cause sets cannot be  changed
#print(b)
#c.add((34,57,47))
#print(c)     
#b.add({34:447})#dictionary alos cannot be added because it cann also be changed lik updated 
#print(b)
print(len(b))#prints the length of sets
#b.remove(3)#removes the elements which is given by thhe user
#print(b)
#c.remove(20)#the elements which is not present than error will bw thrown
#print(c)
d={1.2,3,4,56,447,45,9,234,456}
#d.clear()
print(d)
m=d.pop()
g=d.pop()
f=d.pop()
print(m)
print(g)
print(f)

#print(r.union({d,b}))



