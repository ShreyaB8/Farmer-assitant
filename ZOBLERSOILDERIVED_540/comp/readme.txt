8/14/2003

DESCRIPTION:  GLOBAL SOIL TYPES, 0.5-DEGREE GRID (MODIFIED ZOBLER) - 106 SOIL 
              TYPES

REFERENCE:  Post, W.M., and L. Zobler. 2000.  Global Soil Types, 0.5-Degree 
            Grid (Modified Zobler).  Data set.  Available on-line 
            [http://www.daac.ornl.gov] from Oak Ridge National Laboratory
            Distributed Active Archive Center, Oak Ridge, Tennessee, U.S.A.

COMMENTS:
---------

In addition to providing the Zobler soil type data in several formats,
this data set also contains a series of codes used for converting  
the original Zobler Soil Types at 1 degree resolution to a grid containing 
0.5 x 0.5 degree cells. Please note that while this data is at a 0.5 
degree resolution, the true resolution and accuracy of the map is not 
actually increased.  Rather, the 1 degree squares are divided 
into 4 0.5 degree squares to better represent continental boundaries 
and shorelines/islands.  Please note that the source data for this map
are distributed by Webb et al. (1991) and (2000) and include the full range 
of soil type classes (106).  The source data, which is included with this 
data set, contains 2 columns of information.  The first column contains a 
continent code and the second column is a soil type code (please see keys 
zsoiltype_key.txt and cont_codes.txt).  

NOTE:  At the request of our user community, we have included 
GRID ASCII and  ARC/INFO export file (*e00) versions of these data.  These 
files were created using a combination of awk and perl scripts.  (8/2003)
If  you are interested in these data files, please read ahead to the 
FILES and FORMAT sections of these documents.



CREATING THE .5 DEGREE GRID:
----------------------------

A code was written (one2half.c) to take the file CONTIZOB.LER
and divide the cells into quarters.  This code also reads in a land/water file
(land.wave) that specifies the cells that are identified as land at 
0.5 degrees.  The code checks for consistency between the newly 
quartered map and the land/water map to which the quartered map is to be 
registered.  If there is a discrepency there was an attempt to fix it (a call
to fixcell.c).  For example, cells identified as water by the land/water mask 
are forced to be water in the soils map.  If cells are identified as land by 
the land/water mask but were considered water at 1 degree, the code looks at 
the surrounding 8 cells and assigns the majority soil type value for the 
neighborhood to the cell in question.  If there are no surrounding land cells 
then it is kept as water in the hopes that on the next pass one or more of the
surrounding cells might be converted from water to a soil type.  The
process is iterated 5 times for the globe.  The remaining cells that should 
be land but couldn't be determined from surrounding cells (mostly islands that
are resolved at 0.5 degree but not at 1 degree) were output to a file with
coordinate information.  A temporary map was outputted with a flag of -9
indicating where data was required.  This process was repeated for the continent
codes in CONTIZOB.LER as well (one2halfc.c and fixcellc.c).  

The areas coded with a -9 were used to consult the printed versions of 
the soil map. The program manfix.c was used by an operator to interactively 
input the correct soil and continent codes for the map.  This process 
could be done manually or by preparing a file of changes (new_fix.dat) and 
redirecting stdin.  The result (contizob.half) is in the form of the original 
CONTIZOB.LER file but is 4 times larger.  GRID ASCII (zsoiltype.dat and 
contcode.dat) and ESRI EXPORT file (zsoiltype.e00 and contcode.e00) versions
of this data are also available for GIS users.  



FILES:
------

COMPANION FILES in /comp:
------------------------_

readme.txt - this file

zsoiltype_key.txt - a key including the names and abbreviations of the soil 
types included in this data set.

cont_codes.txt - a key including the continent codes used in this data set.

postzobler.jpg - graphic

README_images - note reminding ftp users to download all graphics and
companion files. 

create_half_degree_grid.tar.gz - This archive contains 9 files described 
below. Gzip and tar utilities were used to compress these files in UNIX.  

     The file is available at
     http://daac.ornl.gov/daacdata/global_soil/ZoblerSoilDerived/comp/

     The following original data file, documentation, and code files 
     are referenced in the description for creating the .5 degree grid 
     data.
 
     	readme.txt - original readme documentation

     	CONTIZOB.LER - original data file, 1 degree resolution, contains 
     	continent code and soil type information in 2 columns

	land.wave - land water mask, .5 degree resolution

	one2half.c - c code written to divide the 1 degree soil type cells 
	into .5 degree cells.  Please see section titled "CREATING THE .5 
	DEGREE GRID" for more information.

	one2halfc.c - c code written to divide the 1 degree continent cells 
	into .5 degree cells.  Please see section titled "CREATING THE .5 
	EGREE GRID" for more information.

	fixcell.c - called from one2half.c to reassign values (soil types) 
	of cells flagged by the land/water mask.  Please see section titled 
	"CREATING THE .5 DEGREE GRID" for more information.

	fixcellc.c - called from one2half.c to reassign values (continent code)
	of cells flagged by the land/water mask.  Please see section titled 
	"CREATING THE .5 DEGREE GRID" for more information.

	manfix.c - c program written to aid user in interactively assigning 
	soil and continent codes to pixels incorrectly identified as "water".
	Please see section titled "CREATING THE .5 DEGREE GRID" for more information.

	new_fix.dat - input file written as a companion to manfix.c



DATA FILES in /data:
--------------------

contizob.half - data file containing continent codes and soil types, in ASCII
format. (2 columns of data) 

z_soiltype.dat - GRID ASCII file containing soil type codes from contizob.half.

contcode.dat - GRID ASCII file containing continent codes from contizob.half.

z_soiltype.e00 - ESRI export file containing soil type codes from contizob.half.

contcode.e00 - ESRI export file containing continent codes from contizob.half.



GIS FORMATS:
------------------------------------------------------------------------------

1.  GRID ASCII - a single ASCII array with integer values.  (Coordinates
listed below are in decimal degrees.) The ASCII file consists of header
information containing a set of keywords, followed by cell values in 
row-major order.  The file format is:

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
ncols         720
nrows         360
xllcorner     -180
yllcorner     -90
cellsize       0.5
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


2. ESRI EXPORT file (*.e00) - is a proprietary format that can be imported into
ARC/INFO GRID using the following command at an ARC prompt:

IMPORT <option> <interchange_file> <output>

Arguments
<option> - GRID
<interchange_file> - the name of the *e00 file to be converted
<output> - a user specified output file



REFERENCES:
-----------

Webb, R. W., C. E. Rosenzweig, and E. R. Levine. 2000. Global Soil Texture 
and Derived Water-Holding Capacities (Webb et al.). Data set.  Available 
on-line [http://www.daac.ornl.gov ] from Oak Ridge National Laboratory 
Distributed Active Archive Center, Oak Ridge, Tennessee,
U.S.A. 

Webb, Robert S., Cynthia E. Rosenzweig, and Elissa R. Levine, 1991. A Global 
Data Set of Soil Particle Size Properties. NASA Technical Memorandum 4286. 

