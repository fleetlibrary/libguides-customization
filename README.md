# libguides-customization
Backups for customization files in LibGuides CMS. 

## Current setup:
**LibGuides:** We have launched new styles across our LibGuides environment. This will continue to be tweaked. This CSS is in styles-libguides.css.

**Website:** We are also moving our HTML website over to a LibGuides 'group' which allows for an HTML page as a front door. The other website pages will be LibGuides pages that are slightly customized to be cleaner (e.g. removing breadcrumbs, search bar, system footer). 
This CSS is in styles-website.css and also contains some inline scripts, as Libguides wants those loaded in together. 

## Loading in customizations
Currently, customization code is being inserted into all pages by Libguides. We copy it into a customization field and it then inserts it.
I think it may be possible to host standalone .css and .js files and just reference them from the customization field, but Springshare is idiosyncratic and I haven't tried that yet. If it works, it would definitely be better!


## Please note:
These files were created for copy-and-paste into the SpringShare LibGuides environment. The idiosyncrasies of this platform mean that the files don't work in this codespace the way they do within Libguides (for example, styles are applied within a specific dialog there and not referenced directly from custom HTML). If using these files to test code outside of the LibGuides environment, please make copies rather than altering these files to interact properly.
