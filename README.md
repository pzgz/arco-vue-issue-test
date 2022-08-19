Main Branch, without `"@arco-design/web-vue": "^2.34.1"`, open with vscode, the `$filters` added via `app.config.globalProperties.$filters` has correct typing in template.

![CleanShot 2022-08-20 at 02 00 37@2x](https://user-images.githubusercontent.com/529486/185679745-4621ded6-79e4-4bfc-864b-954a9ead96d9.png)

With dev branch, added `"@arco-design/web-vue": "^2.34.1"`, the typings added by [argumenting](https://cn.vuejs.org/api/utility-types.html#componentcustomprops) won't work any longer.


