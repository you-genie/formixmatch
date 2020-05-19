# Gallery React
---
Testing application using `React` and `Material-ui`. 

### RUN
```
npm install 
npm start
```
as in console. PLEASE run `npm install` before running, due to dependency issues on material-ui.

### Structure
- icons  
logos, etc. temp images.
- public/images  
CAUTION: DO NOT CHANGE THE DIRECTION of those files. At least DO NOT move them to folders OUTSIDE OF `public`
- modules/  
  - components/
  react component folder, each exported in format. Used in subviews.
  - subviews/  
  minimal view files, used in views.
  - views/  
  works as router
