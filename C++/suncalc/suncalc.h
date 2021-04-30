#ifndef SUNCALC_H
#define SUNCALC_H

#include "math.h"
#include "time.h"

#define PI 3.14159265358979323846
#define rad PI/180
//date/time constants and conversions
#define daySeconds  60 * 60 * 24
#define J1970   2440588
#define J2000   2451545
//general calculations for position
#define e  rad * 23.4397 // obliquity of the Earth
// struct for coords
struct coords{
    float dec;
    float ra;
};

struct angle{
    float azimuth;
    float altitude;
};

class Suncalc{
    private:
        float toDays(time_t date);
        float toJulian (time_t date);
        coords sunCoords(float d);
        float solarMeanAnomaly(float d);
        float eclipticLongitude(float M);
        float declination(float l ,float b);
        float rightAscension(float l ,float b);
        float siderealTime(float d, float lw);
        float azimuth(float H, float phi,float c_dec);
        float altitude(float H, float phi ,float c_dec);
    
    public:
        angle getPosition(time_t date , float lat , float lng);
};


#endif
