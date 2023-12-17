import React from "react";
import PrgmConComponent from "./PrgmConComponent"
import logo from '../assests/img/MRUSPACElogo.svg'
export default function PpContent({specificQn,subName}) {

  function myfun() {
    alert("button clicked!!")
}
function getcurrenttime(){
  var presenttime = new Date()
  document.getElementById("time").innerHTML = presenttime;
}
const getcurrenttimeintervel = ()=>{
setInterval(()=>getcurrenttime(),1000)
}
const timebtn={
  width:"auto",
  heigh:"50px",
  backgroundColor:"#F16522",
  fontSize:"20px",
  border:"none",
  padding:"3px"
}

  const PpContentObj = {
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
            break`,
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
simple_interest(10000, 12, 2)  `,
      output: `The principal is 10000
The time period is 12
The rate of interest is 2
The Simple Interest is 2400.0`,
      heading: `program to calculate simple interest SI= (p*t*r)/100`
    },

    sumofnum: {
      code: `x = int(input("Enter the 1st number : "))
y = int(input("Enter the 2nd number : "))
print("The sum is : ",x+y)
print("The difference is : ",x-y)`,
      output: `Enter the 1st number : 10
Enter the 2nd number : 5
The sum is :  15
The difference is :  5`,
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
print("The value of b after swapping : ",b)`,
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
print("Tuple Elements : ",tuple1)`,
      output: `List elements :  [10, 20, 30, 40]
Tuple Elements :  (10, 20, 30)`,
      heading: `Program to create tuple and delete element from tuple`,
    }
  }
  

//web development content object 
  const WddContentObj={
    onsubmit:{
        code:`<!DOCTYPE html>
<html lang="en">
<head>
<title>onsubmit</title>
</head>
<body>
<form onsubmit="myfun()">
Enter name : <input type="text">
<input type="submit">
</form>
<script>
    function myfun(){
        alert("form submitted on MRUSPACE!!")
    }
</script>
</body>
</html>
`,
output:`A input with submit button will be displayed`,
heading:`JavaScript program based on OnSubmit Event`
    },
    calc:{
        code:`<!DOCTYPE html>
<html lang="en">

<head>
<title>Calculator</title>
<style>
    button {
        width: 50px;
        height: 50px;
    }

    input {
        width: 210px;
        height: 50px;
    }
    #clear{
        width: 210px;
    }
</style>
</head>

<body>
<div class="container">
    <div class="calculator" align="center">

        <div class="input-El">
            <input type="text" placeholder="" id="output-Display">
        </div>
        <div class="button-El">
            <button onclick="display('7')">7</button>
            <button onclick="display('8')">8</button>
            <button onclick="display('9')">9</button>
            <button onclick="display('*')">x</button><br>
            <button onclick="display('4')">4</button>
            <button onclick="display('5')">5</button>
            <button onclick="display('6')">6</button>
            <button onclick="display('-')">-</button><br>
            <button onclick="display('1')">1</button>
            <button onclick="display('2')">2</button>
            <button onclick="display('3')">3</button>
            <button onclick="display('+')">+</button><br>
            <button onclick="display('0')">0</button>
            <button onclick="display('.')">.</button>
            <button onclick="calculate('=')" id="equalEl">=</button>
            <button onclick="display('/')">/</button><br>
            <button onclick="cle()" id="clear">AC</button>
        </div>

    </div>
</div>

</body>
<script>
let outputDisplay = document.getElementById("output-Display");

function display(num) {
    outputDisplay.value += num;
}

function calculate(num) {
    try {
        outputDisplay.value = eval(outputDisplay.value);
    }
    catch (error) {
        outputDisplay.value = "Invalid Input!!"
    }
}

function cle() {
    outputDisplay.value = " ";
}
</script>

</html>
`,
output:`calculator`,
heading:`Simple Calculator using HTML`
    },

    comparison:{
        code:`<!DOCTYPE html>
<html>
<head>
    <title>comparison operators</title>
</head>
<script>
    var a= 10;
    var b = 20;
    document.write(a==b,"<br>");
    document.write(a>=b,"<br>");
    document.write(a<=b,"<br>");
    document.write(a!=b,"<br>");
    document.write(a>b,"<br>");
    document.write(a<b,"<br>");
</script>
</html>
`,
output:`false
false
true
true
false
true`,
heading:`Comparison operators in JavaScript`
    },

    hyperlink:{
        code:`
<!DOCTYPE html>
<html lang="en">
<head>
<title>week1</title>
</head>
<body>
<p><a href="https://www.anilreddy.ml/">My Portfolio</a></p>
<a href="https://www.mruspace.ml/"><img src="img/m-logo.png" alt="MRU SPACE"></a>
</body>
</html>
`,
output : <div><p><a href="https://www.anilreddy.ml/">My Portfolio</a></p>
<a href="https://www.mruspace.in/"><img src={logo} alt="MRU SPACE" style={{width:"50px",height:"50px"}}/></a></div>,
heading:`HYPERLINKS IN HTML`
    },

    onclick:{
        code:`
<!DOCTYPE html>
<html lang="en">
<head>
<title>onclick</title>
</head>
<body>
<button onclick="myfun()">Click Me</button>
<script>
    function myfun() {
        alert("button clicked!!")
    }
</script>
</body>
</html>
`,
output: <button onClick={myfun} style={{width:"100px",height:"50px",fontSize:"20px"}}>Click Me</button>,
heading:`JavaScript program based on OnClick Event`
    },

    onfocus:{
code:`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>onblur</title>
</head>
<body>
<input type="text" id="inputid" onblur="fun()">
<script>
    function fun(){
        alert("Focus is out of input!!")
    }
</script>
</body>
</html>
`,
output:`After executing first click on input box
and then click some where else to see onfocus event effect`,
heading:'JavaScript program based on onFocus Event'
    },

    onload:{
        code:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Onload</title>
</head>
<body onload="alertfun()">
<script>
    function alertfun(){
        alert("Welcome to the world of MRUSPACE")
    }
</script>
</body>
</html> 
`,
output:`After executing Just refresh the website to see the onload effect`,
heading:`JavaScript program based on onLoad Event`
    },

    squares:{
        code:`
<!DOCTYPE html>
<html>
<head>
    <title>squares and cubes from 1 to 10</title>
</head>
<script>
    document.write("<p><center>The square and cubes of numbers from 1 to 10</center></p>")
    document.write('<table border="2" align="center" bgcolor="gray">');
    document.write('<th>Numbers</th><th>Squares</th><th>Cubes</th>')
    for(var i=0;i<=10;i++){
        document.write("<tr><td>"+i+"</td><td>"+i**2+"</td><td>"+i**3+"</td></tr>")
    }
    document.write("</table>")
</script>
</html> 
`,
output:`We get the squares and cubes from 1 to 10 in a table format`,
heading:`squares and cubes from 1 to 10 using js`
    },

    textformat:{
        code:`<!DOCTYPE html>
<html lang="en">
<head>
<title>Document</title>
</head>
<body>
<p>This is <b>bold text</b></p>
<p>This is <strong>strongly import text</strong></p>
<p>This is <i>italic text</i></p>
<p>This is <em>emphasized text</em></p>
<p>This is <mark>highlighted text</mark></p>
<p>This is <code>computer code</code></p>
<p>This is <small>smaller text</small></p>
<p>This is <sub>subscript</sub> and <sup>superscript</sup></p>
<p>This is <del>deleted text</del></p>
<p>This is <ins>inserted text</ins></p>
<p>This is <b>bold text</b></p>
</body>
</html>
`,
output:<div><p>This is <b>bold text</b></p>
<p>This is <strong>strongly import text</strong></p>
<p>This is <i>italic text</i></p>
<p>This is <em>emphasized text</em></p>
<p>This is <mark>highlighted text</mark></p>
<p>This is <code>computer code</code></p>
<p>This is <small>smaller text</small></p>
<p>This is <sub>subscript</sub> and <sup>superscript</sup></p>
<p>This is <del>deleted text</del></p>
<p>This is <ins>inserted text</ins></p><p>This is <b>bold text</b></p></div>,
heading:`TEXT FORMATTING`
    },

    time:{
        code:`<!DOCTYPE html>
<html lang="en">
<head>
<title>time</title>
</head>
<body onload="getcurrenttime()">
<h1>The current time is:</h1>
<div id="time"></div>
</body>
<script>
    function getcurrenttime(){
        var presenttime = new Date()
        document.getElementById("time").innerHTML = presenttime;
    }
</script>
</html>
`,
output:<div><button style={timebtn} onClick={getcurrenttimeintervel}>Click here to see output</button>
<h1>The current time is:</h1>
<div id="time"></div></div>,
heading:`Current Time and date using JavaScript`
    },

togglemenu:{
code:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
    #home{
        width: 100vw;
        height: 5vh;
        background-color: rgb(229, 150, 150);
        color: white;
    }
    #subnav{
        width: 100vw;
        height: 5vh;
        background-color: aqua;
        color: white;
        display: block;
    }
    a{
        text-decoration: none;
        color: #000;
        font-size: 25px;
    }
</style>
</head>
<body>
<div id="home">
    <a href="#" onclick="myfun()">menu</a>
</div>
<div id="subnav"> 
    <a href="#">home</a>
    <a href="#">Contact</a>
    <a href="#">Programs</a>
</div>
<script>
    function myfun(){
        let x = document.getElementById("subnav");
        if (x.style.display === "block"){
            x.style.display = "none";
        }
        else{
            x.style.display = "block";
        }
    }
</script>
</body>
</html>   
`,
output:`We Get a Toggle Menu after executing the above code`,
heading:`Mobile Toggle Navigation Menu Using HTML,CSS and JAVASCRIPT`
},

variabledec:{
code:`
<!DOCTYPE html>
<html>
<head>
    <title>JS Variable declaration</title>
</head>
<body>
    <script>
        //declaring multiple variables 
        var a=10,b=20,c=30;
        //declaring single variable
        var d=40;
        document.write(a,"<br>")
        document.write(b,"<br>")
        document.write(c,"<br>")
        document.write(d,"<br>")
    </script>
</body>
</html>
`,
output:`10
20
30
40`,
heading:`Variable Declaration in JavaScript`
},

x5intable:{
code:`
<!DOCTYPE html>
<html lang="en">
<head>
<title>superscripts</title>
</head>
<body>
<script>
    document.write("<p><center>The x <sup>5</sup>  x <sup>6</sup></center></p>")
    document.write('<table border="2" align="center">')
    document.write("<th>Numbers</th><th>x <sup>5</sup></th><th>x <sup>6</sup></th>")
    for(var i=1;i<=5;i++){
        document.write("<tr><td>"+i+"</td><td>"+i**5+"</td><td>"+i**6+"</td></tr>");
    }
    document.write("</table>")
</script>
</body>
</html> 
`,
output: <p>We get the X<sup>5</sup>& X <sup>6</sup> in table format</p>,
heading:<p>X<sup>5</sup>& X <sup>6</sup> in table format</p>
},
}


//DSP content

