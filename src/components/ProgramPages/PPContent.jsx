import React from "react";
import PrgmConComponent from "./prgmConComponent";

export default function PpContent() {
  const contentObj = {
    largenum: {
      code: `num1 = int(input("Enter the 1st number : "))
num2 = int(input("Enter the 2nd number : "))
num3 = int(input("Enter the 3rd number : "))
if (num1>num2 and num1>num3):
    print(f"{num1} is largest")
elif (num2>num1 and num2>num3):
    print(f"{num2} is largest")
else:
    print(f"{num3} is largest")  
    `,
      output: `Enter the 1st number : 124
Enter the 2nd number : 150
Enter the 3rd number : 120
150 is largest`,
      heading: `program to find largest number of given 3 numbers`,
    },

    listwo: {
      code: `#creating list without using list() method
lst=[10,20,30,40,50]
print("List elements : ",lst)

#creating list with list() method
vowels = "aeiou"
lst1=list(vowels)
print("      ")
print("List Elements : ",lst1) 
  `,
      output: `List elements :  [10, 20, 30, 40, 50]
List Elements :  ['a', 'e', 'i', 'o', 'u']`,
      heading: `Program to create list, with & without using list method`
    },

    logicoper: {
      code: `# python program to demonstrate logical and operator
# Initializing the value of a and b 
a = 20
b = 10
# Using Logical AND operators 
# if both condition are true then output is TRUE
if (a>0 and b>0):
    print("AND logical operator")
    print("Both conditions are True so if statement is printed!")
else:
    print("Atleast one condition is False then else is statement is printed!")
    
# Using Logical OR operators 
# if atleast one condition is true then output is TRUE
if (a>0 or b < 0):
    print("                  ")
    print("OR logical operator")
    print("Atleast one condition is True then if statement is printed!")
else:
    print("Atleast one condition is False then else is statement is printed!")
    
# Using Logical NOT operators 
# if operand is true then output is false 
if not (a%3==0):
    print("                   ")
    print("NOT logical operator")
    print("a is not divisible by 3 ")
  `,
      output: `AND logical operator
Both conditions are True so if statement is printed!

OR logical operator
Atleast one condition is True then if statement is printed!

NOT logical operator
a is not divisible by 3`,
      heading: `Logical Operators In Python`
    },

    relationoper: {
      code: `'''python program illustrating the relation between the give 
two numbers using relational operators. 
Initializing the value of a and b  '''
a = 10
b = 5

# Using relational operators 
print("a > b :",a>b)
print("a < b :",a<b)
print("a == b :",a==b)
print("a != b :",a!=b)
print("a >= b :",a>=b)
print("a <= b :",a<=b)
  `,
      output: `a > b : True
a < b : False
a == b : False
a != b : True
a >= b : True
a <= b : False`,
      heading: `Relational Operators In Python`
    },
    simplecalc: {
      code: `# Program make a simple calculator
# This function adds two numbers
def add(x, y):
    return x + y

# This function subtracts two numbers
def subtract(x, y):
    return x - y

# This function multiplies two numbers
def multiply(x, y):
    return x * y

# This function divides two numbers
def divide(x, y):
    return x / y

print("Select operation.")
print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.Divide")

while True:
    # take input from the user
    choice = input("Enter choice(1/2/3/4): ")

    # check if choice is one of the four opti
    # check if choice is one of the four options
    if choice in ('1', '2', '3', '4'):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(num1, "+", num2, "=", add(num1, num2))

        elif choice == '2':
            print(num1, "-", num2, "=", subtract(num1, num2))

        elif choice == '3':
            print(num1, "*", num2, "=", multiply(num1, num2))

        elif choice == '4':
            print(num1, "/", num2, "=", divide(num1, num2))
        # break the while loop if answer is no
        next_calculation = input("Let's do next calculation? (yes/no): ")
        if next_calculation == "no":
            break
  `,
      output: `Select operation.
1.Add
2.Subtract
3.Multiply
4.Divide
Enter choice(1/2/3/4): 1
Enter first number: 10
Enter second number: 5
10.0 + 5.0 = 15.0
Let's do next calculation? (yes/no): no`,
      heading: `Simple Calculator using python Arthmetic operators`
    },

    simpleint: {
      code: `# Function for simple interest
def simple_interest(p,t,r):
    print('The principal is', p)
    print('The time period is', t)
    print('The rate of interest is',r)
    si = (p * t * r)/100
    print('The Simple Interest is', si)
    
# function call
simple_interest(10000, 12, 2)  
`,
      output: `The principal is 10000
The time period is 12
The rate of interest is 2
The Simple Interest is 2400.0`,
      heading: `program to calculate simple interest SI= (p*t*r)/100`
    },

    sumofnum: {
      code: `
""" Write a python program to read 2 numbers from user and
    print their sum and difference."""
x = int(input("Enter the 1st number : "))
y = int(input("Enter the 2nd number : "))
print("The sum is : ",x+y)
print("The difference is : ",x-y)`,
      output: `
Enter the 1st number : 10
Enter the 2nd number : 5
The sum is :  15
The difference is :  5
    `,
      heading:
        "Program to read two numbers from user and print their sum and difference",
    },

    swapping: {
      code: `#swapping of 2 variable using temporary variable
X=10
Y=20
temp=X
X=Y
Y=temp
print("With using third variable")
print("The value of x after swapping : ",X)
print("The value of y after swapping : ",Y)

#swapping of 2 variable without using third variable
a=30
b=40
a,b = b,a
print("            ")
print("Without using third variable")
print("The value of a after swapping : ",a)
print("The value of b after swapping : ",b)
`,
      output: `With using third variable
The value of x after swapping :  20
The value of y after swapping :  10

Without using third variable
The value of a after swapping :  40
The value of b after swapping :  30`,
      heading: `Swapping 2 variable with & without using third variable`,
    },

    tuple: {
      code: `#creating list from tuple 
tuple1 = (10,20,30,40)
list1 = list(tuple1)
print("List elements : ",list1)

#removing element from tuple
list1.pop()
tuple1 = tuple(list1)
print("Tuple Elements : ",tuple1)
`,
      output: `List elements :  [10, 20, 30, 40]
Tuple Elements :  (10, 20, 30)`,
      heading: `Program to create tuple and delete element from tuple`,
    }
  }

  return <>
   <PrgmConComponent propsContent={contentObj.sumofnum}/>
  </>;
}