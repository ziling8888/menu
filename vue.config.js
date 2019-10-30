module.exports = {
    
        devServer:{
            // 跨域api代理设置,TODO:跨域代理同样不会被打包到上架项目中,所以跨域api与真实服务保持一致
        proxy: {
            "/data": { // 当项目向/api开头的路径发送请求都会通过服务器代理访问target网站
                target: "https://api.jisuapi.com/recipe/byclass", // 代理跳转的目标网站
                changeOrigin: true, // 代理跳转至指定的host
                // 当你要 http://capi.douyucdn.cn/api?classid=226&start=0&num=20&appkey=2872823131c879a0
                // 只需要访问 /data?classid=226&start=0&num=20&appkey=2872823131c879a0
                pathRewrite:{
                    '^/data':''
                }
            },
            '/api':{
                target: "https://api.jisuapi.com/recipe/class", // 代理跳转的目标网站  
                // https://api.jisuapi.com/recipe/class?appkey=2872823131c879a0
                changeOrigin: true, // 代理跳转至指定的host
                // 当你要 http://capi.douyucdn.cn/api?classid=226&start=0&num=20&appkey=2872823131c879a0
                // 只需要访问 /data?classid=226&start=0&num=20&appkey=2872823131c879a0
                pathRewrite:{
                    '^/api':''
                }
            },
            '/word':{
                target:'https://api.jisuapi.com/recipe/detail',
                changeOrigin:true,
                pathRewrite:{
                    '^/word':''
                }
            },
            '/view':{
                target:'https://api.jisuapi.com/news/get',
                changeOrigin:true,
                pathRewrite:{
                    '^/view':''
                }
            }
        }
        }
        
    }
