ghost-diaspora
---

A Ghost theme based on [Diaspora](https://github.com/LoeiFy/Diaspora), licensed under the MIT License (same as the original theme).

All I did was porting the theme to Ghost. All credits should go to the original auther @Loeify, and please donate to the original author if you like this theme.

Installation
---

1. Clone this repo into Ghost's `content/themes/Diaspora`
2. Edit the `post.hbs`, replace `example` with your own Disqus short name
3. Choose `Diaspora` in Ghost's settings
4. You are all set. Remeber to add a picture for each post and a cover image for the entire blog

Developement
---

1. Clone this repository
2. Run `npm install` in this folder
3. Install `grunt-cli` and run `grunt` here
4. You are all set. Everytime you edit the style, you should run `grunt` again to build the theme

For Chinese Users / 中国用户注意
---

This theme requires resources from `cdn.materialdesignicons.com` `fonts.googleapis.com` `cdnjs.cloudflare.com`, which might be unreachable or reachable but slow in China. In this case, you should replace the URL with an alternative CDN URL (e.g. USTC Google Fonts CDN)

本主题引用了 `cdn.materialdesignicons.com` `fonts.googleapis.com` `cdnjs.cloudflare.com` 的资源，在中国访问较慢或无法访问。所以中国用户应当自行寻找替代用的镜像CDN并替换对应URL(例如：USTC CDN)。
