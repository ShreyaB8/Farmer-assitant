readme.txt
4/12/04

DESCRIPTION: 

GLOBAL DISTRIBUTION OF FAO SOIL UNITS(TYPES) AT 1X1 RESOLUTION          
106 SOIL TYPES and 27 SOIL TYPES AGGREGATED AT THE GREAT GROUP LEVEL                                                    

CITATION: 

Zobler, L. 1999. Global Soil Types, 1-Degree Grid (Zobler).
     Data set.  Available on-line [http://www.daac.ornl.gov] from
     Oak Ridge National Laboratory Distributed Active Archive Center,
     Oak Ridge, Tennessee, U.S.A. 
                                                                                
COMMENTS:                                                                       

       This data set includes a subset of Zobler's World Soil File for Global
       Climate Modelling (Zobler 1986).  Soil types (units) are described 
       at two levels of detail including 106 soil types and 27 soil types 
       aggregated at the Great Group level.  At the request of our user 
       community we have included two additional formats (GRID ASCII and 
       ARC/INFO EXPORT *.e00) of these data in addition to the original 
       ASCII format (8/2003). 

       For more information about Zobler's World Soil File for Global 
       Climate Modelling, please see: 
       (http://daac.ornl.gov/daacdata/global_soil/ZoblerSoil/comp/Zobler_NASA_TM_87802_1986.pdf) and 
       (http://daac.ornl.gov/daacdata/global_soil/ZoblerSoil/comp/NASATM100685.pdf)
       The complete data set (which includes soil units [27], 
       soil units [107], soil surface texture, surface slope, and 
       other phase information) is available as a part of: 

         Staub and Rosenzweig's GISS Soil and Surface Slope, 1-Degree 
         from:  http://www.dss.ucar.edu/datasets/ds770.0.

       A modified version of these data is also available as: 

         Staub and Rosenzweig - Zobler Soil Type, Soil Texture, Surface Slope, 
         and Other Properties' 
         from: http://www.ngdc.noaa.gov/seg/eco/cdroms/gedii_a/datasets/a11/sr.htm.


-------------------------------------------------------------------------
FILES:

COMPANION FILES IN /comp:

readme.txt - this file 

readme2.txt - a listing/key of the FAO/UNESCO continent codes referenced in 
              and the Zobler soil types (27 and 106) referenced in this
              data.

README_images - note reminding ftp users to download all graphics and 
companion files

soil1x1.help - original documentation, use with soil1x1.fao

zobler1x1.gif - graphic

-------------------------------------------------------------------------

DATA FILES IN /data:

1. cont_code.asc - GRID ASCII file containing FAO continent codes (2-10); please see
                   readme2.txt in the /comp directory for the continent code
                   key.  These values correspond to the volume numbers of the
                   nine major continental divisions in the FAO/UNESCO Soil Map
                   of the World Vols. 2-10 (1971-1981).

2. cont_code.e00 - same as above in ESRI export file format.

3. zstype106.asc - GRID ASCII file containing Zobler soil types (106); please see
                   readme2.txt in the /comp directory for the soil type key.
                   These values correspond to the sequence number of the soil types
                   in Zobler's (1986) World Soil Data File.

4. zstype106.e00 - same as above in ESRI export file format. 

5. soil1x1.fao - original data file, includes 27 soil types aggregated at the
                 great group level in an  ascii array.  Please see 
                 soil1x1.help for formatting information.  Please see
                 readme2.txt in the /comp directory for the soil type key.

6. zstype27.asc  - soil1x1.fao (includes 27 soil types) reformatted into GRID 
                   ASCII format.  Please see readme2.txt in the /comp 
                   directory for the soil type key. 

7. zstype27.e00 -  soil1x1.fao (includes 27 soil types) reformatted into 
                   ESRI export file format. Please see readme2.txt in the
                   /comp directory for the soil type key.



-------------------------------------------------------------------------

GIS FORMATS:  

1. GRID ASCII - a single ASCII array with integer values. 
(Coordinates listed below are in decimal degrees.) The ASCII file consists 
of header information containing a set of keywords, followed by cell values in
row-major order. The file format is

<NCOLS xxx>
<NROWS xxx>
<XLLCORNER xxx>
<YLLCORNER xxx>
<CELLSIZE xxx>
{NODATA_VALUE xxx}
row 1
row 2
.
.
.
row n
where xxx is a number, and the keyword NODATA_VALUE is optional and defaults to
-9999.  Row 1 of the data is at the top of the grid, row 2 is just under row 1
and so on.  The end of each row of data from the grid is terminated with a
carriage return in the file.

First six lines of file (header):
ncols         360
nrows         180
xllcorner     -180
yllcorner     -90 
cellsize       1
NODATA_value  -9999

To import this file into ArcInfo use the following command at an ARC prompt:

ASCIIGRID <in_ascii_file> <out_grid> {INT | FLOAT}

Arguments
<in_ascii_file> - the ASCII file to be converted.
<out_grid> - the user specified name of the grid to be created.
{INT | FLOAT} - the data type of the output grid.
INT - an integer grid will be created.
FLOAT - a floating-point grid will be created.

Note:  This data can also be imported into ArcView (with Spatial Analyst) and 
ArcGis as ASCII Raster data.

2. EXPORT FILE - this data can be imported into 
ARC/INFO GRID using the following command at an ARC prompt:

IMPORT <option> <interchange_file> <output>

Arguments
<option> - GRID
<interchange_file> - the name of the *e00 file to be converted
<output> - a user specified output file

Note: extensions also exist to import *e00 files into ArcView and ArcGis. 

-------------------------------------------------------------------------
                                                                                
REFERENCES:                                                                      

         Zobler, L.,  A world soil file for global climate                      
               modeling, NASA Technical Memorandum 87802, 32 pp., 1986.         
                                                                                
                                                                                
         Staub, B. and Rosenzweig, C., Global digital data sets of soil type, 
               soil texture, surface slope, and other properties, NASA
               Technical Memorandum 100685, 16 pp., 1987.

