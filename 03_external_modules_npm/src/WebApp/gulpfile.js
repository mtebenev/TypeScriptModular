var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var path = require("path");
var url = require("url");
var merge = require('merge2');

var destinationPath = "./wwwroot/app"; // Note: out in tsconfig defines only file name. this destination path should define the path location
var tsProjects = {}; // Keeps ts projects module_name->project. Note: In order to watch for changes we have to keep projects outside of gulp tasks

function getSourceRoot(projectPath) {

	var scriptsPath = path.resolve(projectPath);
	var scriptsUrl = url.format(url.parse(scriptsPath));

	return "file:///" + scriptsUrl + "/";
}

/*
 * Ensures that project for specific module created
 */
function createTsProject(projectPath, moduleName) {

	var tsProject = tsProjects[moduleName];
	if(!tsProject) {
		
		var tsProjectPath = projectPath + "/tsconfig.json";
		tsProject = ts.createProject(tsProjectPath);
		tsProjects[moduleName] = tsProject;
	}

	return tsProject;
}

function buildProject(projectPath, moduleName) {

	var sourceRoot = getSourceRoot(projectPath);
	var moduleDestPath = destinationPath + "/" + moduleName;

	var tsProject = createTsProject(projectPath, moduleName);
	var tsResult = tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

	var jsPipe = tsResult.js
		.pipe(sourcemaps.write(".", {
			includeContent: false,
			sourceRoot: sourceRoot
		}));

	return merge([
		tsResult.dts.pipe(gulp.dest(moduleDestPath)),
		jsPipe.pipe(gulp.dest(moduleDestPath))
	]);
};

gulp.task("build:servicea", function () {
	var projectPath = "../webclient.servicea";
	return buildProject(projectPath, "webclient.servicea");
});

gulp.task("build:serviceb", function () {
	var projectPath = "../webclient.serviceb";
	return buildProject(projectPath, "webclient.serviceb");
});

gulp.task("build:app", function () {
	var projectPath = "../webclient.application";
	return buildProject(projectPath, "webclient.application");
});

// Note: this is not entirely correct because all three go in parallel
gulp.task("build", ["build:app", "build:servicea", "build:serviceb"]);

// Starts watching on app changes
gulp.task("watch:app", ["build:app"], function () {
	var projectPath = "../webclient.application"; // TODO: get rid of duplicate with build task
	gulp.watch(projectPath + "/*.ts", ["build:app"]);
});