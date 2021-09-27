public class SinglyLinkedList<T> {
  public class Node<T> {
    T data;
    Node<T> next;
  
    Node(T data) {
      this.data = data;
      this.next = null;
    }
  }
  
  Node<T> head = null;

  public void addElementAtLast(T data) {
    if(head == null){
      head = new Node(data);
    } else {
      Node<T> currentNode = head;
      while(currentNode.next != null){
        currentNode = currentNode.next;
      }
      currentNode.next = new Node<T>(data);
    }
  }

  public void display() {
    Node<T> currentNode = head;
    if(currentNode == null) {
      System.out.println("List is empty!!");
      return;
    }
    System.out.print("Linked List: ");
    while(currentNode != null){
      System.out.print(currentNode.data + " ");
      currentNode = currentNode.next;
    }
  }
  public static void main(String [] args) {
    SinglyLinkedList<Object> linkedList = new SinglyLinkedList<>();
    linkedList.addElementAtLast("Sparsh");
    linkedList.addElementAtLast(2);
    linkedList.addElementAtLast(false);
    linkedList.addElementAtLast(4.25);
    linkedList.addElementAtLast(5);
    linkedList.addElementAtLast(6);
    linkedList.display();
  }
}
