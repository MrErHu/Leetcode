class Solution {
public:
    bool isValid(string s) {
        stack<char> in;
        int end=s.size();
        int beg=0;
        while(beg<end){
            switch(s[beg]) {
                case '(':
                    in.push(s[beg]);
                    break;
                case '[':
                    in.push(s[beg]);
                    break;
                case '{':
                    in.push(s[beg]);
                    break;
                case ')':
                    if (in.empty() || in.top()!='(')
                        return false;
                    else
                        in.pop();
                    break;
                case ']':
                    if (in.empty() || in.top()!='[')
                        return false;
                    else
                        in.pop();
                    break;
                case '}':
                    if (in.empty()|| in.top()!='{')
                        return false;
                    else
                        in.pop();
                    break;

            }
            ++beg;
        }
      if(in.empty())
          return true;
      return false;

    }
};