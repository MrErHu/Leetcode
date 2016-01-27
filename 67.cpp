class Solution {
public:
    string addBinary(string a, string b) {
        if(a.size()>b.size())
            for(int i=a.size()-b.size();i>0;--i)
                b="0"+b;
        if(b.size()>a.size())
            for(int i=b.size()-a.size();i>0;--i)
                a="0"+a;
        string result(a.size()+1,'0');
        int i=a.size()-1;
        int k=result.size()-1;
        bool flag=false;
        while(i>=0){
            switch(a[i]+b[i]){
                case '0'+'0':
                    if(!flag){
                        result[k]='0';flag=false;
                    }else{
                        result[k]='1';flag=false;
                    }
                    break;
                case '1'+'0':
                    if(!flag){
                        result[k]='1';flag=false;
                    }else{
                        result[k]='0';flag=true;
                    }
                    break;
                case '1'+'1':
                    if(!flag){
                        result[k]='0';flag=true;
                    }else{
                        result[k]='1';flag=true;
                    }
            }
            --i;--k;
        }
        if(flag) result[0]='1';
        if(result[0]=='0')
            result.erase(0,1);
        return result;
    }
};