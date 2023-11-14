# function: set of instructions
#can take or not an input: parameter
#must return something even its None
#  to define a function we use: 
#def function_name(param_one, param_two):
    #print(param_one, param_two)
    #return None
    #function_name("yes","no")

#def say_hi():
    #print("Hi")
    #return None

#def say_hi_name(name="John"):
    #print(f"Hi {name}")
    #return None

print("Result:" ,multiply(10,5))

def multiply (a,b);
    return a*b
def multiply_many(*args): # args is a table that contains all the inputs 
    print(args)
    result=1
    for number in args:
        result*=number
    return result
multiply_many(10,50)
multiply_many(10,2,3,5,8,55,81,54)
    