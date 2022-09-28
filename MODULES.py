#now importing tr module from the module created
import mymodule

mymodule.greeting("Merwin")







import datetime

x = datetime.datetime.now()# this will give me  the real in date
#now() function inside the datetime module can take only on parameter and it will give in real time date at once
print(x.year)
print(x.strftime("%A"))


import datetime# datetime is predefined-module

x = datetime.datetime(2035,3,12)# here we are not using now()so we are making an object of thhe class datetime
#and giving parameter as per our use and input 
print(x.year)
print(x.strftime("%A"))

