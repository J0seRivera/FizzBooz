var numeros = 100;
divisible = false;
for (i = 1; i < 101; i++)
{
    divisible = false;
    if (i % 3 == 0)
    {
        document.write("Fizz");
    }
    if (i % 5 ==0)
    {
        document.write("Bozz");
    }
    if (i%3 != 0 && i % 5 != 0)
    {
        document.write(i);
    }
    document.write("<br />");
}