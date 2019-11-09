import java.awt.*;
import java.util.Iterator;
import java.util.Random;
import java.util.HashSet;

public class ColorGen {

    public ColorGen(){

    }

    public static ColorName genRandom(){

        Random rand = new Random();
        int redInt   = rand.nextInt(255);
        int blueInt = rand.nextInt(255);
        int greenInt = rand.nextInt(255);
        //System.out.println(blueInt + " " + greenInt + " " + blueInt);

        if(blueInt - redInt <= 50){
            //blue and red are close blue is larger
            int decision = rand.nextInt(1);
            if(decision == 1){
                //make sure green is far

                greenInt = rand.nextInt(205 - blueInt) + blueInt + 50;
            }
            else {
                try {
                    greenInt = rand.nextInt(redInt - 50);
                } catch (IllegalArgumentException e) {
                    return genRandom();
                }

            }
            return new ColorName(redInt, blueInt, greenInt);

        }
        else if(redInt - blueInt <= 50) {
            int decision = rand.nextInt(1);
            if (decision == 1) {
                greenInt = rand.nextInt(205 - redInt) + redInt + 50;
            } else {
                try{
                    greenInt = rand.nextInt(blueInt - 50);
                }catch (IllegalArgumentException e) {
                    return genRandom();
                }
            }
            return new ColorName(redInt, blueInt, greenInt);
        }
        else if(redInt - greenInt <= 50){
            int decision = rand.nextInt(1);
            if (decision == 1) {
                blueInt = rand.nextInt(205 - redInt) + redInt + 50;
            } else {
                try{
                    blueInt = rand.nextInt(greenInt - 50);
                }catch (IllegalArgumentException e) {
                    return genRandom();
                }

            }
            return new ColorName(redInt, blueInt, greenInt);
        }
        else if(greenInt - redInt <= 50){
            int decision = rand.nextInt(1);
            if (decision == 1) {
                blueInt = rand.nextInt(205 - greenInt) + greenInt + 50;
            } else {
                try{
                    blueInt = rand.nextInt(redInt - 50);
                }catch (IllegalArgumentException e) {
                    return genRandom();
                }
            }
            return new ColorName(redInt, blueInt, greenInt);
        }
        else if(blueInt - greenInt <= 50){
            int decision = rand.nextInt(1);
            if (decision == 1) {
                redInt = rand.nextInt(205 - blueInt) + blueInt + 50;
            } else {
                try{
                    redInt = rand.nextInt(greenInt - 50);
                } catch (IllegalArgumentException e) {
                    return genRandom();
                }
            }
            return new ColorName(redInt, blueInt, greenInt);
        }
        else if(greenInt - blueInt <= 50){
            int decision = rand.nextInt(1);
            if (decision == 1) {
                redInt = rand.nextInt(205 - greenInt) + greenInt + 50;
            } else {
                try{
                    redInt = rand.nextInt(blueInt - 50);
                } catch (IllegalArgumentException e) {
                    return genRandom();
                }
            }
            return new ColorName(redInt, blueInt, greenInt);
        }
        else{
            return new ColorName(redInt, blueInt, greenInt);
        }
    }
    public static void main(String args[]){
        while(true){
            ColorName n = genRandom();
            System.out.println(n.blue + ", " + n.green + ", " + n.red);
        }
    }


}
