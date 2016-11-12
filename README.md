# Angular-Skeleton
Skeleton to help kickstart small angular applications

## Development

#### Trying it out
1. Clone/Download this repo.
1. Run `npm install` inside the repo directory to install the dependencies, and build the vendor files.
1. Run `npm start` to build the src files and start the server.
1. Navigate to [http://localhost:9000](http://localhost:9000)

#### Gulp
* `gulp vendor` Build client side dependencies (JS/CSS/Fonts) listed in the GulpFile.
* `gulp src` Build all (JS/SCSS/HTML) files under `app/src` for the client side.
* `gulp dev` Start API server and watch client side files for changes (rebuilds/refreshes page when they do)

#### Live Reloading
This project uses [gulp-livereload](https://www.npmjs.com/package/gulp-livereload) for auto refreshing the page when changes are made (see above). For this to work you will need one of the required browser extensions. (Chrome ext. [here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en))

#### Improvements / Issues
* Feel free to submit a Github issue/PR if you have any problems/improvements for this project.

## ToDo
* Implement backend, haven't decided what framework if any.
* Profile view, display information/posts by a specified user
* Users view, display a list of users, with links to each of their profiles
* Home view, probably display a list of friend's posts or something
* Split up the backend into a separate repo?

## Current Tech
* **Angular** (Client side framework)
* **UI Router** (Client side router)
* **Babel** (Transpiles client side code to ES5)
* **Font Awesome** (Great icons to start with)
* **Sass** (More extensive/flexible stylesheets)
* **Gulp** (Build system)
* **Express** (Bare bones static serving at the moment)