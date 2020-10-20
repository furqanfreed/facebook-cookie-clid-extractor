
## Abouot

we were using `facebook Click ID` for tracking and found that for some reason clicks coming in through the ads without the fbclid-parameter attached to the url, there would be several reason that it could happen, so to fix this we are using this script which pulls out the fbclid from the cookies (it usually get stored there even though it doesn't appear in the url) and then it reassigns that in the url without reloading (pushState).


So if you are using `fbclid` for tracking and yuo are missing some click you can use this script.


## TEST

### Browse sponcer link from facebook

[a facebook sponcer link](https://www.mongodb.com/collateral/how-modern-devops-teams-use-mongodb-atlas-to-enhance-productivity?utm_source=facebook&utm_medium=ps_paid_social&utm_campaign=jf_fb_ww_highcpa_dg_evergreen_commtoatlasmigration_wp_itdm_fullfunnel&utm_content=prospecting_emaillistlal_highcpa_auto_whitepaper_image_na&utm_term=prospecting_emaillistlal_highcpa_auto&fbclid=IwAR2i2gk7IDUbQ3vjz_1M-5MYhQPWPP7a-o-6JlXGGDQ-4M6fFjKjGkD8MaY)

### Open browser developer console 
[see how to open browser developer console](https://support.airtable.com/hc/en-us/articles/232313848-How-to-open-the-developer-console) and copy paste below code and that should give you same fbclid as given in url.

```javascript
var cookies = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
var fbclick = cookies._fbc;

console.log(fbclick);	
```

**References:**
1. https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/
2. https://developers.facebook.com/community/threads/201248874170113/

**Script Credit:**
https://github.com/elbomnetanel


## Licence            
This package is [Treeware](https://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/furqanfreed/fb_cookie_clid_extractor) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.

[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/furqanfreed/fb_cookie_clid_extractor)