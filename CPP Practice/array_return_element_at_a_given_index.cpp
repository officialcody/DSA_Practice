#include<iostream>
using namespace std;

class Solution{
    public:
    int findElementAtIndex(int a[], int n, int key) {
        return a[key];
    } 
};

int main() {
  int t;
  cout << "Enter number of test cases: " << endl;
  cin >> t;
  while(t--) {
    int n, key;
    cout << "Enter number of elements in array and key(seperated by space): " << endl;
    cin >> n >> key;
    int a[n];
    cout << "Enter each element of Array(seperated with space): " << endl;
    for(int i=0;i<n;i++) cin >> a[i];
    Solution ob;
    cout << ob.findElementAtIndex(a, n, key) << endl;
  }
}