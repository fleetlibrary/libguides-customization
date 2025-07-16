# libguides-customization
Backups for customization files in LibGuides CMS. 

The CSS here is meant to override LibGuides default styles (which I downloaded and stored in 'libguides-base-style.css'). It's a bit of trial and error.

## Current setup:
**LibGuides:** We are working to launch new styles across our LibGuides environment. This will happen in the coming days (as of 7/15) and continue to be tweaked. This CSS is in styles-libgudes.css. 

**Website:** We are also moving our HTML website over to a LibGuides 'group' which allows for an HTML page as a front door. The other website pages will be LibGuides pages that are slightly customized to be cleaner (e.g. removing breadcrumbs, search bar, system footer). 
This CSS is in styles-website.css. In theory, it should be everything in styles-libguides plus some extra code for the search and hours widgets, removing system defaults, etc.


## Please note:
These files were created for copy-and-paste into the SpringShare LibGuides environment. The idiosyncrasies of this platform mean that the files don't work in this codespace the way they do within Libguides (for example, styles are applied within a specific dialog there and not referenced directly from custom HTML). If using these files to test code outside of the LibGuides environment, please make copies rather than altering these files to interact properly.