const DspContentObj ={
    dspAbstraction:{
        code:`
    from abc import ABC, abstractmethod
    class Polygon(ABC):
        @abstractmethod
        def noofsides(self):
            pass
        
    class Triangle(Polygon):  
        def noofsides(self):
            print("I have 3 sides")
        
    class Pentagon(Polygon):
        def noofsides(self):
            print("I have 5 sides")
        
    class Hexagon(Polygon):
        def noofsides(self):
            print("I have 6 sides")
        
    class Quadrilateral(Polygon):
        def noofsides(self):
            print("I have 4 sides")
        
    R = Triangle()
    R.noofsides()   
    K = Quadrilateral()
    K.noofsides()
    R = Pentagon()
    R.noofsides()   
    K = Hexagon()
    K.noofsides() 
          `,
          Output:`I am Triangle & I have 3 sides
    I am Quadrilateral & I have 4 sides
    I am Pentagon & I have 5 sides
    I am Hexagon & I have 6 sides `,
    heading:`Abstraction Program Using Python`
    },
    
    dspBfs:{
        code:`
    def bfs(graph, start):
        visited = []
        queue = [start]
        while queue:
            vertex = queue.pop(0)
            if vertex not in visited:
                print(vertex)
                visited.append(vertex)
                queue.extend(graph[vertex] - set(visited))
        return visited
    
    graph = {'A': set(['B', 'C']),
                'B': set(['A', 'D', 'E']),
                'C': set(['A', 'F']),
                'D': set(['B']),
                'E': set(['B', 'F']),
                'F': set(['C', 'E'])}
    start = 'A'
    bfs(graph, start)
          `,
          ouput:`A
    B
    C
    E
    D
    F`,
          heading:`Breadth First Search`
    },
    
      dspBinarySearch:{
    code:`def binary_search(arr,x):
        low = 0
        high = len(arr)-1
        mid = 0
        while low<=high:
            mid = (low + high)//2
            if arr[mid]<x:
                low = mid + 1
            elif arr[mid]>x:
                high = mid - 1 
            else:
                return mid
        return -1
    arr = [10,20,30,40,50]
    x = int(input("enter the number to check :"))
    index = binary_search(arr,x)
    if index==-1:
        print(f"{x} element not found")
    else:
        print(f"{x} element is found at index {index}")` ,
        output:`enter the number to check :40
    40 element is found at index 3` ,
        heading:`Binary Search Program Using Python`
      },
    
      dspBubbleSort:{
        code: `
    a=[]
    num = int(input("enter the number of elements :"))
    for i in range(num):
        value= int(input(f"enter the {i} item :"))
        a.append(value)
    print(a)
    for i in range(len(a)-1):
        for j in range(len(a)-i-1):
            if a[j]>a[j+1]:
                temp = a[j]
                a[j]=a[j+1]
                a[j+1]=temp
    print("Sorted List : ",a)`,
        output: `enter the number of elements :5
    enter the 0 item :36
    enter the 1 item :25
    enter the 2 item :12
    enter the 3 item :94
    enter the 4 item :5
    [36, 25, 12, 94, 5]
    Sorted List :  [5, 12, 25, 36, 94]`,
        heading:`BubbleSort Program Using Python`
      },
    
      dspDeletionDll:{
        code:`
    class Node:
        def __init__(self,data):
            self.data = data
            self.next = None
            self.prev = None
            
    class doublelinkedlist:
        def __init__(self):
            self.head = None
    
        #method to add node at ending
        def push(self,data):
            new_node = Node(data)
            n = self.head
            if n is None:
                self.head = new_node
            else:
                while n.next is not None:
                    n = n.next
                n.next = new_node
                new_node.prev = n
                
        #method to remove node at beginning
        def delete_begin(self):
            if self.head == None:
                print("Dll is empty")
            else:
                self.head = self.head.next
                self.head.prev = None
            
        #method to remove node at ending
        def delete_end(self):
            n = self.head
            while n.next is not None:
                n = n.next
            n.prev.next = None
        
        #method to remove node at specified location
        def delete_inbt(self,x):
            n = self.head
            while n.next is not None:
                if n.data == x:
                    break
                n = n.next
            if n.next is not None:
                n.next.prev = n.prev
                n.prev.next = n.next
            else:
                if n.data == x:
                    n.prev.next = None
                else:
                    print("Node not found")
    
        #method to print the doublelinkedlist
        def display(self):
            if self.head == None:
                print('double linked list is empty')
            else:
                n= self.head
                while n is not None:
                    print(n.data,"-->",end="")
                    n = n.next
    dll1 = doublelinkedlist()
    dll1.push(10)
    dll1.push(20)
    dll1.push(30)
    dll1.push(40)
    dll1.push(50)
    dll1.display()
    dll1.delete_begin()
    print("             ")
    print("Node at beginning is removed!")
    dll1.display()
    dll1.delete_end()
    print("             ")
    print("Node at ending is removed!")
    dll1.display()
    dll1.delete_inbt(30)
    print("             ")
    print("specified Node is removed!")
    dll1.display()` ,
        output:`10 -->20 -->30 -->40 -->50 -->
    
    Node at beginning is removed!
    20 -->30 -->40 -->50 -->
        
    Node at ending is removed!
    20 -->30 -->40 -->
        
    specified Node is removed!
    20 -->40 -->` ,
        heading:`Deletion Methods in Double Linked List`
      },
    
      dspDeletionSll:{
        code: `
    class Node:
        def __init__(self,data):
            self.data = data
            self.next = None
            self.prev = None
            
    class doublelinkedlist:
        def __init__(self):
            self.head = None
    
        #method to add node at ending
        def push(self,data):
            new_node = Node(data)
            n = self.head
            if n is None:
                self.head = new_node
            else:
                while n.next is not None:
                    n = n.next
                n.next = new_node
                new_node.prev = n
                
        #method to remove node at beginning
        def delete_begin(self):
            if self.head == None:
                print("Dll is empty")
            else:
                self.head = self.head.next
                self.head.prev = None
            
        #method to remove node at ending
        def delete_end(self):
            n = self.head
            while n.next is not None:
                n = n.next
            n.prev.next = None
    
        #method to remove node at specified location
        def delete_inbt(self,x):
            n = self.head
            while n.next is not None:
                if n.data == x:
                    break
                n = n.next
            if n.next is not None:
                n.next.prev = n.prev
                n.prev.next = n.next
            else:
                if n.data == x:
                    n.prev.next = None
                else:
                    print("Node not found")
    
        #method to print the doublelinkedlist
        def display(self):
            if self.head == None:
                print('double linked list is empty')
            else:
                n= self.head
                while n is not None:
                    print(n.data,"-->",end="")
                    n = n.next
    dll1 = doublelinkedlist()
    dll1.push(10)
    dll1.push(20)
    dll1.push(30)
    dll1.push(40)
    dll1.push(50)
    dll1.display()
    dll1.delete_begin()
    print("         ")
    print("Node at beginning is removed!")
    dll1.display()
    dll1.delete_end()
    print("         ")
    print("Node at ending is removed!")
    dll1.display()
    dll1.delete_inbt(30)
    print("         ")
    print("specified Node is removed!")
    dll1.display()`,
        output: `10 -->20 -->30 -->40 -->50 -->
    
    Node at beginning is removed!
    20 -->30 -->40 -->50 -->
        
    Node at ending is removed!
    20 -->30 -->40 -->
        
    specified Node is removed!
    20 -->40 -->`,
        heading:`Deletion Methods in Single Linked List`
      },
    
      dspDfs:{
        code:`
    def dfs(graph, start, visited=[]):
        if start not in visited:
            print(start)
            visited.append(start)
            for neighbour in graph[start]:
                dfs(graph, neighbour, visited)
        return visited
      
    graph = {'A': ['B', 'C'],
            'B': ['D', 'E'],
            'C': ['F'],
            'D': [],
            'E': ['F'],
            'F': []}
    start = 'A'
    dfs(graph, start)` ,
        output:`
    A
    B
    D
    E
    F
    C` ,
        heading:`Depth First Search`
      },
    
      dspInsertionDll:{
        code: `
    class Node:
        def __init__(self,data):
            self.data = data
            self.next = None
            self.prev = None
            
    class doublelinkedlist:
        def __init__(self):
            self.head = None
        
        #method to add node at beginning
        def add_begin(self,data):
            new_node = Node(data)
            if self.head is None:
                self.head = new_node
            else:
                new_node.next = self.head
                self.head.prev = new_node
                self.head = new_node
                
        #method to add node at ending
        def add_end(self,data):
            new_node = Node(data)
            n = self.head
            while n.next is not None:
                n = n.next
            n.next = new_node
            new_node.prev = n
        
        #method to add node at specified location
        def add_inbt(self,x,data):
            new_node = Node(data)
            n = self.head
            while n.next is not None:
                if n.data == x:
                    break
                n = n.next
            if n.next is None:
                print('Node is not found')
            else:
                new_node.next = n.next
                new_node.prev = n
                n.next.prev = new_node
                n.next = new_node  
    
        #method to print the doublelinkedlist
        def display(self):
            if self.head == None:
                print('double linked list is empty')
            else:
                n= self.head
                while n is not None:
                    print(n.data,"-->",end="")
                    n = n.next
    dll1 = doublelinkedlist()
    dll1.add_begin(10)
    dll1.add_begin(5)
    dll1.display()
    dll1.add_end(20)
    dll1.add_end(30)
    print("         ")
    dll1.display()
    dll1.add_inbt(10,15)
    dll1.add_inbt(20,25)
    print("         ")
    dll1.display()    
    `,
        output:`5 -->10 -->
    
    5 -->10 -->20 -->30 -->
        
    5 -->10 -->15 -->20 -->25 -->30 -->` ,
        heading:`Insertion Methods in Double Linked List`
      },
    
      dspInsertionSll:{
        code:`
    class Node:
        def __init__(self,data):
            self.data = data
            self.next = None
    class singlelinkedlist:
        def __init__(self):
            self.head = None
      
        #Method to add at begin 
        def add_begin(self,data):
            new_node = Node(data)
            if self.head == None:
                self.head = new_node
            else:
                new_node.next = self.head
                self.head = new_node
      
        #Method to add at end
        def add_end(self,data):
            new_node = Node(data)
            n = self.head
            while n.next is not None:
                n = n.next
            n.next = new_node
      
        #Method to add in_between
        def in_bt(self,x,data):
            new_node = Node(data)
            n = self.head
            while n.next is not None:
                if n.data == x:
                    break
                n = n.next
            if n.next is None:
                print("node not found")
            else:
                new_node.next = n.next
                n.next = new_node
      
        #Method to display singlelinkedlist
        def display(self):
            n = self.head
            if self.head == None:
                print("SSL is empty")
            else:
                while n is not None:
                    print(n.data,"-->",end="")
                    n = n.next
            
    s1 = singlelinkedlist()
    s1.add_begin(10)
    s1.add_begin(5)
    s1.add_end(20)
    s1.add_end(30)
    s1.in_bt(10,15)
    s1.in_bt(20,25)
    s1.display()
        ` ,
        output: `singlelinkedlist :
    5 -->10 -->15 -->20 -->25 -->30 -->`,
        heading:`insertion Methods in Single Linked List`
      },
    
      dspLinearSearch:{
        code:`
    def linear_search(list,x):
        for i in range(0,len(list)):
          if list[i]==x:
              return i
        return -1     
      
    list = input("enter the value to list :").split(" ")
    list1 = [int(i) for i in list]
    print(list1)
    x = int(input("enter th element to search : "))
    index = linear_search(list1,x)
    
    if index == -1:
        print(f"{x} element not found")
    else:
        print(f"{x} element found at index {index}")
        ` ,
        output:`enter the value to list :20 52 6 5 10
    [20, 52, 6, 5, 10]
    enter the element to search : 5
    5 element found at index 3` ,
        heading:`Linear Search Program Using Python`
      },
    
      dspMergeSort:{
        code:`
    def mergeSort(list1):
        if len(list1)>1:
            mid = len(list1)//2
            left_arr=list1[:mid]
            right_arr=list1[mid:]
            mergeSort(left_arr)
            mergeSort(right_arr)
            i = 0
            j = 0
            k = 0
            while i<len(left_arr) and j<len(right_arr):
                if left_arr[i]<right_arr[j]:
                    list1[k]=left_arr[i]
                    i+=1
                    k+=1
                else:
                    list1[k]=right_arr[j]
                    j+=1
                    k+=1
            while i<len(left_arr):
                        list1[k]=left_arr[i]
                        i+=1
                        k+=1
            while j<len(right_arr):
                        list1[k]=right_arr[j]
                        j+=1
                        k+=1
                 
    lstsize = int(input("Enter the size of list :"))
    list1 = [int(input()) for x in range(lstsize)]
    mergeSort(list1)
    print("Sorted List :",list1)` ,
        output:`Enter the size of list :5
    49
    18
    26
    16
    63
    Sorted List : [16, 18, 26, 49, 63]` ,
        heading:`MergeSort using python`
      },
    
      dspPalindrome:{
        code:`
    def is_palindrome(word):
        return word == word[::-1]
      
    word = input("Enter a word: ")
    if is_palindrome(word):
        print(f'{word} is a palindrome')
    else:
        print(f'{word} is not a palindrome')
    ` ,
        output:`Enter a word: MADAM
    MADAM is a palindrome` ,
        heading:`Python program to check palindrome`
      },
    
      dspQueue:{
        code:`
    queue = []
    def enqueue():
        element = int(input("Enter the value to queue :"))
        queue.append(element)
        print(element,"element added")
    def dequeue():
        queue.pop(0)
        print("first element is removed")
    def display():
        print("total queue :",queue)
    enqueue()
    enqueue()
    enqueue()
    display()
    dequeue()
    display()
    ` ,
        output:`Enter the value to queue :10
    10 element added
    Enter the value to queue :20
    20 element added
    Enter the value to queue :30
    30 element added
    total queue : [10, 20, 30]
    first element is removed
    total queue : [20, 30]` ,
        heading:`Queue Program using Python`
      },
    
      dspSelectionSort:{
        code:`
    def selection_sort(array):
        length = len(array)
        for i in range(length-1):
            minIndex = i
            for j in range(i+1, length):
                if array[j]<array[minIndex]:
                    minIndex = j
            array[i], array[minIndex] = array[minIndex], array[i]
        return array
      
    alist = input("Enter the list of numbers : ").split()
    alist = [int(x) for x in alist]
    print("The sorted array is: ",selection_sort(alist))    
    ` ,
        output:`Enter the list of numbers : 14 25 62 35 19 8
    The sorted array is:  [8, 14, 19, 25, 35, 62]` ,
        heading:`SelectionSort Program Using Python`
      },
    
      dspStack:{
        code:`
    stk = []
    def push():
        element = int(input("Enter the value to push :"))
        stk.append(element)
        print(element,"element added!")
    def pop():
        if stk==0:
            print("stack underflow")
        else:
            stk.pop()
            print("element is poped")            
    def display():
        print("Total stack : ",stk)
    
    push()
    push()
    push()
    display()
    pop()
    display()    
    ` ,
        output:`Enter the value to push :10
    10 element added!
    Enter the value to push :20
    20 element added!
    Enter the value to push :30
    30 element added!
    Total stack :  [10, 20, 30]
    element is poped
    Total stack :  [10, 20]` ,
        heading:`Stack Program using Python`
      },
    
      dspStuBubbleSort:{
        code:`
    class Student:
        def __init__(self, roll_number, marks):
            self.roll_number = roll_number
            self.marks = marks
    
    # Create a list of 5 students
    students = [
        Student("2111cs020050", [90, 95, 80, 77, 95,90, 95, 80, 77, 95]),
        Student("2111cs020051", [81, 80, 90, 85, 95,90, 95, 80, 77, 95]),
        Student("2111cs020052", [56, 85, 90, 85, 95,90, 95, 80, 77, 95]),
        Student("2111cs020053", [90, 96, 98, 90, 85,90, 95, 80, 77, 95]),
        Student("2111cs020054", [66, 56, 85, 95, 90,90, 95, 80, 77, 95]),
    ]
    
    # Use bubble sort to sort the students in descending order of total marks
    for i in range(len(students) - 1):
        for j in range(len(students) - 1 - i):
            if sum(students[j].marks) < sum(students[j + 1].marks):
                students[j], students[j + 1] = students[j + 1], students[j]
    
    # Print the top 3 students
    for i in range(3):
        print(f"Top {i+1} => Roll number: {students[i].roll_number}, Marks: {students[i].marks}")` ,
        output:`Top 1 => Roll number: 2111cs020053, Marks: [90, 96, 98, 90, 85, 90, 95, 80, 77, 95]
    Top 2 => Roll number: 2111cs020050, Marks: [90, 95, 80, 77, 95, 90, 95, 80, 77, 95]
    Top 3 => Roll number: 2111cs020051, Marks: [81, 80, 90, 85, 95, 90, 95, 80, 77, 95]` ,
        heading:`Class contains 5 students who aquired marks in 5 subjects.Write a program to display their rollnumber and marks in sorted order by using Bubble Sort .`
      },
    
      dspWordCount:{
        code: `
    def word_count(words):
        word_list = words.split()
        word_counts = {}
        for word in word_list:
            if word in word_counts:
                word_counts[word] += 1
            else:
                word_counts[word] = 1
        return word_counts
      
    words = input("Enter a list of words, separated by whitespace: ")
    print(word_count(words))`,
        output:`Enter a list of words, separated by whitespace: pencil is pencil and color is black
    {'pencil': 2, 'is': 2, 'and': 1, 'color': 1, 'black': 1}` ,
        heading:`Python program that inputs a list of words,seperated by whitespace and outputs show many times each word appears in the list`
      },
    
      dspTreeOrder:{
        code:`
    class Node:
        def __init__(self,key):
            self.val = key
            self.right = None
            self.left = None
    #inorder 
    def printinorder(root):
        if root:
            printinorder(root.left)
            print(root.val,end="")
            printinorder(root.right)
    #preorder
    def printpreorder(root):
        if root:
            print(root.val,end="")
            printpreorder(root.left)
            printpreorder(root.right)
    #postorder
    def printpostorder(root):
        if root:
            printpostorder(root.left)
            printpostorder(root.right)
            print(root.val,end="")
            
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.left.right = Node(5)
    print("                ")
    print("inorder")
    printinorder(root)
    print("                ")
    print("preorder")
    printpreorder(root)
    print("                ")
    print("postorder")
    printpostorder(root)
    print("            ")
    ` ,
        output:`Inorder
    42513
    Preorder
    12453
    Postorder
    45231` ,
        heading:`Tree InOrder, PreOrder, PostOrder`
      }
    
    }
      

    //java content
    const JavaContentObj={
        javaabstactclass:{
        code: `
        //Java file name should be AbstractDemo.java
        import java.util.*;
        
        abstract class shape {
            int x, y;
            abstract void area(double x,double y);
        }
        
        class Rectangle extends shape {
            void area(double x, double y) {
                System.out.println("Area of rectangle is :" + (x*y));
            }
        }
        
        class Circle extends shape {
            void area(double x,double y)
            {
                System.out.println("Area of circle is :" +(3.14*x*x));
            }
        }
        
        class Triangle extends shape {
            void area(double x, double y) {
                System.out.println("Area of triangle is :" + (0.5 * x * y));
            }
        }
        
        public class AbstractDemo
        {
            public static void main(String[] args)
            {
                Rectangle r=new Rectangle();
                r.area(2,5);
                Circle c=new Circle();
                c.area(5,5);
                Triangle t=new Triangle();
                t.area(2,5);
            }
        }
        `,
        output: `
        Area of rectangle is :10.0
        Area of circle is :78.5
        Area of triangle is :5.0`,
        heading:`Java program to create an abstract class named shape that contains two integers and an empty method named print Area(). Provide three classes named Rectangle, Triangle and Circle such that classes contain only the method print Area() that prints the area of the given shape.`
        },
        
        javaaoabstract:{
        code: `
        //Java file name should be abstarction.java
        abstract class arithmetic_operation {
        abstract void printInfo();
        }
        
        class add extends arithmetic_operation {
        void printInfo() {
            {
                int a = 8;
                int b = 4;
                System.out.println(a+b);
            }
        }
        }
        
        class sub extends arithmetic_operation {
        void printInfo()
        {
            int c = 12;
            int d = 2;
            System.out.println(c-d);
        }
        }
        
        class abstraction {
        public static void main(String args[]) {
            arithmetic_operation al = new add();
            al.printInfo();
            arithmetic_operation bl = new sub();
            bl.printInfo();
        }
        }`,
        output:`10
        12` ,
        heading:`Java program to display method print the addition and subtraction by using abstract`
        },
        
        javaArithmetic:{
        code:`
        public class arithmetic{
            public static void main(String arg[]){
            int a = 20;
            int b = 30;
            int sum = a+b;
            int sub = a-b;
            int mul = a*b;
            int div = a/b;
            int mod = a%b;
            System.out.println("Sum :"+sum);
            System.out.println("Subtraction :"+sub);
            System.out.println("Multiplication :"+mul);
            System.out.println("Divide :"+div);
            System.out.println("Modulus :"+mod);
            }
            }` ,
        output: `
        Sum :50
        Subtraction :-10
        Multiplication :600
        Divide :0
        Modulus :20`,
        heading:`Java Program to perform the arithemetic functions`
        },
        
        javadefaultmethods:{
        code:`
        //Java file name should be Main.java
        interface Polygon
        {
            void getArea();
            default void getSides()
            {
                System.out.println("I can get sides of a polygon");
            }
        }
        class Rectangle implements Polygon{
            public void getArea() {
                int length = 6;
                int breadth = 5;
                int area = length *breadth;
                System.out.println("the area of the rectangle is "+area);
                
            }
            public void getSides() {
                System.out.println("I have 4 sides.");
            }
        }
        class Square implements Polygon{
            public void getArea() {
                int length = 5;
                int area = length * length;
                System.out.println("The area of the square is "+area);
                
            }
        }
        
        public class Main {
            public static void main(String args[]) {
                Rectangle r1=new Rectangle();
                r1.getArea();
                r1.getSides();
                Square s1=new Square();
                s1.getArea();
                s1.getSides();
                
            }
        }` ,
        output: `the area of the rectangle is 30
        I have 4 sides.
        The area of the square is 25
        I can get sides of a polygon`,
        heading:`Java Program to print default methods in java interface`
        },
        
        javaexcepttest:{
        code: `
        class ExceptionTest {
            public static void main(String[] args) {
                    int a = 40, b = 4, c = 4;
                    int result;
                    try {
                        result = a / (b - c);
                    } catch (ArithmeticException ae) {
                        System.out.println("Cannot divided by zero." + ae);
                    } finally {
                        System.out.println("finally block");
                    }
            
                    result = a / (b + c);
                    System.out.println("Result: " + result);
                }
            }`,
        output: `Cannot divided by zero.java.lang.ArithmeticException: / by zero
        finally block
        Result: 5`,
        heading:`Write a java program to implement exception handling with finally block`
        },
        
        javafabonacci:{
        code:`
        import java.util.Scanner;
        
        public class fibo {
            public static void main(String args[]) {
                System.out.println("Enter Range Of Series : ");
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int f0,f1,f2=0;
                f0=0;
                f1=1;
                f2=f0+f1;
                System.out.println("Fibonacci Series : ");
                while (n>=f2) {
                    System.out.print(f2+" ");
                    f0=f1;
                    f1=f2;
                    f2=f0+f1;;
                }
            }
        }` ,
        output: `Enter Range Of Series : 
        10
        Fibonacci Series : 
        1 2 3 5 8 `,
        heading:`Java Program to display fabonacci series of numbers`
        }
        ,
        javainheritance:{
        code:`
        // The java file name should be HybridInheritance.java
        class A {
            int a=1;
        }
        
        class B extends A {
            int b=2;
        }
        
        class C extends B {
            int c=3,sum=a+b+c;
            public void display(){
                System.out.println("The value of a is "+a);
                System.out.println("The value of b is "+b);
                System.out.println("The value of c is "+c);
                System.out.println("The sum of a,b and c is "+sum);
            }
        }
        
        class D extends B {
            int d=4,sum=a+b+d;
            public void display(){
                System.out.println("The value of a is "+a);
                System.out.println("The value of b is "+b);
                System.out.println("The value of d is "+d);
                System.out.println("The sum of a,b and d is "+sum);
            }
        }
        
        public class HybridInheritance {
            public static void main(String[] args) {
                C c1=new C();
                c1.display();
                System.out.println();
                D d1 = new D();
                d1.display();
            }
        }` ,
        output: `The value of a is 1
        The value of b is 2
        The value of c is 3
        The sum of a,b and c is 6
        
        The value of a is 1
        The value of b is 2
        The value of d is 4
        The sum of a,b and d is 7`,
        heading:`Java Program to implement hybrid Inheritance using multiple and hierarchical inheritance`
        }
        ,
        javafinalclass:{
        code: `
        //Java file name should be FinalUse.java
        import java.util.Scanner;
        
        class Figure 
        {
            final int length = 5;
            final int bredth = 4;
            final void area()
            {
            int a = length * bredth;
            System.out.println("Area:"+a);
            }
        }
        
        class Rectangle extends Figure 
        {
            final void rect() 
            {
                System.out.println("This is rectangle");
            }
        }
        
        final public class FinalUse extends Rectangle 
        {
            public static void main(String[] args)
            {
                FinalUse obj = new FinalUse();
                obj.rect();
                obj.area();
            }
        }`,
        output:`
        This is rectangle
        Area:20` ,
        heading:`Java program to implement Final class in java`
        },
        
        javainnerclass:{
        code: `
        //Java file name should be Innerclassdemo.java
        class Outer{
            public void display(int x, int y) {
                class Inner{
                    public void add(int x,int y) {
                        int z = x+y;
                        System.out.println("Addition = "+z);
        
                    }
                }
                Inner in=new Inner();
                in.add(x,y);
            }
        }
        public class Innerclassdemo {
            public static void main(String args[]) {
                Outer ob = new Outer();
                ob.display(23,56);        
            }
        }`,
        output: `Addition = 79`,
        heading:`Java Program to demostrate inner class`
        },
        
        javainterface:{
        code: `
        //Java file name should be multipleinheritance2.java
        interface Aiml{
            void read();
        }
        interface Datascience{
            void write();
        }
        class CSE implements Aiml,Datascience{
            public void read() {
                System.out.println("We are Belongs to AIML Students.");
            }
            public void write() {
                System.out.println("We are Belongs to DataScience Students.");
            }
        }
        public class multipleinheritance2 {
            public static void main(String args[]) {
                CSE s =new CSE();
                s.read();
                s.write();
            }
        }`,
        output:`We are Belongs to AIML Students.
        We are Belongs to DataScience Students.` ,
        heading:`Java Program to demonstrate interface concepts.(Implementation of multiple inheritance using interface)`
        },
        
        
        javamethodol:{
        code: `
        //Java file should be MethodOverloading.java
        public class MethodOverloading {
            static int sum(int a, int b) {
                int s = 0;
                s = a + b;
                return s;
            }
        
            static int sum(int a, int b, int c)
            {
                int s = 0;
                s = a + b + c;
                return s;
            }
        
            static int sum(int a, int b, int c, int d) {
                int s = 0;
                s = a + b + c + d;
                return s;
            }
        
            public static void main(String[] args) {
                int result = 0;
                result = sum(10, 20);
                System.out.println("Sum: " + result);
                result = sum(10, 20, 30);
                System.out.println("Sum: " + result);
                result = sum(10, 20, 30, 40);
                System.out.println("Sum: " + result);
            }
        }`,
        output:`Sum: 30
        Sum: 60
        Sum: 100` ,
        heading:`Java program to implement Method Overloading.`
        },
        
        javamethodor:{
        code: `
        //java file should be Student.java
        class Mruh {
            public void move() {
                System.out.println("We are belongs to MRUH Students");
            }
        }
        
        class Soe extends Mruh {
            public void move() {
                System.out.println("We are belongs to School of Engg. Students");
            }
        }
        
        class Aiml extends Soe {
                public void move() {
                    System.out.println("We are belongs to AIML Students");
        
                }
            }
        
        public class Student{
            public static void main(String args[]){
                Mruh a = new Mruh();
                Mruh b = new Soe();
                Mruh c = new Aiml();
                a.move();
                b.move();
                c.move();
            }
        }`,
        output:`
        We are belongs to MRUH Students
        We are belongs to School of Engg. Students
        We are belongs to AIML Students` ,
        heading:`Java program to implement Method Overriding.`
        },
        
        javamultilevelinher:{
        code:`
        //Java file name should be Tester.java
        class Shape{
            public void display() {
                System.out.println("Inside display");
                
            }
        }
        class Rectangle extends Shape{
            public void area(){
                System.out.println("Inside area");
            }
        }
        class Cube extends Rectangle{
            public void volume() {
                System.out.println("Inside volume");
                
            }
        }
        public class Tester {
            public static void main(String args[]) {
                Cube cube=new Cube();
                cube.display();
                cube.area();
                
            }
        }` ,
        output:`Inside display
        Inside area` ,
        heading:`Java Program for multilevel Inheritance`
        },
        
        javapalindrome:{
        code: `
        import java.util.Scanner;
        public class palin {
            public static void main(String args[]) {
                System.out.println("Enter the String:");
                Scanner sc = new Scanner(System.in);
                String str = sc.next();
                int i,j,length,count=0;
                length=str.length();
                for(i=0,j=length-1;i<length/2;i++,j--){
                    if (str.charAt(i)!=str.charAt(j)) {
                        count++;
                        break;
                    }
                }
                if (count>0) {
                    System.out.println("The Entered string "+str+" is not palindrome");
                } else {
                    System.out.println("The Entered string "+str+" is palindrome");
                    
                }
            }
        }`,
        output:`Enter the String:
        madam
        The Entered string madam is palindrome` ,
        heading:`Java Program to Find whether the given string is palindrome or not`
        },
        
        javastringtoken:{
        code: `
        //java file should be StringTokenizerprgm.java
        import java.util.StringTokenizer;
        import java.io.*;
        public class StringTokenizerprgm{
            public static void main(String args[])throws IOException
            {
                BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
                System.out.println("Enter Values string with $ delimiter");
                String in = br.readLine();
                int sum=0;
                StringTokenizer st= new StringTokenizer(in,"$");
                while(st.hasMoreTokens()){
                    int key = Integer.parseInt(st.nextToken());
                    sum +=key;
                    System.out.println(key);
                }
                System.out.println("sum is:"+sum);
            }
        }`,
        output: `Enter Values string with $ delimiter
        10$20$30
        10
        20
        30
        sum is:60 `,
        heading:`Java Program to implement String Tokenizer class`
        },
        
        javasuperkeyword:{
        code:`
        //Java file name should be TestSuper2.java
        class Animal {
            void eat() {
                System.out.println("Animal eating...");
            }
        }
        
        class Dog extends Animal {
            void eat() {
                System.out.println("Dog eating bread...");
            }
            void bark() {
                System.out.println("Dog barking...");
            }
            void work() {
                super.eat();
                bark();
            }
        }
        
        class TestSuper2 {
            public static void main(String args[]) {
                Dog d = new Dog();
                d.work();
            }
        }` ,
        output: `Animal eating...
        Dog barking...`,
        heading:`Java program to implement super keyword in java`
        },
        
        javathrowkey:{
        code:`
        import java.util.Scanner;
        
        public class DivideExceptionThrows {
            public static void main(String[] args) {
                Scanner inputDevice = new Scanner(System.in);
                System.out.print("Please enter first number(numerator): ");
                int numerator = inputDevice.nextInt();
                System.out.print("Please enter second number(denominator): ");
                int denominator = inputDevice.nextInt();
        
                try {
                    new DivideExceptionThrows().doDivide(numerator, denominator);
                } catch (Exception e) {
                    System.out.println("Exception Condition Program is ending ");
                }
            }
        
            public void doDivide(int a, int b) throws Exception {
                float result = a / b;
                System.out.println("Division result of " + a + "/" + b + "=" + result);
            }
        }` ,
        output:`Input-1
        Please enter first number(numerator): 10
        Please enter second number(denominator): 0
        Exception Condition Program is ending 
        
        Input-2
        Please enter first number(numerator): 12
        Please enter second number(denominator): 6
        Division result of 12/6=2.0` ,
        heading:`Write a Java program that uses throws keyword in method declaration which will instruct the compiler to handle exception using try-catch block.`
        },
        javacollectionStack:{
            code: `import java.util.*;
            public class StackDemo {
                static void showpush(Stack st,int a){
                    st.push(new Integer(a));
                    System.out.println("push("+a+")");
                    System.out.println("stack:"+st);
                }
            
                static void showpop(Stack st) {
                    System.out.println("Pop =>");
                    Integer a = (Integer) st.pop();
                    System.out.println(a);
                    System.out.println("Stack : "+st);
                }
                public static void main(String[] args) {
                    Stack st = new Stack();
                    System.out.println("stack : "+st);
                    showpush(st,42);
                    showpush(st,66);
                    showpush(st,99);
                    showpop(st);
                    showpop(st);
                    showpop(st);
                    
                }
            }`,
            output:`stack : []
        push(42)
        stack:[42]push(66)
        stack:[42, 66]
        push(99)
        stack:[42, 66, 99]
        Pop =>
        99
        Stack : [42, 66]
        Pop =>
        66
        Stack : [42]
        Pop =>42
        Stack : []`,
            heading:`Implement stack program using java collection.`
        },
        
        javacollectionArrayList:{
        code:`import java.util.*;
        public class Collection {
            public static void main(String[] args) {
                ArrayList list_1 = new ArrayList<>();
                ArrayList<String> list_2 = new ArrayList<String>();
                list_1.add(10);
                list_1.add(20);
                list_2.add("Btech");
                list_2.add("Smart");
                list_2.add("class");
                list_1.addAll(list_2);
                System.out.println("Elements of list_1 :"+list_1);
                System.out.println("search for Btech :"+list_1.contains("Btech"));
                System.out.println("serach for list_2 in list_1 :"+list_1.contains(list_2));
                System.out.println("check whether list1 and list2 are equal : "+list_1.equals(list_2));
                System.out.println("check the list_1 empty : "+list_1.isEmpty());
                System.out.println("size of list_1 :"+list_1.size());
                System.out.println("Hashcode of list_1 :"+list_1.hashCode());
                list_1.remove(0);
                System.out.println(list_1);
                list_1.retainAll(list_2);
                System.out.println(list_1);
                list_1.removeAll(list_2);
                System.out.println(list_1);
                list_2.clear();
                System.out.println(list_2);
            }
        }`,
        output:`Elements of list_1 :[10, 20, Btech, Smart, class]
        search for Btech :true
        serach for list_2 in list_1 :false
        check whether list1 and list2 are equal : false
        check the list_1 empty : falsesize of list_1 :5
        Hashcode of list_1 :181129180
        [20, Btech, Smart, class]
        [Btech, Smart, class]
        []
        []`,
        heading:`Implement ArrayList program using Collection Class`
        },
        javaByteStreamDemo:{
            code:`import java.io.*;
            import java.util.*;
            public class ByteStreamDemo {
                public static void main(String[] args) throws Exception{
                    String str,str1;
                    Scanner in = new Scanner(System.in);
                    System.out.println("Enter the filename to read the data :");
                    str = in.next();
                    System.out.println("Enter the filename to write the data :");
                    str1 = in.next();
                    FileInputStream fis = new FileInputStream(str);
                    FileOutputStream fos = new FileOutputStream(str1);
                    try{
                        int x;
                        while ((x=fis.read())!=-1)
                            fos.write(x);
                        System.out.println("Data written into file...!");
                        
                    }
                    catch(Exception e){
                        System.out.println(e);
                    }
                    finally{
                        fis.close();
                        fos.close();
                    }
            
                }
            }`,
            output:`Enter the filename to read the data
        ByteStreamDemo.java
        Enter the filename to write the data
        bytestream.txt
        Data is written into file`,
            heading:`Write a program using byteStream`
        },
        javaFileDemo:{
            code:`import java.util.*;
            import java.io.*;
            public class FileDemo {
                public static void main(String[] args) {
                    String s =args[0];
                    File f=new File(s);
                    if(f.exists()){
                        System.out.println("File Exists ");
                        System.out.println("File name: "+f.getName());
                        System.out.println("path : "+f.getPath());
                        System.out.println("Absolute path : "+f.getAbsolutePath());
                        System.out.println("File is readable : "+f.canRead());
                        System.out.println("File is writeable : "+f.canWrite());
                        System.out.println("File length :"+f.length());
                    }
                    else{
                        System.out.println("file doesnot exsist");
                    }
                }
            }`,
            output:`File Exists
        Filename:filedemo.txt
        path:filedemo.txt
        Absolute path:D:Apha49filedemo.txt
        File is readable:true
        File is writeable:true
        File length:36`,
            heading:`write a program using File class`
        },
        javaCharacterStreamDemo:{
            code:`import java.io.*;
            import java.util.*;
            public class CharacterStreamDemo {
                public static void main(String[] args) {
                    Scanner in = new Scanner(System.in);
                    String strread,strwrite;
                    System.out.println("Enter the filename to read :");
                    strread = in.next();
                    System.out.println("Enter the filename to write :");
                    strwrite = in.next();
                    FileReader fr = new FileReader(strread);
                    FileWriter fw = new FileWriter(strwrite);
                    try{
                        int x;
                        while ((x=fr.read()!=-1))
                            fw.write(x);
                        System.out.println("data written into file..!!");
                    }                
                    catch(Exception e){
                        System.out.println(e);
                    }
                    finally{
                        fr.close();
                        fw.close();
                    }
                }
            }`,
            output:`Enter the filename to read the data
        characterStreamDemo.java
        Enter the filename to write the data
        CDS.txt
        Data is written into file`,
            heading:`Write a program using CharacterStream Class`
        },
        javathrows:{
            code:`public class ThrowsDemo {
                public  void method1() throws NullPointerException{
                    System.out.println("Inside ThrowMethod 1");
                    throw new NullPointerException("Throw_Demo1");
                }
                public  void method2() throws ArithmeticException{
                    System.out.println("Inside ThrowMethod 2");
                    throw new ArithmeticException("throw_Demo2");
                }
                public static void main(String[] args) {
                    ThrowsDemo obj = new ThrowsDemo();
                    try{
                        obj.method1();
                    }
                    catch(Exception e){
                        System.out.println("Exception is: "+e);
                    }
                    try{
                        obj.method2();
                    }
                    catch(Exception e){
                        System.out.println("Exception is: "+e);
                    }
                }
            }
            `,
            output:`Inside ThrowMethod 1
        Exception is: java.lang.NullPointerException: Throw_Demo1
        Inside ThrowMethod 2
        Exception is: java.lang.ArithmeticException: throw_Demo2`,
        heading:`Write a java program to implement throwing exceptions.`,
        },
        javasquarethread:{
            code:`import java.util.Random;
            class SquareThread implements Runnable{
                int x;
                SquareThread(int x){
                    this.x = x;
                }
                public void run(){
                    System.out.println("Thread Name: SquareThread and square : "+(x*x));
                }
            }
            class CubeThread implements Runnable{
                int x;
                CubeThread(int x){
                    this.x = x;
                }
                public void run(){
                    System.out.println("Thread Name: CubeThread and square : "+(x*x*x));
                }
            }
            class RandomNumber implements Runnable{
                public void run(){
                    int num;
                    Random r = new Random();
                    try{
                        while(true){
                        num = r.nextInt(30);
                        System.out.println("Main Thread an Generated Number is :"+num);
                        Thread t2 = new Thread(new SquareThread(num));
                        t2.start();
                        Thread t3 = new Thread(new CubeThread(num));
                        t3.start();
                        Thread.sleep(1000);
                        }
                    }
                    catch(Exception e){
                        System.out.println("Interrupted Exceptionm");
                    }
                }
            }
            public class Main{
                public static void main(String[] args) {
                    RandomNumber rn = new RandomNumber();
                    Thread t1 = new Thread(rn);
                    t1.start();
                }
            }`,
            output:`Main Thread an Generated Number is :22
        Thread Name: SquareThread and square : 484
        Thread Name: CubeThread and square : 10648`,
        heading:`Write a Java program that implements a multi-thread application that has three threads. First thread generates- a random integer for every 1 second; second thread computes the square of the number and prints; third thread will print the value of cube of the number.`,
        
        },
        javathreads:{
         code:`class Thread1 extends Thread {
            public void run() {
                for (int i = 1; i <= 5; i++) {
                    System.out.println(i);
                }
            }
        }
        
        class Thread2 extends Thread {
            public void run() {
                for (int i = 6; i <= 10; i++) {
                    System.out.println(i);
                }
            }
        }
        
        class Thread3 extends Thread {
            public void run() {
                for (int i = 11; i <= 15; i++) {
                    System.out.println(i);
                }
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                Thread t1 = new Thread(new Thread1());
                Thread t2 = new Thread(new Thread2());
                Thread t3 = new Thread(new Thread3());
                t1.start();
                t2.start();
                t3.start();
            }
        }
        `,
        output:`1
        2
        3
        4
        5
        6
        7
        8
        9
        10
        11
        12
        13
        14
        15`,
        heading:`Write a Java program that implements a multi-thread application that has three threads.`,
        },
        javawordlinecount:{
            code:`import java.io.*;
        import java.util.Scanner;
        
        public class Prgm12 {
            public static void main(String[] args) throws IOException {
                Scanner in = new Scanner(System.in);
                System.out.println("Enter the file name :");    
                String str = in.next();
                FileReader fr = new FileReader(str);
                BufferedReader br= new BufferedReader(fr);
                int lineCount = 0;
                int wordCount = 0;
                int characterCount = 0;
                try{
                    String currentline = br.readLine();
                    while(currentline!=null){
                        lineCount++;
                        String[] words = currentline.split(" ");
                        wordCount += words.length;
                        for (String word : words)
                        {
                            characterCount+=word.length();
                        }
                        currentline = br.readLine();
                    }
                    System.out.println("Line Count : "+lineCount);
                System.out.println("Word Count : "+wordCount);
                System.out.println("Character Count : "+characterCount);
                }
                catch(Exception e){
                    System.out.println(e);
                }
                finally{
                    br.close();
                    in.close();
                }
            }
        }
            `,
            output:`Enter the file name :
        newfile.txt
        Line Count : 4
        Word Count : 20
        Character Count : 88`,
            heading:`Write a Java program to read the data from file and output the no.of lines,words and characters in file using FileReader and FileWriter `,
        },
        javamulticatchblocks:{
            code:`
            public class MultiCatchBlocks {
             public static void main(String[] args) {
                try{
                    int a = Integer.parseInt(args[0]);
                    int b = Integer.parseInt(args[1]);
                    int c = a/b;
                    System.out.println("result : "+c);
                }
                catch(ArithmeticException ae){
                    System.out.println("Enter second number except 0");
                }
                catch(ArrayIndexOutOfBoundsException ai){
                    System.out.println("Both numbers are required!");
                }
                catch(NumberFormatException ne){
                    System.out.println("Enter only integer");
                }
                finally{
                    System.out.println("Finally block");
                }
             }   
            }`,
            output:`INPUT-1
        java MultiCatchBlocks 10 0
        Enter second number except 0
        Finally block
        
        INPUT-2
        java MultiCatchBlocks 10 
        Both numbers are required!
        Finally block
        
        INPUT-3
        java MultiCatchBlocks 10 2.5
        Enter only integer
        Finally block
        
        INPUT-4
        java MultiCatchBlocks 10 2
        result : 5
        Finally block
        
        `,
            heading:`Write a java program to illustate multiple catch blocks using command line argument`,
        
        },
        javaBinarysearch3:{
            code:`
        public class BinarySearch{
            public static void BinarySerach(int arr[],int first,int last,int key){
                int mid = (first+last)/2;
                while(first<=last){
                    if (arr[mid]<key){
                        first = mid+1;
                    }else if(arr[mid]==key){
                        System.out.println("Element found at : "+mid);
                        break;
                    }else{
                        last = mid-1;
                    }
                    mid = (first+last)/2;
                }
                if(first>last){
                    System.out.println("Element not found");
                }
            }
            public static void main(String[] args) {
                int arr[]={2,5,8,10,63,87};
                int last =arr.length-1;
                int key = 63;
                BinarySerach(arr,0,last,key);
            }
        }`,
        heading:`Write a java program to find the number using binary search technique.`,
        output:`Element found at : 4`
        },
        javaAddmatrices4:{
            code:`
        import java.util.*;
        class Addmatrices {
            public static void main(String args[]) {
                int rows,columns;
                Scanner sc = new Scanner(System.in);
                System.out.println("Enter number of rows : ");
                rows = sc.nextInt();
                System.out.println("Enter number of columns : ");
                columns = sc.nextInt();
                int a[][] = new int[rows][columns];
                int b[][] = new int[rows][columns];
                int c[][] = new int[rows][columns];
        
                System.out.println("Enter the 1st matrix ");
                for(int i=0;i<rows;i++){
                    for(int j=0;j<columns;j++){
                        a[i][j]=sc.nextInt();
                    }
                }
                System.out.println("Enter the 2nd matrix ");
                for(int i=0;i<rows;i++){
                    for(int j=0;j<columns;j++){
                        b[i][j]=sc.nextInt();
                    }
                }
                for(int i=0;i<rows;i++){
                    for(int j=0;j<columns;j++){
                        c[i][j]=a[i][j]+b[i][j];
                    }
                }
                System.out.println("Final Matrix after Addition :");
                for(int i=0;i<rows;i++){
                    for(int j=0;j<columns;j++){
                        System.out.print(c[i][j]+ " ");
                    }
                    System.out.println();
                }
                sc.close();
            }
        }`,
        heading:`Write a java program to add two matrices.`,
        output:`Enter number of rows : 
        2
        Enter number of columns : 
        2
        Enter the 1st matrix 
        1
        1
        1
        1
        Enter the 2nd matrix 
        2
        2
        2
        2
        Final Matrix after Addition :
        3 3 
        3 3 `,
        },
        javaSortstrings5:{
            code:`
        import java.io.*;
        public class Program5 {
            public static void main(String[] args) throws IOException{
                BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
                System.out.println("Enter the no of Strings :");
                int no = Integer.parseInt(br.readLine());
                String str[]=new String[no],temp;
                System.out.println("Enter the "+no+" of Strings :");
                for (int i=0;i<no;i++){
                    str[i]=br.readLine();
                }
                System.out.println("Strings before Sorting");
                for(int i=0;i<no;i++){
                    System.out.println(str[i]);
                }
                for(int i=0;i<no;i++){
                    for(int j=0;j<no;j++){
                        if(str[i].compareTo(str[j])<0){
                            temp = str[i];
                            str[i] = str[j];
                            str[j] = temp;
                        }
                    }
                }
                System.out.println("Strings After Sorting");
                for(int i=0;i<no;i++){
                    System.out.println(str[i]);
                }
            }
        }
        `,
            heading:`Write a java program to sort the given list of strings.`,
            output:`Enter the no of Strings :
            4
            Enter the 4 of Strings :
            chad
            xavier
            akash
            bramhi
            Strings before Sorting
            chad
            xavier
            akash
            bramhi
            Strings After Sorting
            akash
            bramhi
            chad
            xavier`,
        },
        javaarthmeticpackage9:{
            code:`// save below code separately using Arthemtic.java
        package data;
        
        public class Arithmetic{
        public void add(int x,int y){
            System.out.println("Addition : "+(x+y));
        }
        public void subtract(int x,int y){
            System.out.println("Subtract : "+(x-y));
        }
        public void multiply(int x,int y){
            System.out.println("Mutliplication : "+(x*y));
        }
        public void divide(int x,int y){
            System.out.println("Division : "+(x/y));
        }
        public void modulus(int x,int y){
            System.out.println("Modulus : "+(x%y));
        }
        }
        
        //Below code save with different file name dataPacDemo.java
        import data.Arithmetic;
        
        public class DataPacDemo {
            public static void main(String[] args) {
            Arithmetic ar = new Arithmetic();
            ar.add(4,2);
            ar.subtract(4,2);
            ar.multiply(4,2);
            ar.divide(4,2);
            ar.modulus(4,2);
            }
        }
        
        `,
        heading:`Write a java program to create a user-defined package called “data” and perform arithmetic operations using packages.`,
        output:`For the execution refer the nested package program
        
        output:
        Addition : 6
        Subtract : 2
        Mutliplication : 8
        Division : 2
        Modulus : 0`
        },
        javaproducer15:{
            code:`
        import java.util.LinkedList;
        public class ProducerConsumer 
        {
            public static void main(String[] args) throws InterruptedException
            {
                // Object of a class that has both produce() and consume() methods
                final PC pc = new PC();
                // Create producer thread
                Thread t1 = new Thread(new Runnable() {
                    @Override
                    public void run()
                    {
                        try {
                            pc.produce();
                        }
                        catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                });
         
                // Create consumer thread
                Thread t2 = new Thread(new Runnable() {
                    @Override
                    public void run()
                    {
                        try {
                            pc.consume();
                        }
                        catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                });
                // Start both threads
                t1.start();
                t2.start();
                // t1 finishes before t2
                t1.join();
                t2.join();
            }
            // This class has a list, producer (adds items to list) and consumer (removes items).   
        public static class PC {
                // Create a list shared by producer and consumer Size of list is 2.
                LinkedList<Integer> list = new LinkedList<>();
                int capacity = 2;
                // Function called by producer thread
                public void produce() throws InterruptedException
                {
                    int value = 0;
                    while (true) {
                        synchronized (this)
                        {
                            // producer thread waits while list is full
                            while (list.size() == capacity)
                                wait();
                            System.out.println("Producer produced-" + value);
                            // to insert the jobs in the list
                            list.add(value++);
                            // notifies the consumer thread that
                            // now it can start consuming
                            notify();
                            // makes the working of program easier
                            // to  understand
                            Thread.sleep(1000);
                        }
                    }
                }
         
                // Function called by consumer thread
                public void consume() throws InterruptedException
                {
                    while (true) {
                        synchronized (this)
                        {
                            // consumer thread waits while list is empty
                            while (list.size() == 0)
                                wait();
                            // to retrieve the first job in the list
                            int val = list.removeFirst();
                            System.out.println("Consumer consumed-" + val);
                            // Wake up producer thread
                            notify();
                            // and sleep
                            Thread.sleep(1000);
                        }
                    }
                }
            }
        }`,
            heading:`Producer and consumer program using threads`,
            output:`Producer produce - 0
            Producer produce - 1
            consumer consumed -0
            consumer consumed -1`
        }
        
        
            }

