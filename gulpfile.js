/***
 * author : Rohit Jaiswal
 * created on : 06/07/2017
**/
const 	gulp = require('gulp'),
		htmlmin = require('gulp-htmlmin'),
		imagemin = require('gulp-imagemin'),
		cleanCSS = require('gulp-clean-css'),
		browserSync = require('browser-sync'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		rename = require('gulp-rename'),
		ngAnnotate = require('gulp-ng-annotate');


/**************TASK FOR COPYING FILES********/

var copy_sources = [
	"bower_components/**",
	"node_modules/**",
	"assets/**",
	"labels.json",
	"blueprints/**",
	"favicon.ico",
	"robots.txt",
	"web.config",
	"bower.json"
];

var paste_dest = "dist";


gulp.task('copy',function() {
	gulp.src(copy_sources,{base:'./'})
		.on('error',console.error.bind(console))
		.pipe(gulp.dest(paste_dest));
});

/***********END OF TASK FOR COPYING FILES*****/


var immediateSources = [
	"js/main.js",
	"js/directives.js",
	"app/components/components.js",
	"app/components/filters/pagination.js",
	"app/components/CustomDatepicker.js",
	"app/components/services/HTTPFactory.js",
	"app/components/services/ToastrService.js",
	"app/components/services/FullNameService.js",
	"app/components/services/LabelService.js",
	"app/system/system.js",
	"app/system/controllers/HeaderController.js",
	"app/system/controllers/NotFoundController.js",
	"app/system/controllers/SidebarController.js",
	"app/system/routes/SystemRoute.js",
	"app/system/controllers/LoginController.js",
	"app/system/controllers/RegistrationController.js",
	"app/system/controllers/UserProfileController.js",
	"app/system/controllers/OrganizationProfileController.js",
	"app/system/services/SystemService.js",
	"app/system/services/SystemDataService.js",
	"app/system/controllers/ResetPasswordController.js",
	"app/system/controllers/DashboardController.js",
	"app/system/controllers/SettingsController.js",
	"app/system/controllers/QuickLinksController.js",
	"app/administration/administration.js",
	"app/administration/routes/AdministrationRoutes.js",
	"app/administration/services/AdministrationDataService.js",
	"app/administration/services/AdministrationService.js",
	"app/administration/controllers/DocumentChecklistController.js",
	"app/administration/controllers/FormTemplateController.js",
	"app/administration/controllers/FormCategoryController.js",
	"app/beneficiary/beneficiary.js",
	"app/beneficiary/routes/BeneficiaryRoutes.js",
	"app/beneficiary/services/BeneficiaryDataService.js",
	"app/beneficiary/services/BeneficiaryService.js",
	"app/beneficiary/controllers/BeneficiaryListController.js",
	"app/beneficiary/controllers/BeneficiaryPageController.js",
	"app/case/case.js",
	"app/case/services/CaseDataService.js",
	"app/case/services/CaseService.js",
	"app/case/routes/CaseRoutes.js",
	"app/case/controllers/CreateCaseController.js",
	"app/case/controllers/CaseInfoController.js",
	"app/case/controllers/CaseListController.js",
	"app/case/controllers/CaseQuestionsController.js",
	"app/case/controllers/CasePageController.js",
	"app/case/controllers/LcaPopupController.js",
	"app/case/controllers/EduEvalPopupController.js",
	"app/case/controllers/CaseBeneQuestionsController.js",
	"app/organization/organization.js",
	"app/organization/services/OrganizationDataService.js",
	"app/organization/services/OrganizationService.js",
	"app/organization/routes/OrganizationRoutes.js",
	"app/organization/controllers/OrganizationUserController.js",
	"app/organization/controllers/OrganizationProjectsController.js",
	"app/organization/controllers/OrganizationProjectJobController.js",
	"app/organization/controllers/LcaDetailsController.js",
	"app/organization/controllers/educationEvalController.js",
	"app/organization/controllers/OrganizationWizardController.js",
	"app/organization/controllers/OrganizationMappingController.js",
	"app/user/user.js",
	"app/user/controllers/UserController.js",
	"app/user/controllers/UserWizardController.js",
	"app/user/routes/UserRoutes.js",
	"app/user/services/UserService.js",
	"app/user/services/UserDataService.js",
	"app/user/controllers/UserDocumentsController.js",
	"app/user/controllers/UserAddressController.js",
	"app/user/controllers/UserFamilyInfoController.js",
	"app/user/controllers/UserEducationController.js",
	"app/user/controllers/UserEmploymentController.js",
	"app/user/controllers/UserTravelController.js",
	"app/user/controllers/UserCertificatesController.js"
];

gulp.task('jsBuilder',function() {
	gulp.src(immediateSources)
		.pipe(concat('main2.js'))
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist/js/'))
		.pipe(rename('main.js'))
		.on('error',console.error.bind(console))
		.pipe(ngAnnotate())
		.on('error',console.error.bind(console))
		.pipe(uglify())
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist/js/'))
		.pipe(browserSync.reload({stream:true}));
});


// // ***********************************VIEWS MINIFICATION**************


// path : public/app

// ****ADMINISTRATION
gulp.task('app_administration_views',function(){
	gulp.src('app/administration/views/*.html')
		.pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist/app/administration/views/'))
		.pipe(browserSync.reload({stream:true}));
});


// ******BENEFICIARY
gulp.task('app_beneficiary_views',function(){
	gulp.src('app/beneficiary/views/*.html')
		.pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist/app/beneficiary/views/'))
		.pipe(browserSync.reload({stream:true}));
});

// ******CASE
gulp.task('app_case_views',function(){
	gulp.src('app/case/views/*.html')
		.pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist/app/case/views/'))
		.pipe(browserSync.reload({stream:true}));
});


// ********ORGANIZATION

gulp.task('app_organization_views',function(){
	gulp.src('app/organization/views/*.html')
		.pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist/app/organization/views/'))
		.pipe(browserSync.reload({stream:true}));
});


// *********SYSTEM************

gulp.task('app_system_views',function(){
	gulp.src('app/system/views/**/*.html')
		.pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist/app/system/views/'))
		.pipe(browserSync.reload({stream:true}));
});

// ***********USER**********

gulp.task('app_user_views',function(){
	gulp.src('app/user/views/**/*.html')
		.pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist/app/user/views/'))
		.pipe(browserSync.reload({stream:true}));
});




// CUSTOM path : public/css

gulp.task('public_css',function() {
	gulp.src('./css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.reload({stream:true}));
});

// *************BROWSER-SYNC*********************

gulp.task('browser-sync',function(){
	browserSync.init({
		open : false,
		server : {
			baseDir : './dist',
			index : 'index.html'
		}
	});
});
// ************************************************



// ******************base file - public/index.html**************

gulp.task('base_file',function(){
	gulp.src('./index.html')
		.pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
		.on('error',console.error.bind(console))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream:true}));
});


