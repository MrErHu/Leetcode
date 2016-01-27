/*
第一个方法是自己写的，效率不怎么高
*/
class Solution {
public:
    int titleToNumber(string s) {
        int index=1;
        int i,num=0;
        int ascii_num;
        for(i=s.size()-1;i>=0;--i){
            ascii_num=s[i]-64;
            num+=ascii_num*index;
            index*=26;
        }
        return num;
    }
};
/*
效率相对较高
*/
class Solution {
public:
    int titleToNumber(string s) {
        int result = 0;
    for (int i = 0; i < s.size(); result = result * 26 + (s[i] - 'A' + 1), i++);
        return result;
    }
};
class Solution {
public:
    int titleToNumber(string s) {
        int result = 0;
    for (int i = 0; i < s.size(); ++i)
    result = result * 26 + (s[i] - 'A' + 1);
        return result;
    }
};