//ai content
const AiContentObj={
    aiboxlinegame:{
    code: `from tkinter import *
import numpy as np
size_of_board = 600
number_of_dots = 6
symbol_size = (size_of_board / 3 - size_of_board / 8) / 2
symbol_thickness = 50
dot_color = '#7BC043'
player1_color = '#0492CF'
player1_color_light = '#FFA07A'
player2_color = '#EE4035'
player2_color_light = '#E6E6FA'
Green_color = '#7BC043'
dot_width = 0.25*size_of_board/number_of_dots
edge_width = 0.1*size_of_board/number_of_dots
distance_between_dots = size_of_board / (number_of_dots)
class Dots_and_Boxes():
    def __init__(self):
        self.window = Tk()
        self.window.title('Dots_and_Boxes')
        self.canvas = Canvas(self.window, width=size_of_board, height=size_of_board)
        self.canvas.pack()
        self.window.bind('<Button-1>', self.click)
        self.player1_starts = True
        self.refresh_board()
        self.play_again()
    def play_again(self):
        self.refresh_board()
        self.board_status = np.zeros(shape=(number_of_dots - 1, number_of_dots - 1))
        self.row_status = np.zeros(shape=(number_of_dots, number_of_dots - 1))
        self.col_status = np.zeros(shape=(number_of_dots - 1, number_of_dots))
        self.player1_starts = not self.player1_starts
        self.player1_turn = not self.player1_starts
        self.reset_board = False
        self.turntext_handle = []
        self.already_marked_boxes = []
        self.display_turn_text()
    def mainloop(self):
        self.window.mainloop()
    def is_grid_occupied(self, logical_position, type):
        r = logical_position[0]
        c = logical_position[1]
        occupied = True
        if type == 'row' and self.row_status[c][r] == 0:
            occupied = False
        if type == 'col' and self.col_status[c][r] == 0:
            occupied = False
        return occupied
    def convert_grid_to_logical_position(self, grid_position):
        grid_position = np.array(grid_position)
        position = (grid_position-distance_between_dots/4)//(distance_between_dots/2)
        type = False
        logical_position = []
        if position[1] % 2 == 0 and (position[0] - 1) % 2 == 0:
            r = int((position[0]-1)//2)
            c = int(position[1]//2)
            logical_position = [r, c]
            type = 'row'
        elif position[0] % 2 == 0 and (position[1] - 1) % 2 == 0:
            c = int((position[1] - 1) // 2)
            r = int(position[0] // 2)
            logical_position = [r, c]
            type = 'col'
        return logical_position, type
    def mark_box(self):
        boxes = np.argwhere(self.board_status == -4)
        for box in boxes:
            if list(box) not in self.already_marked_boxes and list(box) !=[]:
                self.already_marked_boxes.append(list(box))
                color = player1_color_light
                self.shade_box(box, color)
        boxes = np.argwhere(self.board_status == 4)
        for box in boxes:
            if list(box) not in self.already_marked_boxes and list(box) !=[]:
                self.already_marked_boxes.append(list(box))
                color = player2_color_light
                self.shade_box(box, color)
    def update_board(self, type, logical_position):
        r = logical_position[0]
        c = logical_position[1]
        val = 1
        if self.player1_turn:
            val =- 1
        if c < (number_of_dots-1) and r < (number_of_dots-1):
            self.board_status[c][r] += val
        if type == 'row':
            self.row_status[c][r] = 1
            if c >= 1:
                self.board_status[c-1][r] += val
        elif type == 'col':
            self.col_status[c][r] = 1
            if r >= 1:
                self.board_status[c][r-1] += val
    def is_gameover(self):
        return (self.row_status == 1).all() and (self.col_status == 1).all()
    def make_edge(self, type, logical_position):
        if type == 'row':
            start_x = distance_between_dots/2 + logical_position[0]*distance_between_dots
            end_x = start_x+distance_between_dots
            start_y = distance_between_dots/2 + logical_position[1]*distance_between_dots
            end_y = start_y
        elif type == 'col':
            start_y = distance_between_dots / 2 + logical_position[1] * distance_between_dots
            end_y = start_y + distance_between_dots
            start_x = distance_between_dots / 2 + logical_position[0] * distance_between_dots
            end_x = start_x
        if self.player1_turn:
            color = player1_color
        else:
            color = player2_color
        self.canvas.create_line(start_x, start_y, end_x, end_y, fill=color, width=edge_width)
    def display_gameover(self):
        player1_score = len(np.argwhere(self.board_status == -4))
        player2_score = len(np.argwhere(self.board_status == 4))
        if player1_score > player2_score:
            text = 'Winner: Player 1 '
            color = player1_color
        elif player2_score > player1_score:
            text = 'Winner: Player 2 '
            color = player2_color
        else:
            text = 'Its a tie'
            color = 'gray'
        self.canvas.delete("all")
        self.canvas.create_text(size_of_board / 2, size_of_board / 3, font="cmr 60 bold", fill=color, text=text)
        score_text = 'Scores '
        self.canvas.create_text(size_of_board / 2, 5 * size_of_board / 8, font="cmr 40 bold", fill=Green_color,text=score_text)
        score_text = 'Player 1 : ' + str(player1_score) + '&'
        score_text += 'Player 2 : ' + str(player2_score) + ''
        self.canvas.create_text(size_of_board / 2, 3 * size_of_board / 4, font="cmr 30 bold", fill=Green_color,text=score_text)
        self.reset_board = True
        score_text = 'Click to play again '
        self.canvas.create_text(size_of_board / 2, 15 * size_of_board / 16, font="cmr 20 bold", fill="gray",text=score_text)
    def refresh_board(self):
        for i in range(number_of_dots):
            x = i*distance_between_dots+distance_between_dots/2
            self.canvas.create_line(x, distance_between_dots/2, x,
                                    size_of_board-distance_between_dots/2,
                                    fill='gray', dash = (2, 2))
            self.canvas.create_line(distance_between_dots/2, x,
                                    size_of_board-distance_between_dots/2, x,
                                    fill='gray', dash=(2, 2))
        for i in range(number_of_dots):
            for j in range(number_of_dots):
                start_x = i*distance_between_dots+distance_between_dots/2
                end_x = j*distance_between_dots+distance_between_dots/2
                self.canvas.create_oval(start_x-dot_width/2, end_x-dot_width/2, start_x+dot_width/2,end_x+dot_width/2, fill=dot_color,outline=dot_color)
    def display_turn_text(self):
        text = 'Next turn: '
        if self.player1_turn:
            text += 'Player1'
            color = player1_color
        else:
            text += 'Player2'
            color = player2_color

        self.canvas.delete(self.turntext_handle)
        self.turntext_handle = self.canvas.create_text(size_of_board - 5*len(text),size_of_board-distance_between_dots/8,font="cmr 15 bold", text=text, fill=color)
    def shade_box(self, box, color):
        start_x = distance_between_dots / 2 + box[1] * distance_between_dots + edge_width/2
        start_y = distance_between_dots / 2 + box[0] * distance_between_dots + edge_width/2
        end_x = start_x + distance_between_dots - edge_width
        end_y = start_y + distance_between_dots - edge_width
        self.canvas.create_rectangle(start_x, start_y, end_x, end_y, fill=color, outline='')
    def display_turn_text(self):
        text = 'Next turn: '
        if self.player1_turn:
            text += 'Player1'
            color = player1_color
        else:
            text += 'Player2'
            color = player2_color
        self.canvas.delete(self.turntext_handle)
        self.turntext_handle = self.canvas.create_text(size_of_board - 5*len(text),size_of_board-distance_between_dots/8,font="cmr 15 bold",text=text, fill=color)
    def click(self, event):
        if not self.reset_board:
            grid_position = [event.x, event.y]
            logical_positon, valid_input = self.convert_grid_to_logical_position(grid_position)
            if valid_input and not self.is_grid_occupied(logical_positon, valid_input):
                self.update_board(valid_input, logical_positon)
                self.make_edge(valid_input, logical_positon)
                self.mark_box()
                self.refresh_board()
                self.player1_turn = not self.player1_turn

                if self.is_gameover():
                    self.display_gameover()
                else:
                    self.display_turn_text()
        else:
            self.canvas.delete("all")
            self.play_again()
            self.reset_board = False
game_instance = Dots_and_Boxes()
game_instance.mainloop()`,
    output: `after executing prgm window will popup where you play game`,
    heading:`Python Program for Box Line Game`
    },
    
    aiminjumps:{
    code: `import heapq
def minimum_jumps_to_home(positions, start, home):
    heap = [(0, start)] 
    visited = set() 
    while heap:
    cost, current = heapq.heappop(heap)
    if current == home:
        return cost 
    if current in visited:
        continue 
        visited.add(current)
    for jump in positions[current]:
        new_cost = cost + 1 
        heapq.heappush(heap, (new_cost, jump))
    return -1 

positions = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D', 'E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
}
start = 'A'
home = 'F'
min_jumps = minimum_jumps_to_home(positions, start, home)
print("Minimum jumps to home:", min_jumps)
    `,
    output: `Minimum jumps to home: 3`,
    heading:`Program to find minimum jumps to reach home in Python`
    },
    
    aisnakeladder:{
    code:`from collections import deque
    
def snakesAndLadders(board):
    N = len(board)
    visited = set()
    queue = deque([(1, 0)])
    while queue:
        square, steps = queue.popleft()      
        if square == N*N:
            return steps     
        for i in range(1, 7):
            next_square = square + i          
            if next_square > N*N:
                break        
            row, col = getRowCol(next_square, N)          
            if board[row][col] != -1:
                next_square = board[row][col]            
            if next_square not in visited:
                visited.add(next_square)
                queue.append((next_square, steps+1))            
    return -1
def getRowCol(square, N):
    row = (square - 1) // N
    col = (square - 1) % N   
    if row % 2 == 1:
        col = N - col - 1       
    row = N - row - 1 
    return row, col
board = [[-1, -1, -1, -1, -1, -1,-1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1,-1, -1, -1, -1],
    [-1, -1, -1, 92, -1, -1,-1, -1, -1, -1],
    [-1, 65, -1, -1, 13, -1,-1, -1, 94, -1],
    [-1, -1, -1, -1, -1, 88,-1, -1, -1, -1],
    [-1, 55, -1, -1, -1, -1,-1, -1, -1, -1],
        [-1, 24, -1, -1, -1, -1,-1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 66,-1, -1, -1, -1],
    [-1, 62, -1, -1, 13, -1,-1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1,-1, -1, -1, -1]
]

board[8][6]=22
board[9][8]=10
result = snakesAndLadders(board)
print("The minimum number of throws required to win :",result)` ,
    output:`The minimum number of throws required to win : 6` ,
    heading:`Implementation of BFS for Finding the minimum number of
    throws required to win a given Snakes and Ladders board
    game`
    },
    
    aitixtactoe:{
    code: `board = ['_' for _ in range(9)]
player1 = "x"
player2 = "o"

def display_board():
    print(board[0], board[1], board[2])
    print(board[3], board[4], board[5])
    print(board[6], board[7], board[8])

def check_condition(player):
    conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]]
    for condition in conditions:
        if board[condition[0]] == player and board[condition[1]] == player and board[condition[2]] == player:
            return True
    return False

def start_game():
    display_board()
    current_player = player1
    while True:
        player_option = input(f"{current_player}, Enter your position: ")
        if player_option not in [str(i) for i in range(1, 10)]:
            print("please Enter [1-9]")
            continue

        position = int(player_option) - 1
        if board[position] == "_":
            board[position] = current_player
            display_board()
            if check_condition(current_player):
                return f"winner: {current_player}"
            if "_" not in board:
                return "Tie Game!"
            current_player = player2 if current_player == player1 else player1
        else:
            print("this place is not empty")
            
print(start_game())`,
    output:`_ _ _
    _ _ _
    _ _ _
    x, Enter your position: 2
    _ x _
    _ _ _
    _ _ _
    o, Enter your position: 1
    o x _
    _ _ _
    _ _ _
    x, Enter your position: 5
    o x _
    _ x _
    _ _ _
    o, Enter your position: 9
    o x _
    _ x _
    _ _ o
    x, Enter your position: 8
    o x _
    _ x _
    _ x o
    winner: x` ,
    heading:`Python Program for Tic-Tac-Toe Game`
    },
    
    aitspvalue:{
    code:  `import math
def tsp(cities, start_city):
    remaining_cities = set(cities)
    remaining_cities.remove(start_city)
    current_city = start_city
    tour = [start_city]
    while remaining_cities:
        nearest_city = min(remaining_cities, key=lambda city:
        distance(current_city, city))
        tour.append(nearest_city)
        remaining_cities.remove(nearest_city)
        current_city = nearest_city
        tour.append(start_city)
    return tour
def distance(city1, city2):
    return 0 
    
cities = ['A', 'B', 'C', 'D']
start_city = 'A'
tour = tsp(cities, start_city)

print("Optimal Tour:", tour)`,
    heading: `Implement TSP applying heuristic approach using PYTHON`,
    output:`Optimal Tour: ['A', 'B', 'A', 'C', 'A', 'D', 'A']`
    },
    
    aiwaterjug:{
    code: `from collections import defaultdict
jug1,jug2,aim=4,3,2
visited = defaultdict(lambda:False)
def waterjugsolver(amt1,amt2):
    if(amt1==aim and amt2==0)or (amt2==aim and amt1==0):
        print(amt1,amt2)
        return True
    if visited[(amt1,amt2)]==False:
        print(amt1,amt2)
        visited[(amt1,amt2)]=True
        return(waterjugsolver(0,amt2) or
                waterjugsolver(amt1,0) or
                waterjugsolver(jug1,amt2)or 
                waterjugsolver(amt1+min(amt2,(jug1-amt1)),amt2-min(amt2,(jug1-amt1)))or
                waterjugsolver(amt1-min(amt1,(jug2-amt2)),amt2+min(amt1,(jug2-amt2))))
    else:
        return False
print("Steps :")
waterjugsolver(0,0)
waterjugsolver(2,0)`,
    output: `Steps :
    0 0
    4 0
    1 3
    0 3
    4 3
    3 0
    1 0
    0 1
    4 1
    2 3
    2 0
    2 0`,
    heading:`Water Jug problem using Python Algorithm`
    },
    aitowerofhanoi:{
    code:`def TowerOfHanoi(n,from_rod,to_rod,aux_rod):
    stack=[]
    stack.append((n,from_rod,to_rod,aux_rod))
    while stack:
        disks,source,destination,auxiliary = stack.pop()
        if disks==0:
            continue
        if disks==1:
            print(f"Move disk 1 from rod {source} to rod {destination}")
        else:
            stack.append((disks-1,auxiliary,destination,source))
            stack.append((1,source,destination,auxiliary))
            stack.append((disks-1,source,auxiliary,destination))
N=3
TowerOfHanoi(N,'A','c','B')`,
    output:`Move disk 1 from rod A to rod c
    Move disk 1 from rod A to rod B
    Move disk 1 from rod c to rod B
    Move disk 1 from rod A to rod c
    Move disk 1 from rod B to rod A
    Move disk 1 from rod B to rod c
    Move disk 1 from rod A to rod c`,
    heading:`Python Program for Tower Of Hanoi`
    },
    aitowerofhanoirecurrsion:{
        code:`def TowerOfHanoi(n,from_rod,to_rod,aux_rod):
    if n==1:
        print("Move disk ",n," from rod ",from_rod," to rod ",to_rod)
        return
    TowerOfHanoi(n-1,from_rod,aux_rod,to_rod)
    print("Move disk ",n," from rod ",from_rod," to rod ",to_rod)
    TowerOfHanoi(n-1,aux_rod,to_rod,from_rod)
N = 4
TowerOfHanoi(N,"A","c","B")`,
        heading:`Write a Python Program to Implement Tower of Hanoi using recursion.`,
        output:`Move disk  1  from rod  A  to rod  B
    Move disk  2  from rod  A  to rod  c
    Move disk  1  from rod  B  to rod  c
    Move disk  3  from rod  A  to rod  B
    Move disk  1  from rod  c  to rod  A
    Move disk  2  from rod  c  to rod  B
    Move disk  1  from rod  A  to rod  B
    Move disk  4  from rod  A  to rod  c
    Move disk  1  from rod  B  to rod  c
    Move disk  2  from rod  B  to rod  A
    Move disk  1  from rod  c  to rod  A
    Move disk  3  from rod  B  to rod  c
    Move disk  1  from rod  A  to rod  B
    Move disk  2  from rod  A  to rod  c
    Move disk  1  from rod  B  to rod  c`
    },
    aiP2n8queens:{
        code:`#use replit for this program execution
from constraint import *
problem = Problem()
cols = range(1,9)	
rows = range(1,9)	
problem.addVariables(cols, rows)
for col1 in cols:
    for col2 in cols:
        if col1 < col2:
            problem.addConstraint(lambda row1, row2, col1=col1, col2=col2:
                abs(row1-row2) != abs(col1-col2) and	# this is the diagonal check
                row1 != row2, (col1, col2))				# this is the horizontal check
solution = problem.getSolution()
print(solution)`,
        heading:`# Write a Python Program  to solve  eight queens problem using any CSP method.`,
        output:`{1: 8, 2: 4, 3: 1, 4: 3, 7: 7, 5: 6, 6: 2, 8: 5}`
    },
    aiP3astaralgorithm:{
        code:`import heapq
    
def heuristic(node, goal):
    (x1, y1) = node
    (x2, y2) = goal
    return abs(x1 - x2) + abs(y1 - y2)
def astar(graph, start, goal):
    open_set = [(0, start)]
    came_from = {}
    g_score = {node: float('inf') for node in graph}
    g_score[start] = 0
    came_from[start] = None

    while open_set:
        _, current = heapq.heappop(open_set)

        if current == goal:
            path = []
            while current is not None:
                path.append(current)
                current = came_from[current]
            path.reverse()
            return path

        for neighbor in graph[current]:
            tentative_g_score = g_score[current] + graph[current][neighbor]
            if tentative_g_score < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g_score
                f_score = tentative_g_score + heuristic(neighbor, goal)
                heapq.heappush(open_set, (f_score, neighbor))

    return []

graph = {
    (0, 0): {(0, 1): 1, (1, 0): 3},
    (0, 1): {(0, 0): 1, (1, 0): 1, (1, 1): 4},
    (1, 0): {(0, 0): 3, (0, 1): 1, (1, 1): 1, (2, 0): 2},
    (1, 1): {(0, 1): 4, (1, 0): 1, (2, 0): 2},
    (2, 0): {(1, 0): 2, (1, 1): 2}
}
start_node = (0, 0)
goal_node = (2, 0)

path = astar(graph, start_node, goal_node)
print(path)`,
        heading:`Write a Python Program for the implementation of A*Algorithm`,
        output:`[(0, 0), (0, 1), (1, 0), (2, 0)]`
    },
    aiP5towerofiteration:{
    code:`def TowerOfHanoi(n,from_rod,to_rod,aux_rod):
    stack = []
    stack.append((n,from_rod,to_rod,aux_rod))
    while stack:
        disk,source,destination,auxiliary = stack.pop()
        if disk == 0:
            continue
        if disk == 1:
            print(f"Move disk 1 source {source} destination {destination}")
        else:
            stack.append((disk-1,auxiliary,destination,source))
            stack.append((1,source,destination,auxiliary))
            stack.append((disk-1,source,auxiliary,destination))
N=3
TowerOfHanoi(N,'A','C','B')`,
    heading:`Write a Python Program to Implement Tower of Hanoi using Iteration.`,
    output:`Move disk 1 source A destination C
    Move disk 1 source A destination B
    Move disk 1 source C destination B
    Move disk 1 source A destination C
    Move disk 1 source B destination A
    Move disk 1 source B destination C
    Move disk 1 source A destination C`
    },
    aiP6Q4queens:{
        code:`#use replit for this program execution
from constraint import *
problem = Problem()
cols = range(1,5)
rows = range(1,5)
problem.addVariables(cols,rows)
for col1 in cols:
    for col2 in cols:
        if col1<col2:
            problem.addConstraint(lambda row1,row2,col1=col1,col2=col2:
                                    abs(row1-row2)!=abs(col1-col2) and 
                                    row1!=row2 , (col1,col2))
solution = problem.getSolution()
print(solution)`,
        heading:`Write a Python Program solve  four queens problem using any CSP method. `,
        output:`{1: 3, 2: 1, 3: 4, 4: 2}`
    },
    aiP8Araincloudy:{
        code:`def bayestheorem(PA,PB,PBA):
    return PA*PBA/PB
PRain = 0.2
PCloudy = 0.4
PCloudyRain = 0.85

value = bayestheorem(PRain,PCloudy,PCloudyRain)
print(value)`,
        heading:`Write a Program to Compute  P(rain | cloudy).Where  the following probabilities are given.P(rain) = 0.20,P(cloudy) = 0.40 ,P(cloudy | rain) = 0.85`,
        output:`0.425`
    },
    aiP9Astarforgivenalgo:{
        code:`def aStarAlgo(start_node, stop_node):
    open_set = set([start_node])
    closed_set = set()
    g = {}  
    parents = {}  
    g[start_node] = 0  
    parents[start_node] = start_node  

    while len(open_set) > 0:
        n = None
        for v in open_set:
            if n == None or g[v] + heuristic(v) < g[n] + heuristic(n):
                n = v
        if n == stop_node or Graph_nodes[n] == None:
            pass
        else:
            for (m, weight) in get_neighbors(n):
                if m not in open_set and m not in closed_set:
                    open_set.add(m)
                    parents[m] = n
                    g[m] = g[n] + weight
                else:
                    if g[m] > g[n] + weight:
                        g[m] = g[n] + weight
                        parents[m] = n

                    if m in closed_set:
                        closed_set.remove(m)
                        open_set.add(m)

        if n == None:
            print('Path does not exist!')
            return None
        if n == stop_node:
            path = []
            while parents[n] != n:
                path.append(n)
                n = parents[n]
            path.append(start_node)
            path.reverse()
            print('Path found: {}'.format(path))
            return path
        open_set.remove(n)
        closed_set.add(n)

    print('Path does not exist!')
    return None

def get_neighbors(v):
    if v in Graph_nodes:
        return Graph_nodes[v]
    else:
        return None

def heuristic(n):
    H_dist = {
        'A': 11,
        'B': 6,
        'C': 99,
        'D': 1,
        'E': 7,
        'G': 0,
    }
    return H_dist[n]



Graph_nodes = {
    'A': [('B', 2), ('E', 3)],
    'B': [('C', 1), ('G', 9)],
    'C': None,
    'E': [('D', 6)],
    'D': [('G', 1)],
}

aStarAlgo('A', 'G')`,
        heading:`Write a Python Program for the implementation of A*Algorithm for the following graph.`,
        output:`Path found: ['A', 'E', 'D', 'G']`
    },
    
    aiP10FOLFC:{
        code:`class KnowledgeBase:
    def __init__(self):
        self.facts = set()
        self.rules = []

    def tell(self, fact):
        self.facts.add(fact)

    def add_rule(self, rule):
        self.rules.append(rule)

    def forward_chaining(self):
        inferred_facts = set()
        agenda = list(self.facts)
        while agenda:
            fact = agenda.pop(0)
            inferred_facts.add(fact)
            for rule in self.rules:
                premises, conclusion = rule
                if all(premise in inferred_facts for premise in premises) and conclusion not in inferred_facts:
                    agenda.append(conclusion)

        return inferred_facts


kb = KnowledgeBase()
kb.tell('A')
kb.tell('B')
kb.tell('C')
kb.add_rule((['A', 'B'], 'D'))
kb.add_rule((['D', 'C'], 'E'))
kb.add_rule((['E'], 'F'))
inferred_facts = kb.forward_chaining()
print("Inferred facts:")
for fact in inferred_facts:
    print(fact)`,
        heading:`Write a Python Program to implement First Order Logic representing “Forward Chaining”.`,
        output:`Inferred facts:
    D
    F
    B
    C
    A
    E`
    },
    aiP7bayestheroem:{
        code:`def bayestherom(prior_probability,likelihood,evidence_true):
    evidence_false = 1 - evidence_true
    posterior_true = (prior_probability*likelihood)/((prior_probability*likelihood)+((1-prior_probability)*(evidence_false)))
    return posterior_true
prior_prob = 0.3
likelihood_ratio = 0.8
evidence = 0.6
posterior_probabilty = bayestherom(prior_prob,likelihood_ratio,evidence)
print(f"posterior probability : {posterior_probabilty}")`,
    heading:`Write a python program to implement quantification of uncertainty with Baye’s Theorem.
    `,
    output:`posterior probability : 0.4615384615384615`
    },
    aiFOLprgm:{
        code:`
from pyDatalog import pyDatalog
# Define the knowledge base
pyDatalog.create_terms('parent, grandparent, sibling, cousin, X, Y, Z')
# Define the facts and rules
+parent('John', 'Jim')
+parent('John', 'Alice')
+parent('Jim', 'Ann')
+parent('Jim', 'Kate')
+parent('Ann', 'Tom')
# Define the rules
grandparent(X, Y) <= parent(X, Z) & parent(Z, Y)
sibling(X, Y) <= parent(Z, X) & parent(Z, Y)
cousin(X, Y) <= grandparent(Z, X) & grandparent(Z, Y) & (X != Y)
# Query the knowledge base
print("Grandparents:")
print(grandparent(X, Y))
print("Siblings:")
print(sibling(X, Y))
print("Cousins:")
print(cousin(X, Y))
# Query with specific values
print("Grandparent of John's children:")
print(grandparent('John', X))`,
        heading:`Write a program to implement First Order Logic representation using PYTHON`,
        output:`Grandparents:
    X    | Y   
    -----|-----
    Jim  | Tom 
    John | Kate
    John | Ann 
    
    Siblings:
    X     | Y    
    ------|------
    Tom   | Tom  
    Kate  | Kate 
    Kate  | Ann  
    Ann   | Ann  
    Ann   | Kate 
    Alice | Alice
    Alice | Jim  
    Jim   | Jim  
    Jim   | Alice
    
    Cousins:
    X    | Y   
    -----|-----
    Ann  | Kate
    Kate | Ann 
    
    Grandparent of John's children:
    X   
    ----
    Kate
    Ann `
    },
    aistimulatedannealing:{
        code:`import random
import math

def objective(x):
    return x**2

x = 10

T = 1.0
T_min = 0.00001
alpha = 0.9

while T > T_min:

    x_new = x + random.uniform(-0.1, 0.1)

    delta = objective(x_new) - objective(x)

    if delta < 0:
    x = x_new
    else:
    p = math.exp(-delta/T)
    if random.random() < p:
    x = x_new
    T *= alpha
print("Final state: ", x)
print("Objective function value: ", objective(x))`,
    heading:` Implement simulated Annealing algorithm using PYTHON .`,
    output:`Final state:  7.56478108553981
Objective function value:  57.22591287214087`
    },
    aiminstpelastindex:{
        code:`def min_steps_to_last_index(nums):
    n = len(nums)
    dp = [float('inf')] * n
    dp[0] = 0
    
    for i in range(1, n):
        for j in range(i):
        if j + nums[j] >= i:
        dp[i] = min(dp[i], dp[j] + 1)
    
    return dp[n - 1] if dp[n - 1] != float('inf') else -1
    # Example usage
nums = [2, 3, 1, 1, 4]
result = min_steps_to_last_index(nums)
if result == -1:
    print("Cannot reach the last index.")
else:
    print(f"Minimum number of steps required: {result}")`,
        heading:`Program to find number of minimum steps to reach last index in Python`,
        output:`Minimum number of steps required: 2`
    },
    aiSAmetroplis:{
        code:`import math, random
objective_function = lambda x: x ** 2
current_solution = random.uniform(0, 1)
for _ in range(100):
    neighbor = current_solution + random.uniform(-1, 1)
    if random.random() < math.exp(-abs(objective_function(neighbor) -
    objective_function(current_solution))):
        current_solution = neighbor
best_solution = current_solution
best_objective_value = objective_function(best_solution)
print("Best solution:", best_solution)
print("Objective function value:", best_objective_value)`,
    heading:` Explore metropolis acceptance criterion using simulated annealing with Python.`,
    output:`Best solution: -0.17275579090334636
    Objective function value: 0.02984456329064073`
    
    },
    aiminjumps8puzzle:{
        code:`mport heapq
def minimum_jumps_to_home(positions, start, home):
    heap = [(0, start)] # Priority queue of (cost, position) tuples
    visited = set() # Set to track visited positions
    while heap:
        cost, current = heapq.heappop(heap)
        if current == home:
            return cost # Reached home, return the minimum cost
        if current in visited:
            continue # Skip already visited positions
            visited.add(current)
        for jump in positions[current]:
            new_cost = cost + 1 # Increment cost by 1 for each jump
            heapq.heappush(heap, (new_cost, jump))
    return -1 # Unable to reach home
# Example usage
positions = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D', 'E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
}
start = 'A'
home = 'F'
min_jumps = minimum_jumps_to_home(positions, start, home)
print("Minimum jumps to home:", min_jumps)`,
    heading:`Finding minimum number of jumps in 8 puzzle problem using Python`,
    output:`Minimum jumps to home: 3`
    }
    }

