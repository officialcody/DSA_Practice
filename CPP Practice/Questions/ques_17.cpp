// Simple Calculator
#include<iostream>
using namespace std;

int main() {
  int n1, n2;
  char op;
  cout << "Enter the numbers: ";
  cin >> n1 >> n2;
  cout << "Enter the operands: ";
  cin >> op;
  switch(op){
    case '+':
      cout << n1 + n2 << endl;
      break;
    case '-':
      cout << n1 - n2 << endl;
      break;
    case '*':
      cout << n1 * n2 << endl;
      break;
    case '/':
      cout << n1 / n2 << endl;
      break;
    case '%':
      cout << n1 % n2 << endl;
      break;
    default:
      cout << "Operator not found!!!" << endl;
      break;
  }
  return 0;
}