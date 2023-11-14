#for (var i=0; i<10;i++){console.log(i)}
# for i in range(0,10,1) = for i in range(10,1) = for i in range(10): / range function that returns a sequence of numbers : start: inclusive and has default value of 0 
                                                                                #stop: exclusive and required (it must be put it)
                                                                                #steps: not required and has default value of 1 and it can be (+) or (-)
    #print(i) / we should have an indentation
#for i in range(10,0,-2):
    #print(i)

#superheros=["batman", "superman","spiderman"]
#name="john"
user_data={"first_name :", name, "last_name: " "Max", "grades: " [9.2,8.6,10], "age: "28, "is_admin:" False, "voted:" True}
    #print("Dictionary keys list :", user_data.keys())
    #print("Dictionary vallues list :", user_data.values())
#for key in user_data.keys:
    #print(f"{key}---{user_data[key]}")
#for item in user_data.items():
    #print(item)

#x=500
#while x>0:
    #print(x)
    #x-=1

#Conditionnals:
#if 0>x>10:
    #print("Greater")
#elif 10<x<100:
    #print("Medium")
#else:
    #print("Less")

#if user_data["is_admin"]== True:
    #print("Yes HE IS ADMIN")
#else:
    #print("He is a simple user")

if user_data["is_admin"]:
    print("Yes HE IS ADMIN")
else:
    print("He is a simple user")

if not user_data["is_admin"]:
    print("Yes HE IS ADMIN")
else:
    print("He is a simple user")

if "is_subscribed" in user_data:
    print("Yes he is.")
else:
    print("He is not.")