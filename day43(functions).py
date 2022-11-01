def func1():#function decleration
    print("my name is Merwin")    #function definiton
# end def
func1()#function call

def name(fname):# fname is a parameter listed in side a function definiton
     print("MY Name is" + fname)   
# end def
name(" Merwin")#Merwin is an argument which we pass into the function


#If the number of arguments is unknown, add a * before the parameter name
def my_function(*kids):
  print("The youngest child is " + kids[1])

my_function("Emil", "Tobias", "Linus")
#If we call the function without argument, it uses the default value:
def my_function(country = "Norway"):
  print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")

