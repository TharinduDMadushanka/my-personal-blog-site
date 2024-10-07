import techImg1 from '../../assets/pages/Tech/data/java.jpg';

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
    t_img: techImg1,
  }
];

export default tech_data;
