<center><h1>ccPathwaySearch</h1></center>

## Application Intro
This application is a redesign of the UNO guided pathways web page. The goal is to make the process easier for users to find a specific guided pathway. This will be determined by a selected community college degree, area of study, or desired UNO degree.

### Technology 

The site is hosted with an Apache web server, and it uses TypeScript and PHP to serve the content. <br>
The TypeScript modules are responsible for generating and filtering the results table. PHP is responsible for the design of the web page, and it makes use of the TypeScript modules to display the desired content.
<br><br>

<center><h2>How to Use</h2></center>

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

#### Technical Documentation (TBD)
- The `docs/technical-documentation/` directory can be used for this projects long-form report, written in whichever format (or wherever) the doc lead <mark>Anna</mark> chooses

#### Doc generation
- This project currently utilizes two separate doc generators: doxygen and jsdoc.
- First install doxygen and jsdoc, then run `make -C docs/` to generate docs for both platforms.
- The docs will generate into `docs/json-docs` and `docs/backend-docs`
- To clean up docs easily, just run `make clean -C docs/`

<center><h2>Release Notes</h2></center>
Include a section called, "Release notes" - explain what is working in this submission (add explanation if this is not consistent with the milestone as described in the Project Plan)

The project has met all of the goals for milestone two except the mobile design. All other enhancements have been met as of March 21st

0.1.0 - Deployment testing. Forms working, but lacks responseive design and input blocking
0.1.1 - Latest - Currently deployed, Forms working, responsive design working, and input blocking.

## Alternative branches
- feature-static-webpage
    - Branch was used as a testing ground for figuring out the structure of the site, work was taken from here and used in this branch.
    - Code will not be used at this time
- develop
    - Used as a merge point for all feature-* branches
- main
    - Used for completed, fully functional versions of the site
