#1- Update Values in Dictionaries and Lists
# x = [ [5,2,3], [10,8,9] ] 
# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# x[1][0]=15
# print(x)

# students[0]["last_name"]="Bryant"
# print(students)

# sports_directory['soccer'][0]='Andres'
# print(sports_directory)

# z[0]['y']=30
# print(z)

#2- Iterate Through a List of Dictionaries
# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]
# # iterateDictionary(students) 
# for i in range (len(students)):
#     for key, val in students[i].items():
#         print(key,"-", val) 

#3- Get Values From a List of Dictionaries
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
for i in range (len(students)):
    print(students[i]['first_name'])

#4- Iterate Through a Dictionary with List Values
# dojo = {
#     'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#     'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }
# def printInfo(arr):
#     for key, val in arr.items():
#         print(f"{len(val)} {key.upper()}")
#         for items in val:
#             print(items)
# printInfo(dojo)

