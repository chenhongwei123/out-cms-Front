/**
 * Created by HJJ on 2016/12/26.
 *
 ━━━━━━神兽出没━━━━━━
 　　　┏┓　　　┏┓
 　　┏┛┻━━━┛┻┓
 　　┃　　　　　　　┃
 　　┃　　　━　　　┃
 　　┃　┳┛　┗┳　┃
 　　┃　　　　　　　┃
 　　┃　　　┻　　　┃
 　　┃　　　　　　　┃
 　　┗━┓　　　┏━┛Code is far away from bug with the animal protecting
 　　　　┃　　　┃    神兽保佑,代码无bug
 　　　　┃　　　┃
 　　　　┃　　　┗━━━┓
 　　　　┃　　　　　　　┣┓
 　　　　┃　　　　　　　┏┛
 　　　　┗┓┓┏━┳┓┏┛
 　　　　　┃┫┫　┃┫┫
 　　　　　┗┻┛　┗┻┛
 ━━━━━━感觉萌萌哒━━━━━━

 gulp执行文件
 */

const gulp = require('gulp');
//压缩js文件
const uglify = require('gulp-uglify');
//压缩css文件
const minifyCss = require('gulp-minify-css');
//清除
const clean = require('gulp-clean');
//压缩图片
const imageMin = require('gulp-imagemin');
//压缩html
const htmlMin = require('gulp-htmlmin');
//js合并
const concat = require('gulp-concat');
//重命名
const rename = require('gulp-rename');


//默认task
gulp.task('default',['clean'],function () {
   gulp.start('styles','scripts','pages');
});

//设置压缩js文件
gulp.task('scripts',function () {

    return gulp.src('scripts/**/*.js')
        .pipe(concat('main.js')) //输出到main.js
        .pipe(gulp.dest('dist/scripts')) //输出路径
        .pipe(rename({suffix: '.min'})) //重命名
        .pipe(uglify()) //压缩文件
        .pipe(gulp.dest('dist/scripts')) //设置输出路径
});

//设置压缩css文件
gulp.task('styles',function () {

    return gulp.src('styles/**/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/styles'));
});

//设置图片压缩
gulp.task('images',function () {
    return gulp.src('images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/images'));
});

//设置html压缩
gulp.task('pages',function(){
    var options = {
        collapseWhitespace:true, //清楚空格压缩html
        collapseBooleanAttributes:true, //省略布尔属性值
        removeComments:false, //清楚注释
        removeEmptyAttributes:true, //清楚所有空属性
        removeScriptTypeAttributes:true, //清除所有script标签中的type="text/javascript"属性
        removeStyleLinkTypeAttributes:true, //清楚所有Link标签上的type属性。
        minifyJS:true, //压缩html中的javascript代码。
        minifyCSS:true //压缩html中的css代码
    };
    gulp.src('pages/*.html')
        .pipe(htmlMin(options))
        .pipe(gulp.dest('dist/pages'));
});

//设置清理
gulp.task('clean',function () {
    return gulp.src(['dist/styles','dist/scripts','dist/pages'],{read: false}).pipe(clean());
});



