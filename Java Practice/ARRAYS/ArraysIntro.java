package ARRAYS;

class ArraysIntro {
  public static void main(String [] args) {
    Student sparsh = new Student("Sparsh", 22);
    Student krishna = new Student("Krishna", 21);
    Student [] students = { sparsh, krishna };
    // int arr [] = new int[20];
    for(int i=0;i<students.length;i++){
      System.out.println(students[i].getName() + " " + students[i].getAge());
    }
  }
}

class Student {
  String name;
  int age;

  Student(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() {
    return this.name;
  }

  public int getAge() {
    return this.age;
  }

  public void setName(String name){
    this.name = name;
  }

  public void setAge(int age){
    this.age = age;
  }
}