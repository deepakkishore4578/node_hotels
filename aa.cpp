#include <bits/stdc++.h>

using namespace std;

// Function to check if two substrings are almost matching
bool areAlmostMatching(const string& sub1, const string& sub2, int k) {
    if (sub1.length() != sub2.length()) {
        return false;
    }
    int diffCount = 0;
    for (int i = 0; i < sub1.length(); ++i) {
        if (i == k) {
            if (sub1[i] != sub2[i]) {
                diffCount++;
            }
        } else {
            if (sub1[i] != sub2[i]) {
                return false;
            }
        }
    }
    return diffCount == 1;
}

int cnt=0;

// Function to generate and print almost matching pairs of substrings
void generateAlmostMatchingPairs(const string& s, int k) {
    int n = s.length();
    map<int, vector<string> > substringMap;  // Map for substrings categorized by their length
    
    // Store all substrings categorized by their length
    for (int start = 0; start < n; ++start) {
        for (int end = start + 1; end <= n; ++end) {
            string substring = s.substr(start, end - start);
            substringMap[substring.length()].push_back(substring);
        }
    }
    
    // Compare substrings of the same length and print valid pairs
    for (map<int, vector<string> >::const_iterator it = substringMap.begin(); it != substringMap.end(); ++it) {
        // int cnt=0;
        const vector<string>& substrings = it->second;
        for (int i = 0; i < substrings.size(); ++i) {
            for (int j = i + 1; j < substrings.size(); ++j) {
                const string& sub1 = substrings[i];
                const string& sub2 = substrings[j];
                if (areAlmostMatching(sub1, sub2, k)) {
                //     // cout << "Pair: (" << sub1 << ", " << sub2 << ")" << endl;
                      cnt++;
                }

            }
        }
    }
}

int main() {
    string s = "abacaba";
    int k = 1; 
     generateAlmostMatchingPairs(s, k);
    cout<<cnt*2<<endl;
    return 0;
}
