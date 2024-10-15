import javaImg from '../../assets/pages/Tech/data/java.jpg'; // Changed import name for consistency
import oopImg from '../../assets/pages/Tech/data/oop.png';   // Changed import name for consistency
import encapsulation from '../../assets/pages/Tech/data/encapsulation.jpg';   
import inheritance from '../../assets/pages/Tech/data/inheritance.png';   

const tech_data = [
  {
    t_no: "1",
    t_name: "Java Fundamentals",
    t_desc: "A quick overview of Java programming fundamentals.",
    t_more: `
      ### 1. Class 
      A blueprint for creating objects that defines the properties (attributes) and behaviors (methods) an object will have.
      
      ### 2. Object 
      An instance of a class that contains both state (fields) and behavior (methods). Objects are used to model real-world entities.
      
      ### 3. Method 
      A block of code within a class that performs a specific task. Methods can take parameters and return values.
      
      ### 4. Constructor 
      A special method used to initialize objects. It is called when an object of a class is created.
      
      ### 5. Array 
      A collection of elements of the same data type stored at contiguous memory locations. Arrays have a fixed size once created.
      
      ### 6. Inheritance 
      A mechanism where one class (subclass) inherits fields and methods from another class (superclass), promoting code reuse.
      
      ### 7. Polymorphism 
      The ability of a single method to behave differently based on the object that calls it, allowing for flexibility in code. It is achieved via method overloading and overriding.
      
      ### 8. Encapsulation 
      The practice of bundling data (fields) and methods that operate on that data into a single unit, typically a class, while restricting direct access to some components using access modifiers.
      
      ### 9. Abstraction 
      The concept of hiding the internal details of an object and exposing only the necessary functionality to the outside world. Achieved using abstract classes and interfaces.
      
      ### 10. Interface 
      A reference type in Java that contains only constants, method signatures, and nested types. Interfaces allow multiple inheritance in Java.
      
      ### 11. Exception Handling 
      A mechanism to handle runtime errors in a program. It uses try-catch blocks to catch exceptions and provide a means to recover.
      
      ### 12. Looping 
      Repeatedly executing a block of code using loops like for, while, or do-while, until a condition is met or no longer met.
    `,
    t_img: javaImg, // Using corrected variable name for Java image
  },
  {
    t_no: "2",
    t_name: "Object-Oriented Programming (OOP)",
    t_desc: "Understand the basics of OOP and its importance in software development.",
    t_more: `
      ### What is OOP?
       Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around data, or objects, rather than functions and
       logic. OOP allows us to model real-world entities using objects and provides a modular approach to building complex systems.

      ### What is OOP used for?
       OOP is primarily used in building large, scalable, and maintainable software applications. It's particularly useful in GUI applications,
       game development, and complex systems like banking software, medical applications, or enterprise systems, where objects can represent 
       real-world entities. The key advantage is that OOP allows code reusability, scalability, and ease of maintenance.

      ### How does OOP work?
      OOP works through four main principles: Encapsulation, Inheritance, Polymorphism, and Abstraction. Here's how they work:
      - **Encapsulation**: This principle bundles the data (attributes) and methods (functions) that operate on the data into a single unit 
          (a class). It restricts access to some components by using access modifiers (like \`private\`, \`public\`, \`protected\`).
      - **Inheritance**: Inheritance allows one class (subclass) to inherit properties and behaviors (methods) from another class (superclass). 
          It promotes code reuse by allowing shared attributes and methods to be passed down.
      - **Polymorphism**: This allows methods to have different implementations based on the object that is calling them. It means that one method
          can behave differently in different contexts (method overloading and overriding).
      - **Abstraction**: Abstraction hides the internal details of an object, exposing only what is necessary to the outside world. This concept 
          is useful for simplifying complex systems.

      ### What is a Class?
      A class is a blueprint or template for creating objects. It defines the attributes (fields) and methods (functions) that the objects will 
      have. Think of it as a recipe that specifies what ingredients (attributes) and instructions (methods) are required.

      ### What is an Object?
      An object is an instance of a class. When you create an object, you are creating a specific instance of that class with its own values for 
      attributes. For example, if you have a "Car" class, you can create multiple car objects with different colors, models, etc.

      ### What are Attributes/Methods?
      - **Attributes** (also called fields or properties) represent the characteristics of an object. For example, in a "Car" class, attributes 
          could include \`color\`, \`model\`, \`year\`, etc.
      - **Methods** are actions or behaviors that an object can perform. In the "Car" class, methods could be \`startEngine()\`, \`drive()\`, 
          or \`stopEngine()\`. Methods define how objects interact with data and other objects.

      ### What is a Constructor?
      A constructor is a special method in a class that gets called when an object is created. It initializes the object's attributes and sets up 
      any necessary state. For example, when you create a "Car" object, the constructor might set the \`model\`, \`color\`, and \`year\` based on
      the parameters passed.

      ### What is Encapsulation in OOP?
      Encapsulation is the concept of bundling the data (attributes) and methods that operate on that data into a single unit (the class) and 
      restricting access to some of the object’s components. Access to attributes is often controlled using access modifiers like \`private\`, 
      \`protected\`, and \`public\`. This ensures that sensitive data is hidden and only accessible through controlled methods (getters and setters).

      ### What is Inheritance?
      Inheritance is a feature in OOP where a new class (child class) inherits properties and behaviors (attributes and methods) from an existing 
      class (parent class). This helps in code reuse, as the child class can use or override the behavior of the parent class.

      ### What is Polymorphism?
      Polymorphism allows a method to have different implementations based on the object that calls it. There are two types of polymorphism:
      1. **Compile-time polymorphism** (Method Overloading): The same method name can be used with different signatures (different parameters).
      2. **Run-time polymorphism** (Method Overriding): A method in a child class can have a different implementation than a method in its parent
           class.

      ### What is Abstraction?
      Abstraction is the process of hiding the implementation details and exposing only the necessary functionality to the user. In OOP,
      abstraction can be achieved using abstract classes and interfaces. This helps reduce complexity by allowing developers to focus on the 
      "what" rather than the "how."

      ### What is an Interface?
      An interface in Java is a collection of abstract methods (methods without bodies). It defines the contract that any implementing class must
       follow. A class that implements an interface must provide concrete implementations for all its methods.

      ### What is Exception Handling in OOP?
      Exception handling is a mechanism for dealing with runtime errors in a program. It uses \`try-catch\` blocks to catch exceptions and provide
       meaningful responses or actions, preventing the program from crashing. In OOP, this ensures that objects can gracefully handle unexpected
        events.

      ### What are Access Modifiers in OOP?
      Access modifiers control the visibility of class members (attributes and methods). The most common access modifiers in Java are:
      - **public**: Accessible from anywhere in the program.
      - **private**: Accessible only within the class it is defined.
      - **protected**: Accessible within the same package or subclasses.
    `,
    t_img: oopImg, // Using corrected variable name for OOP image
  },

  {
    t_no: "3",
    t_name: "Encapsulation in OOP",
    t_desc: "An in-depth look into the concept of Encapsulation in OOP.",
    t_more: `
    ### What is Encapsulation?

    - Encapsulation is one of the four fundamental principles of Object-Oriented Programming (OOP). 

    - It refers to the bundling of data (variables) and methods (functions) that operate on the data into a single unit or class, 
      while restricting direct access to some of the object's components. 

    - It ensures that the internal representation of an object is hidden from the outside world, allowing controlled access through public methods.
  
    ### Key Benefits of Encapsulation:

    - **Data Protection:** By hiding the internal details, encapsulation helps to protect the integrity of the data. External code cannot
        directly modify or corrupt the internal state.

    - **Controlled Access:** It allows for controlled access to the data through getters and setters, ensuring that invalid or unwanted 
        values cannot be assigned directly to attributes.

    - **Modularity:** Encapsulation encourages modularity by grouping related fields and methods into a single, cohesive unit. This makes 
        the code more maintainable and easier to debug.

    - **Flexibility:** It allows changes to the implementation without affecting other parts of the program, as long as the interface 
        (public methods) remains consistent.

    - **Increased Security:** Sensitive data is hidden from external access, providing better security for the system.
  
    ### How Encapsulation Works

    - **Private Fields:** The data (fields or attributes) are declared private, making them inaccessible directly from outside the class.

    - **Public Methods:** Public getter and setter methods are used to access or update the private fields, ensuring that any validation or
        logic is applied consistently.
  
    ### Example of Encapsulation:

    \`\`\`java

    public class BankAccount {
        // Private fields
        private double balance;
        
        // Constructor
        public BankAccount(double initialBalance) {
            balance = initialBalance;
        }
  
        // Public getter method
        public double getBalance() {
            return balance;
        }
        
        // Public setter method
        public void deposit(double amount) {
            if (amount > 0) {
                balance += amount;
            }
        }
    }
    \`\`\`

    - In this example, the \`balance\` is private, and external access is provided through the \`getBalance()\` and \`deposit()\` methods. 
      This ensures that the balance is only modified in a controlled manner.
  
    ### Real-World Example of Encapsulation:

    - A real-world example of encapsulation can be found in a **car's engine**. The internal details of how the engine works are hidden 
      from the driver. Instead, the driver interacts with the engine via the accelerator and brake pedals, without needing to understand 
      the complexity of the engine's inner workings.
  
    ### Encapsulation in Practice:

    - When developing applications, especially large ones, encapsulation promotes better organization of code, easier debugging, and enhanced
      collaboration within teams, as each class handles its data internally without exposing unnecessary details to other parts of the system.


    `,
    t_img: encapsulation, // Replace with the actual path if necessary
  },

  {
    t_no: "4",  
    t_name: "Inheritance in OOP",
    t_desc: "Deep dive into Inheritance, a core concept of Object-Oriented Programming (OOP).",
    t_more: `
      ### Inheritance in Object-Oriented Programming
      
      - Inheritance is one of the fundamental principles of Object-Oriented Programming (OOP). It allows a new class to acquire the properties
        and behaviors (methods) of an existing class. This promotes reusability, scalability, and hierarchical relationships among classes.

      #### Key Concepts of Inheritance:
      
      1. **Superclass (Parent Class)**: This is the class from which other classes inherit. It contains common attributes and methods that can
           be shared by multiple subclasses.
      
      2. **Subclass (Child Class)**: The class that inherits from the superclass. It can extend or modify the inherited properties and methods.
           The subclass can add new attributes and behaviors or override the inherited ones.
      
      3. **extends Keyword**: In languages like Java, the \`extends\` keyword is used to indicate that one class inherits from another.For example:
         \`\`\`

         class Vehicle {
           // properties and methods
         }
         
         class Car extends Vehicle {
           // Car inherits from Vehicle
         }

         \`\`\`

      #### How Inheritance Works:

      - **Inheritance of Attributes and Methods**: 
            ~ When a subclass inherits from a superclass, it gets all the non-private attributes and methods from the parent. For instance, 
              if the superclass defines common methods like \`startEngine()\` or \`stopEngine()\`, the subclass automatically has access to 
              these methods without needing to rewrite them.
      
      - **Code Reusability**:
            ~ Inheritance allows for better code organization and reusability. Instead of repeating code in every class, you can define it once
             in the parent class and reuse it in multiple subclasses.
      
      - **Method Overriding**: 
            ~ Subclasses can override methods from the superclass. This means that a subclass can provide its specific implementation of a
              method that is inherited from the parent class, allowing for specialized behavior. For example, while both \`Car\` and \`Bike\`
              may inherit a method \`move()\` from \`Vehicle\`, they can each implement \`move()\` differently based on their unique 
              characteristics.
      
      #### Types of Inheritance:

      - **Single Inheritance**: 
            ~ Involves one class inheriting from another. For example, a \`Car\` class can inherit from a \`Vehicle\` class.
      
      - **Multiple Inheritance**: 
            ~ In some languages (like C++), a class can inherit from more than one class. However, languages like Java only support single 
              inheritance to avoid ambiguity. Java achieves multiple inheritance through interfaces.
      
      #### Real-World Example:

      - Consider a class hierarchy where you have a general \`Animal\` class. Specific animals like \`Dog\` and \`Cat\` inherit from \`Animal\`.
        They share common traits like \`eat()\` or \`sleep()\` but can also have specialized behaviors like \`bark()\` for dogs or \`meow()\` 
        for cats.

      \`\`\`

      class Animal {
        public void eat() {
          System.out.println("This animal is eating");
        }
      }
      
      class Dog extends Animal {
        public void bark() {
          System.out.println("The dog is barking");
        }
      }
      
      class Cat extends Animal {
        public void meow() {
          System.out.println("The cat is meowing");
        }
      }

      \`\`\`

      #### Advantages of Inheritance:

      - **Code Reusability**: Once a behavior is defined in a parent class, it can be reused by all subclasses.
      - **Reduced Redundancy**: Common attributes or methods only need to be defined once in the parent class.
      - **Maintainability**: Changes made in the parent class automatically propagate to the subclasses, making the system
          easier to maintain and update.

      #### Disadvantages of Inheritance:
      - **Tight Coupling**: Subclasses are tightly coupled with the parent class, meaning changes in the parent class can affect all subclasses.
      - **Increased Complexity**: Overuse of inheritance can lead to complex class hierarchies, which may become difficult to manage and
           understand.
      
      - In summary, inheritance provides a mechanism to model hierarchical relationships between classes, enabling code reusability and 
        extensibility in software design. It's a powerful tool but should be used wisely to avoid overly complex systems.

        
    `,
    t_img: inheritance,
  }
  

];

export default tech_data;