// // ***************************WATCHER****************************

// /**
// 	gulp watcher : watch
// */

gulp.task('watch',function(){
	gulp.watch('./index.html',['base_file']);
	gulp.watch('app/administration/views/*.html',['app_administration_views']);
	gulp.watch('app/beneficiary/views/*.html',['app_beneficiary_views']);
	gulp.watch('app/case/views/*.html',['app_case_views']);
	gulp.watch('app/organization/views/*.html',['app_organization_views']);
	gulp.watch('app/system/views/*.html',['app_system_views']);
	gulp.watch('app/user/views/*.html',['app_user_views']);
	gulp.watch(['app/**/*.js','tests/**/*.js','js/**/*.js'],['jsBuilder']);
	gulp.watch('./css/*.css',['public_css']);

});

// // **********END OF WATCHER*****************

var start_building_tasks = [
	'app_administration_views',
	'app_beneficiary_views',
	'app_organization_views',
	'app_system_views',
	'app_user_views',
	'app_case_views',
	'jsBuilder',
	'public_css',
	'base_file'
];


/**
	initial builder:build
*/
gulp.task('build',function() {
	gulp.start(start_building_tasks);
});


/**
	
	gulp initiator:default
	command : gulp

*/
gulp.task('default',['build','copy','browser-sync','watch']);

// "Note : watcher module has bugs and hence is not compatible. Needs to be appended"

// Solution to fix watcher bug
// in case watcher gives 'ENOSPC' error type the following command in the terminal(this is because the system has a limit to watch the number of files. Exceeding the limit would cause program to stopa and throw an error).
// command:
// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

