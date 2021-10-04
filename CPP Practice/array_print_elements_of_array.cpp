#include<bits/stdc++.h>
using namespace std;

class Solution{
public:
    //Just print the space seperated array elements
	void printArray(int arr[], int n) {
	    for(int i=0;i<n;i++) cout << arr[i] << " ";
	}
};

int main() {
  int t;
  cout << "Enter number of test cases: " << endl;
  cin >> t;
  while(t--) {
    int n, key;
    cout << "Enter number of elements in array: " << endl;
    cin >> n;
    int a[n];
    cout << "Enter each element of Array(seperated with space): " << endl;
    for(int i=0;i<n;i++) cin >> a[i];
    Solution ob;
    ob.printArray(a, n);
  }
}