//web development content object 
const DmContentObj={
    factorialnum:{
        code:`num <- as.numeric(readline("Enter a number: "))

if (is.na(num)) {
    cat("You did not enter a valid number. Please enter a numeric value.")
} else {
    factorial <- 1
    for (x in 1:num) {
    factorial <- factorial * x
    }
    cat(sprintf("Factorial of %d: %d", num, factorial))
}
        
`,
output:`Factorial of 5: 120`,
heading:`Write a R program for find the factorial of a given number`
    },
    sumofarray:{
code:`# Create an array of numbers
numbers <- c(1, 2, 3, 4, 5)

# Use the sum function to calculate the sum
sum_of_numbers <- sum(numbers)

# Print the sum
cat("Sum of the array :",sum_of_numbers)    
`,
output:`Sum of the array : 15`,
heading:`Write a R program to find the sum of given numbers in a array`
    },
    reverseanumber:{
        code:`num <- as.numeric(readline("Enter a number: "))
rev=0
while(num>0)
{
    r=num %% 10
    rev=rev*10+r
    num=num %/% 10
}
print(paste("Reverse number is:",rev))   
`,
output:`Reverse number is: 321`,
heading:`Write a R program to find the sum of given numbers in a array`
    },
    transposeofmatrix:{
        code:`# Create a sample matrix
matrix_data <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 2)

# Find the transpose of the matrix
transposed_matrix <- t(matrix_data)

# Print the original and transposed matrices
cat("Original Matrix:")
print(matrix_data)

cat("Transposed Matrix:")
print(transposed_matrix)`,
output:`Original Matrix:
[,1] [,2] [,3]
[1,]    1    3    5
[2,]    2    4    6

Transposed Matrix:
[,1] [,2]
[1,]    1    2
[2,]    3    4
[3,]    5    6`,
heading:`Write a R program to find the transpos,e of a  given matrix`
    },
    Fibonaccisequence:{
        code:`# Function to print the Fibonacci sequence using a loop
print_fibonacci <- function(n) {
a <- 0
b <- 1

cat("Fibonacci Sequence:")
for (i in 1:n) {
    cat(a, " ")
    next_num <- a + b
    a <- b
    b <- next_num
}
}

# Example usage
number_of_terms <- 10
print_fibonacci(number_of_terms)
`,
        output:`Fibonacci Sequence:0  1  1  2  3  5  8  13  21  34`,
        heading:`Write a R program to display the Fibonacci numbers up to given range`

    },
    Armstrongnumber:{
        code:`# Function to check if a number is an Armstrong number
is_armstrong_number <- function(num) {
    num_str <- as.character(num)
    num_digits <- nchar(num_str)
    sum_of_powers <- sum(as.numeric(strsplit(num_str, '')[[1]])^num_digits)
    return(num == sum_of_powers)
}

# Input the number
num <- as.integer(readline("Enter a number: "))

# Check if the number is an Armstrong number
if (is_armstrong_number(num)) {
    cat(num, "is an Armstrong number.")
} else {
    cat(num, "is not an Armstrong number.")
}
        `,
        output:`153 is an Armstrong number.`,
        heading:`Write a R program to find the given number is Armstrong number or not`

    },
    Graphicalrepresentation:{
        code:`#select any of plots you wish and practice
# Load the iris dataset
data(iris)

# Scatter plot
plot(iris$Sepal.Length, iris$Sepal.Width, 
        main = "Scatter plot of Sepal Length vs Sepal Width", 
        xlab = "Sepal Length", ylab = "Sepal Width", pch = 19, col = iris$Species)

# Histogram
hist(iris$Petal.Length, 
        main = "Histogram of Petal Length", 
        xlab = "Petal Length", col = "lightblue")

# Box plot
boxplot(iris$Petal.Width ~ iris$Species, 
        main = "Box plot of Petal Width by Species", 
        xlab = "Species", ylab = "Petal Width")

# Bar plot
barplot(table(iris$Species), 
        main = "Bar plot of Species Counts", 
        xlab = "Species", ylab = "Count", col = "skyblue")

# Line plot
plot(1:10, type = "n", main = "Line Plot", xlab = "X", ylab = "Y")
lines(1:10, col = "blue", lwd = 2)

# Pie chart
slices <- c(10, 20, 30)
labels <- c("Group A", "Group B", "Group C")
pie(slices, labels, col = rainbow(length(slices)))`,
        output:`Plots will be displayed`,
        heading:`Write a R program to impl different Graphical representations of data in R`
    },
    decisiontree:{
        code:`# Install and load the rpart package if not already installed
# install.packages("rpart")
# Sample dataset
data <- data.frame(
    Color = c("Red", "Orange", "Red", "Orange", "Red", "Green", "Green", "Orange"),
    Shape = c("Round", "Round", "Oval", "Oval", "Round", "Round", "Oval", "Round"),
    Class = c("Apple", "Orange", "Apple", "Orange", "Apple", "Apple", "Orange", "Orange")
)

# Creating a decision tree model
library(rpart)
model <- rpart(Class ~ Color + Shape, data = data, method = "class")

# Plot the decision tree
library(rpart.plot)
rpart.plot(model, box.palette = "GnBu", type = 4, fallen.leaves = TRUE)`,
        output:`Output may be similar to this :(Apple 50%/100%)`,
        heading:`Simple Decision Tree Classification Example in R: Classifying Fruit`
    },
    week5_1:{
code:`install.packages("mlbench")
install.packages("e1071")
library(mlbench)
library(e1071)
data(PimaIndiansDiabetes)
set.seed(123)
train_indices<-sample(1:nrow(PimaIndiansDiabetes),0.7*nrow(PimaIndiansDiabetes))
train_data<-PimaIndiansDiabetes[train_indices,]
test_data<-PimaIndiansDiabetes[-train_indices,]
bayesian_model<-naiveBayes(diabetes~.,data = train_data)
predictions<-predict(bayesian_model,test_data)
accuracy<-mean(predictions == test_data$diabetes)
print(paste("Accuracy:", round(accuracy * 100, 2), "%"))`,
        output:``,
        heading:`use the "Pima Indians Diabetes" dataset, which contains information
        about female patients of Pima Indian heritage. The goal is to predict whether a patient
        has, diabetes or not based on various features like glucose level, blood pressure, BMI, etc.`
    },
week6:{
code:`data(iris)

str(iris)

install.packages("ClusterR")
install.packages("cluster")

library(ClusterR)
library(cluster)

iris_1 <- iris[, -5]

set.seed(240) 
kmeans.re <- kmeans(iris_1, centers = 3, nstart = 20)
kmeans.re

kmeans.re$cluster

cm <- table(iris$Species, kmeans.re$cluster)
cm

plot(iris_1[c("Sepal.Length", "Sepal.Width")])
plot(iris_1[c("Sepal.Length", "Sepal.Width")],
        col = kmeans.re$cluster)
plot(iris_1[c("Sepal.Length", "Sepal.Width")],
        col = kmeans.re$cluster,
        main = "K-means with 3 clusters")

kmeans.re$centers
kmeans.re$centers[, c("Sepal.Length", "Sepal.Width")]

points(kmeans.re$centers[, c("Sepal.Length", "Sepal.Width")],
        col = 1:3, pch = 8, cex = 3)

y_kmeans <- kmeans.re$cluster
clusplot(iris_1[, c("Sepal.Length", "Sepal.Width")],
            y_kmeans,
            lines = 0,
            shade = TRUE,
            color = TRUE,
            labels = 2,
            plotchar = FALSE,
            span = TRUE,
            main = paste("Cluster iris"),
            xlab = 'Sepal.Length',
            ylab = 'Sepal.Width')`,
        output:``,
        heading:`Perform K-Means Clustering on IRIS Dataset &bsol;n`
    },
    week6_1:{
code:`# Load required packages
library(datasets)
library(ggplot2)

# Load the USArrests dataset
data("USArrests")

# Perform k-means clustering
set.seed(123)  # For reproducibility
num_clusters <- 3  # Number of clusters
kmeans_result <- kmeans(USArrests, centers = num_clusters)

# Add cluster assignments to the original data
USArrests_clustered <- data.frame(USArrests, Cluster = as.factor(kmeans_result$cluster))

# Visualize the clusters
ggplot(USArrests_clustered, aes(UrbanPop, Murder, color = Cluster)) +
    geom_point() +
    labs(title = "K-Means Clustering of USArrests Dataset",
        x = "Urban Population", y = "Murder Rate")



#multiplication of matrices
matrix_multiply <- function(mat1, mat2) {
    if (ncol(mat1) != nrow(mat2)) {
    stop("Number of columns in Matrix 1 must be equal to the number of rows in Matrix 2 for multiplication.")
    }
    
    result <- mat1 %*% mat2
    return(result)
}

matrix1 <- matrix(c(1, 2, 3, 4), nrow = 2, ncol = 2)
matrix2 <- matrix(c(5, 6, 7, 8), nrow = 2, ncol = 2)

result_matrix <- matrix_multiply(matrix1, matrix2)

cat("Matrix 1:")
print(matrix1)

cat("Matrix 2:")
print(matrix2)

cat("Result Matrix:")
print(result_matrix)
`,
        output:``,
        heading:`Can we identify distinct patterns or groupings of states based on their urban
        population and
        murder rate using k-means clustering on the "USArrests" dataset?`
    },
    week7:{
code:`# Install and load necessary packages
install.packages(c("sf", "raster", "ggplot2", "spatstat", "plotrix", "fields", 
                    "leaflet", "RColorBrewer", "lattice", "geoR", 
                    "spdep", "ape", "pgirmess", "splancs", "smacpod", "car", "sp"))

# Load necessary libraries
library(sf)
library(raster)
library(ggplot2)
library(spatstat)
library(plotrix)
library(fields)
library(leaflet)
library(RColorBrewer)
library(lattice)
library(geoR)
library(car)
library(sp)
library(spdep)
library(ape)
library(pgirmess)

# Open BF malaria data
BF_malaria_data <- read.csv("https://raw.githubusercontent.com/HughSt/HughSt.github.io/master/course_materials/week4/Lab_files/BF_malaria_data.csv", header = TRUE)

# Load administrative boundaries for Burkina Faso (level 1)
BF_Adm_1 <- raster::getData("GADM", country = "BFA", level = 1)
proj4string(BF_Adm_1) <- CRS('+proj=longlat +datum=WGS84 +no_defs +ellps=WGS84 +towgs84=0,0,0 ')

# Calculate prevalence
BF_malaria_data$prevalence <- BF_malaria_data$positives / BF_malaria_data$examined

# Create a leaflet map to visualize spatial points
pal <- colorNumeric("Oranges", BF_malaria_data$prevalence)
leaflet(BF_malaria_data) %>% 
    addTiles() %>% 
    addCircleMarkers(
    ~longitude, ~latitude,
    fillOpacity = 1,
    fillColor = ~pal(prevalence),
    radius = ~prevalence * 10,
    stroke = TRUE,
    weight = 1
    ) %>% 
    addLegend(pal = pal, values = ~prevalence)`,
        output:``,
        heading:`Exploring the Spatial Clustering using Malaria point prevalence data to calculate
        prevalence.`
    },
    week8:{
code:`install.packages "tm"
install packages("stringdist") install packages"proxy"
library(tm)
library(proxy)
corpuss-Corpus|VectorSourcel"Hi how are you.I am fine with your Pleasure")) corpus<-tm_map(corpus,content _transformer(tolower))
corpuss-tm_map/corpus, removePunctuation)
corpuss-tm_map/corpus,removeWords,stopwords"english))
tdms-TermDocumentMatrix(corpus)
cosine _similarity<-function(x)1-proxy: dist/x,method="cosine"
similarity_ matrix<-cosine _similarity/(as.matrix(tdm))
similarity_ matrix<-as.matrixsimilarity_matrix)
diag(similarity_matrix<0
query_index<-1
relevant_docs<-sort(similarity_matrix,query_index],decreasing =TRUE)`,
        output:``,
        heading:`create an information retrieval program in data mining using R and the
        output display in similarity matrix`
    },
    addmatrices:{
code:`matrix1<-matrix(c(1,2,3,4),2,2)
matrix2<-matrix(c(5,6,7,8),2,2)
cat("matrix1/n")
print(matrix1)
cat("matrix2/n")
print(matrix2)
print("Result matrix /n")
final<-matrix1+matrix2
print(final)`,
        output:``,
        heading:`Write a R program to perform addition of given matrices`
    },
    strongnumber:{
code:`factorial <- function(n) {
if (n == 0 || n == 1) {
    return(1)
} else {
    return(n * factorial(n - 1))
}
}
is_strong_number <- function(num) {
original_num <- num
sum_of_factorials <- 0
while (num > 0) {
    digit <- num %% 10
    sum_of_factorials <- sum_of_factorials + factorial(digit)
    num <- num %/% 10
}
return(original_num == sum_of_factorials)
}
number_to_check <- 145
result <- is_strong_number(number_to_check)
if (result) {
cat(number_to_check, "is a strong number.")
} else {
cat(number_to_check, "is not a strong number.")
}
          `,
        output:``,
        heading:`Write a R program to find the given number strong number or not`
    },
    multiplymatrix:{
code:`#multiplication of matrices
matrix_multiply <- function(mat1, mat2) {
    if (ncol(mat1) != nrow(mat2)) {
    stop("Number of columns in Matrix 1 must be equal to the number of rows in Matrix 2 for multiplication.")
    }
    
    result <- mat1 %*% mat2
    return(result)
}

matrix1 <- matrix(c(1, 2, 3, 4), nrow = 2, ncol = 2)
matrix2 <- matrix(c(5, 6, 7, 8), nrow = 2, ncol = 2)

result_matrix <- matrix_multiply(matrix1, matrix2)

cat("Matrix 1:")
print(matrix1)

cat("Matrix 2:")
print(matrix2)

cat("Result Matrix:")
print(result_matrix)

`,
        output:``,
        heading:`Write a R program to perform the multiplication of given matrices`
    },
    sortsearch:{
code:`numeric_vector <- c(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5)
sorted_numeric <- sort(numeric_vector)
print(sorted_numeric)
character_vector <- c("apple", "orange", "banana", "grape")
sorted_character <- sort(character_vector)
print(sorted_character)
vector <- c(2, 7, 3, 8, 5, 10)
indices_greater_than_5 <- which(vector > 5)
print(indices_greater_than_5)`,
        output:``,
        heading:`Write a R program to perform the sorting and searching operations.`
    },
    Qonea:{
code:`Dataset = read.csv("dataset.csv")
View(Dataset)

Dataset$Age = ifelse(is.na(Dataset$Age),
                        ave(Dataset$Age, FUN = function(x) mean(x, na.rm=TRUE)),
                        Dataset$Age)
                        
Dataset$Salary = ifelse(is.na(Dataset$Salary),
                        ave(Dataset$Salary, FUN = function(x) mean(x, na.rm=TRUE)),
                        Dataset$Salary)
`,
        output:``,
        heading:`Import Data and Raed the data from  dataset.csv and perform the following task checking for missing values from the dataset`
    },
    Qoneb:{
code:`# Data for 5 subjects
subjects <- c("Math", "Science", "History", "English", "Art")
scores <- c(85, 78, 92, 88, 70)

# Create a bar plot
barplot(scores, names.arg = subjects, col = "skyblue", main = "Scores in 5 Subjects", xlab = "Subjects", ylab = "Scores")
`,
output:``,
heading:`Write a r program to create a simple bar plot of five subjects marks`
    },
    Qtwoa:{
code:`state_table <- data.frame(key=c("CA", "NY", "ON", "QU"), country=c("USA", "USA", "Canada", "Canada"))
month_table <- data.frame(key=1:6, quarter=c("Q1", "Q1", "Q2", "Q2", "Q3", "Q3"))
prod_table <- data.frame(key=c("Printer", "Tablet", "Laptop"), price=c(225, 570, 1120))
gen_sales <- function(n) {
    loc <- sample(state_table$key, n, replace=T, prob=c(2, 2, 1, 1))
    time_month <- sample(month_table$key, n, replace=T)
    time_year <- sample(2012:2013, n, replace=T)
    prod <- sample(prod_table$key, n, replace=T, prob=c(1, 3, 2))
    unit <- sample(1:2, n, replace=T, prob=c(10, 3))
    amount <- unit * prod_table$price[match(prod, prod_table$key)]
    sales <- data.frame(month=time_month, year=time_year, loc=loc, prod=prod, unit=unit, amount=amount)
    sales <- sales[order(sales$year, sales$month),]
    return(sales)
}
sales_fact <- gen_sales(100)
revenue_cube <- tapply(sales_fact$amount, sales_fact[,c("prod", "month", "year", "loc")], sum)
revenue_cube
dimnames(revenue_cube)
revenue_cube[, "1", "2012",]
revenue_cube["Tablet", "1", "2012",]`,
        output:``,
        heading:`Extracting the data usimg sales data and performing various OLAP operations like Slice and visualizing th emutlidimensional data for analysis.`
    },
    Qtwob:{
code:`# Function to perform addition
add <- function(a, b) {
    return(a + b)
}

# Function to perform subtraction
subtract <- function(a, b) {
    return(a - b)
}

# Function to perform multiplication
multiply <- function(a, b) {
    return(a * b)
}

# Function to perform division
divide <- function(a, b) {
    if(b != 0) {
    return(a / b)
    } else {
    return("Cannot divide by zero!")
    }
}

# Input numbers
num1 <- as.numeric(readline("Enter first number: "))
num2 <- as.numeric(readline("Enter second number: "))

# Choose operation
operation <- readline("Choose operation (+, -, *, /): ")

# Perform calculation based on the chosen operation
result <- switch(operation,
                    "+" = add(num1, num2),
                    "-" = subtract(num1, num2),
                    "*" = multiply(num1, num2),
                    "/" = divide(num1, num2),
                    "Invalid operation")

# Display the result
cat("Result:", result)`,
output:``,
heading:`Write a r program to implement simple calculator`
    },
    Qeighta:{
code:`library(tm)
docs <- Corpus(DirSource("C:/Users/Pilli Akshitha/OneDrive/Desktop/dm", encoding = "UTF-8"))
print(docs)
to_space <- content_transformer(function(x, pattern)
{ 
    return (gsub(pattern, " ", x))
}
)
docs <- tm_map(docs, to_space, ":")
docs <- tm_map(docs, to_space, "-")
docs <- tm_map(docs, to_space, "'")
docs <- tm_map(docs, to_space, "’")
docs <- tm_map(docs, to_space, '"')
docs <- tm_map(docs, to_space, ";")
docs <- tm_map(docs, removePunctuation)
docs <- tm_map(docs, content_transformer(tolower))
docs <- tm_map(docs, removeNumbers)
docs <- tm_map(docs, removeWords, stopwords())
docs <- tm_map(docs, stripWhitespace)
inspect(docs[[1]])
dtm <- DocumentTermMatrix(docs)
inspect(dtm)`,
        output:``,
        heading:`To create an information retrieval program in data mining using R from multiple files`
    },
    Qeightb:{
code:`binarySearch = function(arr,item) {
    low <- 1; high <- length(arr)
    while (low <= high){
        mid <- as.integer(round((low + high) / 2)) 
        if (abs(arr[mid] - item) ==0) {
            return(mid)
        } else if (arr[mid] < item) {
            low <- mid + 1
        } else {
            high <- mid - 1
        }
    }
    return(0)
}
arr <- c(4, 0, 3, 1, 5, 6, 2)
sorted_arr <- sort(arr)
item <- 4
cat("Array ", arr, "Sorted array ",sorted_arr,"item = ", item, )
index <- binarySearch(sorted_arr, item)
if (index!=0){
    cat("Element is present at index ", index, )
}else{
    cat("element not found")
}`,
        output:``,
        heading:`Write a R program to implement binary search in an array`
    },
    Qfoura:{
code:`install.packages("caret")
install.packages("gridExtra")
library(caret)
library(dplyr)
library(gridExtra)
mushroom_data <- read.csv("C:/Users/ADITYA/OneDrive/Desktop/mushroom_dataset.csv")
mushroom_data <- as.data.frame(mushroom_data)
set.seed(1)
test_idx <- createDataPartition(y = mushroom_data$class, times = 1, p = 0.2, list = FALSE)

train_data = mushroom_data[-test_idx,]
test_data = mushroom_data[test_idx,]
rm(mushroom_data, test_idx)
feature_ditribution_plot <- function(data){
    
    plots <- list()
    
    for (i in 1:(ncol(data)-1))
    {
    summarized_data <- data %>% group_by(class, .[,i+1]) %>% summarise(n = n())
    names(summarized_data)[2] <- "attr"
    plot <- summarized_data %>% ggplot(aes(attr , class)) + geom_point(aes(size=n)) +
        xlab(names(data)[i+1]) + ylab("Edibility") 
    plots[[i]] <- plot
    }
    rm(summarized_data, i, plot)
    grid.arrange(grobs=plots,ncol=3)
}
feature_ditribution_plot(train_data)`,
        output:``,
        heading:`Train mushroom set using classification rule`
    }

}

let selectedContent;

switch (subName) {
  case "Python_Programming":
    selectedContent = PpContentObj[specificQn];
    break;
  case "Web_Development":
    selectedContent = WddContentObj[specificQn];
    break;
  case "Data_Structures_using_python":
    selectedContent = DspContentObj[specificQn];
    break;
  case "Java_Programming":
    selectedContent = JavaContentObj[specificQn];
    break;
  case "AI_Programming":
    selectedContent = AiContentObj[specificQn];
    break;
  case "Data_Mining":
    selectedContent = DmContentObj[specificQn];
    break;
  default:
    selectedContent = null;
}


  return selectedContent ? (
    <PrgmConComponent propsContent={selectedContent} />
  ) : null;
}