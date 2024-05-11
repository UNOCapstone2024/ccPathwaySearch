## Application Intro
This application is a redesign of the UNO guided pathways web page. The goal is to make the process easier for users to find a specific guided pathway. This will be determined by a selected community college degree, area of study, or desired UNO degree.

### Technology 

The site is hosted with an Apache web server, and it uses TypeScript and PHP to serve the content. <br>
The TypeScript modules are responsible for generating and filtering the results table. PHP is responsible for the design of the web page, and it makes use of the TypeScript modules to display the desired content.
<br><br>

## How to Use

### Webpack
- A webpack configuration file is availabile within `src/tstables/webpack.config.js`. This is not a production configuration and should not be used as such.
- For a production deployment, remove the `dev-tool` entry and change the `mode` to `production`
- For those unfamiliar with webpack, you will need to install it and simply run...
`webpack` within the `tstables` directory. This will generate the JS modules from tstables and put them in `src/dist/`.

### Configuration
- To configure the paths for local development, navigate to the `src/config.php` and verify that `$mode` is set to 1. Set to 0 for production deployment.

#### Development Server
- To fire up a development server, follow the webpack steps above then install php.
- Once php is installed, navigate to the `src/` directory and run: 
```bash 
php -S 127.0.0.1:8000
```
- Then, navigate to the url provided and you should see the site.

#### Dependencies (subject to significant change)
- cd into `src/tstables/`
- Run `npm install`
- Move the generated `node_modules` folder into `ccPathwaySearch/src/` directory
- You should be all set!

### Technical Documentation (TBD)
- The `docs/technical-documentation/` directory can be used for this projects long-form report, written in whichever format (or wherever) the doc lead <mark>Anna</mark> chooses

### Doc generation
- To generate docs for this project...
1. Install typedoc
```bash
npm install -g typedoc 
```
2. And run this command from the root of the project
```bash
npx typedoc --tsconfig src/guided_pathways/tsconfig.json --name ccPathwaySearch src/guided_pathways/src/index.ts 
```

### Deployment
Deyployment of the Guided Pathways project is mostly a black box. However, during the course of development, we had contact with a developer working for UNO and were thus able to make deployments.

The process for doing so is as follows...
1. Compile `guided_pathways` modules into JavaScript by running `webpack` within the `src/guided_pathways` directory.
2. Move styles and necessary HTML into `src/deploy.vm`
    - For this project, copy the HTML in between the `.vm start` and `.vm end` comments within `src/index.php`, into the `src/deploy.vm` file within the `[system-view:external]` section
3. Provide compiled JavaScript file and .map file (produced by webpack) along with the `deploy.vm` file to an administrator. They will to be able to actually deploy it.

### Test Suite
The guided_pathways_unit_test.py file contains our unit tests. The process for running that file is as follows. If you have already installed Python and Selenium, open a terminal and skip to step 4.
1) Download Python from Python's website https://www.python.org/downloads/
2) Open a terminal on your computer.
3) In the terminal, run `pip install selenium`.
4) Open guided_pathways_unit_test.py and change the host variable to the the URL of the site you want to test. The default is set to `http://localhost:8000`. To test the production version use `https://www.unomaha.edu/registrar/students/before-you-enroll/transfer-credit/guided-pathways/index.php`.
5) Run `Python3 guided_pathways_unit_test.py` and wait for the results to show in the terminal.

Note: If more classes are added to a specific selection from an input, the list of expected classes for that input will have to be updated in the Python file as well.
   
   
## Release Notes
Include a section called, "Release notes" - explain what is working in this submission (add explanation if this is not consistent with the milestone as described in the Project Plan)

### m1
The basis for stacked search TypeScript modifications complete. Testing has begun.

### m2
The project has met all of the goals for milestone two except the mobile design. All other enhancements have been met as of March 21st. Basically, initially proposed enchancements implemented

### m3
Responsive design basis set in place. Carousel mentioned in meetings but not yet implemented. Support for dark-mode.

### m4
Responsive design finished, carousel implemented but not deployed, basis for deployment strategy set in place and a few test deploys have taken place.

### m5
All testing complete, all features in scope complete, successful dev.unomaha deploy.

### SEE THE GITHUB RELEASES FOR MORE DETAILS PER RELEASE

0.1.0 - Deployment testing. Forms working, but lacks responseive design and input blocking
0.1.1 - Forms working, responsive design working, and input blocking.
0.1.2 - Form styling done + final responsive design styling + carousel + dark mode

## Alternative branches
- All other branches are feature branches contributing to `main`
