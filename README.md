# readme
explanations for how to use the files in this repo!

## LibGuides:
We are modifying the LibGuides base styles to better represent RISD's identity. This CSS is in `styles-libguides-risd.css`. The base style from the vendor, which we are building on top of, can be found in `styles-libguides-vendor.css`.
* Copy css or js into the [Website group customization page](https://risd.libapps.com/libguides/groups.php?action=3&group_id=32556) for immediate testing. 
* **Please note** that code copied in this way layers on top of the libguides base and last uploaded RISD stylesheet, but the goal is to merge with the latter as much as possible.
* Open pull requests to update the master RISD stylesheet.
* Emily can deploy styles to the entire live system whenever needed/ready.


## Homepage:
The page at [risd.libguides.edu/homepage](risd.libguides.edu/homepage) will take the place of the one visible at [library.risd.edu](library.risd.edu).

This CSS is in `styles-homepage.css` (a few flavors currently exist) and also contains some inline scripts, as Libguides wants those loaded in together. There is a copy of the latest homepage in `html-homepage.html`.

* Copy code into the [Website group customization page](https://risd.libapps.com/libguides/groups.php?action=5&group_id=32556) for immediate testing. HTML goes in Look & Feel > Group Homepage > Customize Homepage Templates. 
* Open pull requests to update the master files.

## Header & Footer
The header and footer are loaded in separately. Files `html-footer` and `html-header` hold the current code. 
* Copy code into the Header and Footer dialogs within [Website group customization page](https://risd.libapps.com/libguides/groups.php?action=3&group_id=32556) for immediate testing.
* Open pull requests to update the master files.

