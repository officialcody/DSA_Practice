#include<bits/stdc++.h>
using namespace std;

class Solution{
public:	
	// swap k'th element from beginning and end
	void swapKth(int *arr, int n, int k) {
	    int temp = arr[k-1];
	    arr[k-1] = arr[n-k];
	    arr[n-k] = temp;
	}
};

int main() {
  int t;
  cout << "Enter number of test cases: " << endl;
  cin >> t;
  while(t--) {
    int n, k;
    cout << "Enter number of elements in array and k value(seperated with space): " << endl;
    cin >> n >> k;
    int a[n];
    cout << "Enter each element of Array(seperated with space): " << endl;
    for(int i=0;i<n;i++) cin >> a[i];
    Solution ob;
    ob.swapKth(a, n, k);
    for(int i=0;i<n;i++) cout << a[i] << " ";
    cout << '\n';
  }
  return 0;
}