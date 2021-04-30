#include <stdio.h>
#include "suncalc.h"

int main(){
    time_t current_time;
    current_time = time(NULL);
    printf("Time by seconds %ld\n" , current_time);
    float lat = 10.816572 ;
    float lng = 106.674488;
    Suncalc suncalc;
    angle sun_angle = suncalc.getPosition(current_time,lat,lng);
    printf("azimuth = %f \naltitude = %f\n",sun_angle.azimuth,sun_angle.altitude);
    return 0;
}