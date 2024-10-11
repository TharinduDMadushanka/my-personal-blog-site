import javaImg from '../../assets/pages/Tech/data/java.jpg'; // Changed import name for consistency
import oopImg from '../../assets/pages/Tech/data/oop.png';   // Changed import name for consistency

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
  }
];

export default tech_data;
