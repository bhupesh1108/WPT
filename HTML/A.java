public class A{
    public static void main(String[] arg){
        StringBuilder sb=new StringBuilder("java");
        String s="Script";
        sb.append(s);
        sb.substring(4);
        int a=sb.indexOf(s);
        System.out.println(a);

    }
}